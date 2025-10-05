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
        // FIX: Cast element to HTMLElement to access getBoundingClientRect, fixing 'unknown' type error.
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
              (el as HTMLElement).style.transition = 'transform 500ms ease-in-out';
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
            className={`flex justify-between items-center p-3 rounded-lg ${
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
