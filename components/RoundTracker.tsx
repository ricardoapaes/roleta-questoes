import React from 'react';
import { Team } from '../types';

interface RoundTrackerProps {
  currentRound: number;
  totalRounds: number;
  colorClasses: Team['color'];
}

const RoundTracker: React.FC<RoundTrackerProps> = ({ currentRound, totalRounds, colorClasses }) => {
  const rounds = Array.from({ length: totalRounds }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {rounds.map((round) => {
        let classes = 'w-5 h-5 rounded-full transition-all duration-300';
        if (round < currentRound) {
          classes += ` ${colorClasses.bg} shadow-inner`;
        } else if (round === currentRound) {
          classes += ` ${colorClasses.bg} ring-4 ${colorClasses.ring} scale-125 shadow-lg animate-pulse`;
        } else {
          classes += ' bg-gray-300';
        }
        return <div key={round} className={classes} title={`Rodada ${round}`}></div>;
      })}
    </div>
  );
};

export default RoundTracker;