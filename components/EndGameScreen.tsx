import React from 'react';
import { Team } from '../types';

interface EndGameScreenProps {
  teams: Team[];
  onRestart: () => void;
}

const PodiumPlace: React.FC<{ team: Team; place: '1st' | '2nd' | '3rd' }> = ({ team, place }) => {
  const styles = {
    '1st': {
      height: 'h-48',
      bgColor: 'bg-amber-400',
      borderColor: 'border-amber-500',
      textColor: 'text-amber-800',
      medal: '🥇',
      label: '1º Lugar',
    },
    '2nd': {
      height: 'h-40',
      bgColor: 'bg-slate-300',
      borderColor: 'border-slate-400',
      textColor: 'text-slate-800',
      medal: '🥈',
      label: '2º Lugar',
    },
    '3rd': {
      height: 'h-32',
      bgColor: 'bg-orange-400',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-800',
      medal: '🥉',
      label: '3º Lugar',
    },
  };
  const style = styles[place];

  return (
    <div className="flex flex-col items-center justify-end w-1/3">
      <div className="text-3xl mb-2">{style.medal}</div>
      <div className={`w-full ${style.height} ${style.bgColor} border-b-8 ${style.borderColor} rounded-t-lg flex flex-col items-center justify-center p-2 text-center shadow-lg`}>
        <div className={`font-extrabold text-xl ${style.textColor}`}>{team.name}</div>
        <div className={`font-bold text-lg ${style.textColor}`}>{team.score} pontos</div>
      </div>
      <div className="font-bold text-lg mt-1">{style.label}</div>
    </div>
  );
};

const EndGameScreen: React.FC<EndGameScreenProps> = ({ teams, onRestart }) => {
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  const podium = sortedTeams.slice(0, 3);
  const others = sortedTeams.slice(3);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 text-gray-800 animate-fade-in">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-indigo-600">Fim de Jogo!</h1>
        <p className="text-xl text-gray-600 mt-2">Confira o resultado final da competição.</p>
      </header>

      <main className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Pódio dos Vencedores</h2>
        
        {/* Podium */}
        <div className="flex items-end justify-center h-64 mb-8">
          {podium[1] && <PodiumPlace team={podium[1]} place="2nd" />}
          {podium[0] && <PodiumPlace team={podium[0]} place="1st" />}
          {podium[2] && <PodiumPlace team={podium[2]} place="3rd" />}
        </div>

        {/* Other Teams */}
        {others.length > 0 && (
          <div className="mt-8 border-t pt-6">
            <h3 className="text-2xl font-bold text-center mb-4">Demais Equipes</h3>
            <div className="space-y-2 max-w-md mx-auto">
              {others.map((team, index) => (
                <div key={team.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                  <span className="font-bold text-lg text-gray-700">{index + 4}º - {team.name}</span>
                  <span className="font-bold text-lg bg-gray-200 text-gray-800 px-3 py-1 rounded-full">{team.score}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button
            onClick={onRestart}
            className="px-12 py-4 bg-indigo-600 text-white font-bold text-xl rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
          >
            Começar Novamente
          </button>
        </div>
      </main>

      <footer className="text-center mt-12 text-gray-500 text-sm">
        <p>Desenvolvido para atividades educacionais dinâmicas.</p>
      </footer>
    </div>
  );
};

export default EndGameScreen;