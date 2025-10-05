import React from 'react';
import { GameSession, Team } from '../types';

interface HistoryScreenProps {
  history: GameSession[];
  onBack: () => void;
}

const Medal: React.FC<{ place: number }> = ({ place }) => {
  if (place === 0) return <span className="text-2xl" role="img" aria-label="Medalha de Ouro">🥇</span>;
  if (place === 1) return <span className="text-2xl" role="img" aria-label="Medalha de Prata">🥈</span>;
  if (place === 2) return <span className="text-2xl" role="img" aria-label="Medalha de Bronze">🥉</span>;
  return <span className="font-bold text-gray-600">{place + 1}º</span>;
};


const HistoryScreen: React.FC<HistoryScreenProps> = ({ history, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8 relative">
           <button onClick={onBack} className="absolute left-0 top-1/2 -translate-y-1/2 text-indigo-600 hover:text-indigo-800 font-medium text-lg">
                &larr; Voltar
            </button>
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600">Histórico de Partidas</h1>
        </header>

        <main className="space-y-6">
          {history.slice().reverse().map((session, index) => {
            const sortedTeams = [...session.teams].sort((a, b) => b.score - a.score);
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg animate-fade-in">
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">Jogo de {session.date}</h2>
                  <div className="text-right">
                    <p className="font-semibold text-gray-700">{session.bankSubject}</p>
                    <p className="text-sm text-gray-500">{session.rounds} rodadas por equipe</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {sortedTeams.map((team, rank) => (
                    <div key={team.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                       <div className="flex items-center gap-4">
                        <Medal place={rank} />
                        <span className="font-bold text-lg text-gray-700">{team.name}</span>
                       </div>
                       <div className="flex items-center gap-4">
                         <div className="flex items-center gap-1.5 flex-wrap max-w-xs" title="Histórico da partida">
                           {(team.answerHistory || []).map((isCorrect, i) => (
                             <div
                               key={i}
                               className={`w-3 h-3 rounded-full ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}
                             ></div>
                           ))}
                         </div>
                         <span className="font-extrabold text-lg bg-gray-200 text-gray-800 px-3 py-1 rounded-full w-20 text-center">
                           {team.score}
                         </span>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default HistoryScreen;