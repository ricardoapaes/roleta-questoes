import React, { useState, useEffect } from 'react';
import { Question, Difficulty } from '../types';
import useSound from '../src/hooks/useSound'; // Importando o hook useSound

interface QuestionDisplayProps {
  question: Question | null;
  onQuestionAnswered: (correct: boolean) => void;
}

const difficultyColors: Record<Difficulty, { bg: string; text: string }> = {
  [Difficulty.EASY]: { bg: 'bg-green-100', text: 'text-green-800' },
  [Difficulty.MEDIUM]: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  [Difficulty.HARD]: { bg: 'bg-red-100', text: 'text-red-800' },
};

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, onQuestionAnswered }) => {
  const [answeredOption, setAnsweredOption] = useState<string | null>(null);
  
  // Inicializa os sons com o BASE_URL para compatibilidade com produção
  const { play: playCorrectSound } = useSound(import.meta.env.BASE_URL + 'sounds/correct.mp3');
  const { play: playIncorrectSound } = useSound(import.meta.env.BASE_URL + 'sounds/incorrect.mp3');

  useEffect(() => {
    setAnsweredOption(null);
  }, [question]);

  if (!question) {
    return (
      <div className="w-full h-full flex items-center justify-center p-6 bg-white rounded-2xl shadow-lg min-h-[400px]">
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

  const { difficulty, text, options, answer, explanation } = question;
  const colors = difficultyColors[difficulty];

  const handleOptionClick = (optionKey: string) => {
    if (answeredOption) return;

    setAnsweredOption(optionKey);
    const isCorrect = optionKey === answer;

    if (isCorrect) {
      playCorrectSound();
    } else {
      playIncorrectSound();
    }

    setTimeout(() => {
      onQuestionAnswered(isCorrect);
    }, 3500); // Increased delay to allow user to read the explanation
  };

  const getOptionClasses = (optionKey: string) => {
    if (!answeredOption) {
      return 'bg-gray-100 hover:bg-indigo-100 hover:ring-2 hover:ring-indigo-300';
    }
    if (optionKey === answer) {
      return 'bg-green-200 ring-2 ring-green-600 text-green-900 font-bold animate-pulse';
    }
    if (optionKey === answeredOption && optionKey !== answer) {
      return 'bg-red-200 ring-2 ring-red-500 text-red-900';
    }
    return 'bg-gray-100 opacity-60';
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
            onClick={() => handleOptionClick(key)}
            className={`p-4 rounded-lg text-left transition-all duration-300 ${getOptionClasses(key)} disabled:cursor-not-allowed`}
            disabled={!!answeredOption}
            aria-live="polite"
          >
            <span className="font-bold mr-3">{key}:</span>
            <span>{value}</span>
          </button>
        ))}
      </div>

      {answeredOption && explanation && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200 animate-fade-in">
          <h3 className="font-bold text-blue-800">Explicação:</h3>
          <p className="text-blue-700 mt-1">{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionDisplay;