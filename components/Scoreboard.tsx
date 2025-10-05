import React, { useLayoutEffect, useRef } from 'react';
import { Team } from '../types';

interface ScoreboardProps {
  teams: Team[];
  currentTeamId: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ teams, currentTeamId }) => {
  const scoreboardRef = useRef<HTMLDivElement>(null);
  const prevRects = useRef<Record<number, DOMRect>>({});

  useLayoutEffect(() => {
    const scoreboardEl = scoreboardRef.current;
    if (!scoreboardEl) return;

    const newRects: Record<number, DOMRect> = {};
    const teamElements = scoreboardEl.children;

    // L - LAST: Get the final positions of elements
    for (const el of Array.from(teamElements)) {
      const teamId = (el as HTMLElement).dataset.teamId;
      if (teamId) {
        newRects[parseInt(teamId, 10)] = (el as HTMLElement).getBoundingClientRect();
      }
    }

    // I & P - INVERT & PLAY
    for (const el of Array.from(teamElements)) {
      const teamId = (el as HTMLElement).dataset.teamId;
      if (!teamId) continue;
      
      const id = parseInt(teamId, 10);
      const oldRect = prevRects.current[id];
      const newRect = newRects[id];
      
      if (oldRect) {
        const deltaY = oldRect.top - newRect.top;
        if (deltaY !== 0) {
          requestAnimationFrame(() => {
            // I - Invert: Apply transform to make it look like it hasn't moved
            (el as HTMLElement).style.transform = `translateY(${deltaY}px)`;
            (el as HTMLElement).style.transition = 'transform 0s';
            
            requestAnimationFrame(() => {
              // P - Play: Remove the transform, allowing it to animate to its new (0,0) position
              (el as HTMLElement).style.transform = '';
              const isScoringTeam = id === currentTeamId;

              if (isScoringTeam) {
                // Special animation for the scoring team
                (el as HTMLElement).style.transition = 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)';
                (el as HTMLElement).classList.add('relative', 'z-10', 'scale-105', 'shadow-lg');
                
                setTimeout(() => {
                  (el as HTMLElement).classList.remove('relative', 'z-10', 'scale-105', 'shadow-lg');
                }, 600);
              } else {
                // Standard animation for other teams
                (el as HTMLElement).style.transition = 'transform 500ms ease-in-out';
              }
            });
          });
        }
      }
    }
    
    // F - FIRST: Store the new positions for the next render
    prevRects.current = newRects;
  }, [teams]);


  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 border-b pb-3">Placar</h2>
      <div ref={scoreboardRef} className="space-y-3">
        {teams.map((team) => (
          <div
            key={team.id}
            data-team-id={team.id}
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
            <div className="flex items-center gap-3">
              {team.incorrectAnswers > 0 && (
                <span className="flex items-center text-red-500 font-bold text-sm" title={`${team.incorrectAnswers} respostas erradas`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>{team.incorrectAnswers}</span>
                </span>
              )}
              <span className={`px-3 py-1 rounded-full font-extrabold text-lg transition-colors duration-300 ${team.id === currentTeamId ? `${team.color.bg} text-white` : 'bg-gray-200 text-gray-800'}`}>
                {team.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;