
import React, { useState, useEffect } from 'react';
import { Question, Difficulty } from '../types';

interface QuestionDisplayProps {
  question: Question | null;
}

const difficultyColors: Record<Difficulty, { bg: string; text: string }> = {
  [Difficulty.EASY]: { bg: 'bg-green-100', text: 'text-green-800' },
  [Difficulty.MEDIUM]: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  [Difficulty.HARD]: { bg: 'bg-red-100', text: 'text-red-800' },
};

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  useEffect(() => {
    setShowAnswer(false);
    setSelectedOption(null);
  }, [question]);

  if (!question) {
    return (
      <div className="w-full h-full flex items-center justify-center p-6 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">Nenhuma questão selecionada</h3>
          <p className="mt-1 text-gray-500">Gire a roleta para começar a atividade!</p>
        </div>
      </div>
    );
  }

  const { difficulty, text, options, answer } = question;
  const colors = difficultyColors[difficulty];

  const getOptionClasses = (optionKey: string) => {
    if (!showAnswer) {
      return selectedOption === optionKey ? 'bg-indigo-200 ring-2 ring-indigo-500' : 'bg-gray-100 hover:bg-gray-200';
    }
    if (optionKey === answer) {
      return 'bg-green-200 ring-2 ring-green-600 text-green-900 font-bold';
    }
    if (selectedOption === optionKey && selectedOption !== answer) {
      return 'bg-red-200 ring-2 ring-red-500';
    }
    return 'bg-gray-100';
  };

  return (
    <div className="w-full p-8 bg-white rounded-2xl shadow-lg flex flex-col gap-6 transition-all duration-500 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Questão</h2>
        <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${colors.bg} ${colors.text}`}>
          {difficulty === Difficulty.EASY && 'Fácil'}
          {difficulty === Difficulty.MEDIUM && 'Médio'}
          {difficulty === Difficulty.HARD && 'Difícil'}
        </span>
      </div>
      
      <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {Object.entries(options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => !showAnswer && setSelectedOption(key)}
            className={`p-4 rounded-lg text-left transition-all duration-300 cursor-pointer ${getOptionClasses(key)} disabled:cursor-not-allowed`}
            disabled={showAnswer}
          >
            <span className="font-bold mr-3">{key}:</span>
            <span>{value}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300"
        >
          {showAnswer ? 'Ocultar Resposta' : 'Mostrar Resposta'}
        </button>
      </div>
    </div>
  );
};

export default QuestionDisplay;
