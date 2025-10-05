import React, { useState } from 'react';
import { QuestionBank } from '../types';

interface GameSetupProps {
  onStartGame: (teamCount: number, bankId: string, rounds: number) => void;
  banks: QuestionBank[];
}

const GameSetup: React.FC<GameSetupProps> = ({ onStartGame, banks }) => {
  const [teamCount, setTeamCount] = useState<number>(2);
  const [rounds, setRounds] = useState<number>(10);
  const [selectedBank, setSelectedBank] = useState<string>(banks[0]?.id || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (teamCount > 0 && teamCount <= 10 && rounds > 0 && rounds <= 20 && selectedBank) {
      onStartGame(teamCount, selectedBank, rounds);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Configuração do Jogo</h2>
      <p className="text-gray-600 mb-6">Defina as equipes e o tema para começar.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="teamCount" className="block text-lg font-medium text-gray-700 mb-2">
              Equipes
            </label>
            <input
              type="number"
              id="teamCount"
              value={teamCount}
              onChange={(e) => setTeamCount(parseInt(e.target.value, 10) || 1)}
              min="1"
              max="10"
              className="w-full px-4 py-3 text-center text-xl font-bold border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              aria-label="Número de equipes"
            />
          </div>
          <div>
            <label htmlFor="rounds" className="block text-lg font-medium text-gray-700 mb-2">
              Rodadas
            </label>
            <input
              type="number"
              id="rounds"
              value={rounds}
              onChange={(e) => setRounds(parseInt(e.target.value, 10) || 1)}
              min="1"
              max="20"
              className="w-full px-4 py-3 text-center text-xl font-bold border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              aria-label="Número de rodadas por equipe"
            />
          </div>
        </div>

        <div>
           <label htmlFor="questionBank" className="block text-lg font-medium text-gray-700 mb-2">
            Tema das Questões
          </label>
          <select
            id="questionBank"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            className="w-full px-4 py-3 text-left text-lg border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            aria-label="Tema das questões"
          >
            {banks.map(bank => (
              <option key={bank.id} value={bank.id}>{bank.subject}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-indigo-600 text-white font-bold text-xl rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
        >
          Iniciar Jogo
        </button>
      </form>
    </div>
  );
};

export default GameSetup;