import React, { useState, useEffect } from 'react';
import { QuestionBank, ClassData } from '../types';
import { questionBanks } from '../src/services/questionBanks'; // Caminho corrigido

interface GameSetupProps {
  onStartGame: (teams: { id: number; name: string }[], bankId: string, rounds: number) => void;
  banks: QuestionBank[];
  classData: ClassData;
  onShowHistory: () => void;
  onBack: () => void;
}

const GameSetup: React.FC<GameSetupProps> = ({ onStartGame, banks, classData, onShowHistory, onBack }) => {
  const [teamCount, setTeamCount] = useState<number>(classData.teams.length || 2);
  const [teams, setTeams] = useState<{ id: number; name: string }[]>([]);
  const [rounds, setRounds] = useState<number>(10);
  const [selectedBank, setSelectedBank] = useState<string>(banks[0]?.id || '');
  
  useEffect(() => {
    const initialTeams = Array.from({ length: teamCount }, (_, i) => {
      const existingTeam = classData.teams.find(t => t.id === i + 1);
      return { id: i + 1, name: existingTeam?.name || `Equipe ${i + 1}` };
    });
    setTeams(initialTeams);
  }, [teamCount, classData.teams]);

  const handleTeamNameChange = (id: number, name: string) => {
    setTeams(prevTeams => prevTeams.map(team => (team.id === id ? { ...team, name } : team)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (teams.every(t => t.name.trim()) && rounds > 0 && rounds <= 20 && selectedBank) {
      onStartGame(teams, selectedBank, rounds);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
            <button onClick={onBack} className="text-indigo-600 hover:text-indigo-800 font-medium">
                &larr; Trocar Turma
            </button>
            <h2 className="text-3xl font-bold text-gray-800 text-center">Configurar Jogo</h2>
            <button
                onClick={onShowHistory}
                disabled={classData.gameHistory.length === 0}
                className="text-indigo-600 hover:text-indigo-800 font-medium disabled:text-gray-400 disabled:cursor-not-allowed"
            >
                Ver Histórico &rarr;
            </button>
        </div>
        <p className="text-gray-600 mb-6 text-center">
            Turma: <span className="font-bold">{classData.name}</span>. Defina as equipes e o tema para começar.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="teamCount" className="block text-lg font-medium text-gray-700 mb-2">
                Nº de Equipes
              </label>
              <input type="number" id="teamCount" value={teamCount} onChange={(e) => setTeamCount(parseInt(e.target.value, 10) || 1)} min="1" max="8" className="w-full px-4 py-3 text-center text-xl font-bold border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="rounds" className="block text-lg font-medium text-gray-700 mb-2">
                Rodadas
              </label>
              <input type="number" id="rounds" value={rounds} onChange={(e) => setRounds(parseInt(e.target.value, 10) || 1)} min="1" max="20" className="w-full px-4 py-3 text-center text-xl font-bold border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Nome das Equipes</label>
            <div className="grid grid-cols-2 gap-4">
              {teams.map(team => (
                <input
                  key={team.id}
                  type="text"
                  value={team.name}
                  onChange={(e) => handleTeamNameChange(team.id, e.target.value)}
                  className="w-full px-4 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder={`Nome da Equipe ${team.id}`}
                />
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="questionBank" className="block text-lg font-medium text-gray-700 mb-2">Tema das Questões</label>
            <select id="questionBank" value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)} className="w-full px-4 py-3 text-left text-lg text-gray-800 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white">
              {banks.map(bank => (<option key={bank.id} value={bank.id}>{bank.subject}</option>))}
            </select>
          </div>

          <button type="submit" className="w-full mt-4 px-8 py-4 bg-indigo-600 text-white font-bold text-xl rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105">
            Iniciar Jogo
          </button>
        </form>
      </div>
    </div>
  );
};

export default GameSetup;