import React from 'react';
import { Team } from '../types';

interface ScoreboardProps {
  teams: Team[];
  currentTeamId: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ teams, currentTeamId }) => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 border-b pb-3">Placar</h2>
      <div className="space-y-3">
        {teams.map((team) => (
          <div
            key={team.id}
            className={`flex justify-between items-center p-3 rounded-lg transition-all duration-300 ${
              team.id === currentTeamId ? `${team.color.lightBg} ring-2 ${team.color.ring}` : 'bg-gray-50'
            }`}
            aria-live="polite"
          >
            <span className={`font-bold text-lg flex items-center gap-3 ${team.id === currentTeamId ? team.color.text : 'text-gray-700'}`}>
               <span className={`w-3 h-3 rounded-full ${team.color.bg}`}></span>
              {team.name}
              {team.id === currentTeamId && <span className="ml-1 text-sm font-normal animate-pulse">(Sua vez)</span>}
            </span>
            <span className={`px-3 py-1 rounded-full font-extrabold text-lg ${team.id === currentTeamId ? `${team.color.bg} text-white` : 'bg-gray-200 text-gray-800'}`}>
              {team.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;