
import React, { useState, useCallback } from 'react';
import Roulette from './components/Roulette';
import QuestionDisplay from './components/QuestionDisplay';
import { getQuestionByDifficulty } from './services/questionBank';
import { Difficulty, Question } from './types';

const App: React.FC = () => {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  const handleSpin = useCallback(() => {
    if (spinning) return;

    setSpinning(true);
    setCurrentQuestion(null);

    const extraRotations = 5; // For a better visual spin effect
    const newRotation = rotation + (360 * extraRotations) + Math.random() * 360;
    setRotation(newRotation);

    // Determine winner after animation
    setTimeout(() => {
      const finalAngle = newRotation % 360;
      let selectedDifficulty: Difficulty;

      // Pointer is at the top (0 degrees), so we calculate the segment under it
      // The segments are drawn clockwise: Red (0-120), Green (120-240), Yellow (240-360)
      // A rotation of X degrees brings the (360-X) degree mark to the top.
      const winningAngle = 360 - finalAngle;
      
      if (winningAngle >= 0 && winningAngle < 120) {
        selectedDifficulty = Difficulty.HARD; // Red
      } else if (winningAngle >= 120 && winningAngle < 240) {
        selectedDifficulty = Difficulty.EASY; // Green
      } else {
        selectedDifficulty = Difficulty.MEDIUM; // Yellow
      }

      const question = getQuestionByDifficulty(selectedDifficulty, currentQuestion?.id);
      setCurrentQuestion(question);
      setSpinning(false);
    }, 5000); // Must match CSS transition duration in Roulette.tsx
  }, [spinning, rotation, currentQuestion]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center p-4 md:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600">Roleta de Questões</h1>
        <p className="text-lg text-gray-600 mt-2">Gire a roleta para sortear uma pergunta para a turma!</p>
      </header>
      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Roulette onSpin={handleSpin} spinning={spinning} rotation={rotation} />
        </div>
        <div className="flex justify-center">
          <QuestionDisplay question={currentQuestion} />
        </div>
      </main>
      <footer className="text-center mt-12 text-gray-500 text-sm">
        <p>Desenvolvido para atividades educacionais dinâmicas.</p>
      </footer>
    </div>
  );
};

export default App;
