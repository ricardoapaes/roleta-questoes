import React from 'react';

interface RouletteProps {
  onSpin: () => void;
  spinning: boolean;
  rotation: number;
  disabled: boolean;
}

const PointerIcon = () => (
  <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 drop-shadow-lg">
    <path d="M30 70L58.2869 17.5H1.71311L30 70Z" fill="#4B5563"/>
    <path d="M30 62.015L52.2215 19H7.77853L30 62.015Z" fill="#9CA3AF"/>
    <circle cx="30" cy="18" r="18" fill="#4B5563"/>
    <circle cx="30" cy="18" r="12" fill="#F9FAFB"/>
  </svg>
);

const Roulette: React.FC<RouletteProps> = ({ onSpin, spinning, rotation, disabled }) => {
  return (
    <div className={`flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${spinning ? 'p-0 gap-0' : 'p-6 gap-12 bg-white rounded-2xl shadow-lg'}`}>
      <div className="relative flex items-center justify-center">
        <PointerIcon />
        <div 
          className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-8 border-gray-600 shadow-2xl overflow-hidden"
          style={{
            transition: 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)',
            transform: `rotate(${rotation}deg)`
          }}
        >
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `conic-gradient(
                #EF4444 0deg 120deg,       /* Vermelho (Difícil) */
                #10B981 120deg 240deg,    /* Verde (Fácil) */
                #F59E0B 240deg 360deg     /* Amarelo (Médio) */
              )`
            }}
          ></div>
          <div className="absolute w-20 h-20 bg-gray-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-gray-400"></div>
        </div>
      </div>
      {!spinning && (
        <button 
          onClick={onSpin}
          disabled={disabled}
          className="px-12 py-4 bg-indigo-600 text-white font-bold text-xl rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105 disabled:scale-100"
        >
          Girar Roleta
        </button>
      )}
    </div>
  );
};

export default Roulette;