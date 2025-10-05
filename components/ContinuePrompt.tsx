import React from 'react';

interface ContinuePromptProps {
  onContinue: () => void;
  onEnd: () => void;
}

const ContinuePrompt: React.FC<ContinuePromptProps> = ({ onContinue, onEnd }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full mx-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Fim da Rodada!</h2>
        <p className="text-lg text-gray-600 mb-8">
          A rodada atual foi concluída. Deseja continuar para a próxima?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onEnd}
            className="px-8 py-3 bg-red-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-transform transform hover:scale-105"
          >
            Encerrar Jogo
          </button>
          <button
            onClick={onContinue}
            className="px-8 py-3 bg-green-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContinuePrompt;
