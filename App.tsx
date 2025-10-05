import React, { useState, useCallback } from 'react';
import Roulette from './components/Roulette';
import QuestionDisplay from './components/QuestionDisplay';
import GameSetup from './components/GameSetup';
import Scoreboard from './components/Scoreboard';
import EndGameScreen from './components/EndGameScreen';
import { questionBanks } from './services/questionBanks';
import { Difficulty, Question, GamePhase, Team } from './types';

const POINTS_MAP: Record<Difficulty, number> = {
  [Difficulty.HARD]: 3,
  [Difficulty.MEDIUM]: 2,
  [Difficulty.EASY]: 1,
};

const TEAM_COLORS = [
  { bg: 'bg-blue-500', text: 'text-blue-700', ring: 'ring-blue-400', lightBg: 'bg-blue-100' },
  { bg: 'bg-green-500', text: 'text-green-700', ring: 'ring-green-400', lightBg: 'bg-green-100' },
  { bg: 'bg-red-500', text: 'text-red-700', ring: 'ring-red-400', lightBg: 'bg-red-100' },
  { bg: 'bg-yellow-500', text: 'text-yellow-700', ring: 'ring-yellow-400', lightBg: 'bg-yellow-100' },
  { bg: 'bg-purple-500', text: 'text-purple-700', ring: 'ring-purple-400', lightBg: 'bg-purple-100' },
  { bg: 'bg-pink-500', text: 'text-pink-700', ring: 'ring-pink-400', lightBg: 'bg-pink-100' },
  { bg: 'bg-teal-500', text: 'text-teal-700', ring: 'ring-teal-400', lightBg: 'bg-teal-100' },
  { bg: 'bg-orange-500', text: 'text-orange-700', ring: 'ring-orange-400', lightBg: 'bg-orange-100' },
];


const App: React.FC = () => {
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.SETUP);
  const [teams, setTeams] = useState<Team[]>([]);
  const [currentTeamId, setCurrentTeamId] = useState<number>(1);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState<boolean>(true);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [roundsPerTeam, setRoundsPerTeam] = useState<number>(10);

  const handleStartGame = useCallback((teamCount: number, bankId: string, rounds: number) => {
    const selectedBank = questionBanks.find(b => b.id === bankId);
    if (!selectedBank) return;
    
    setActiveQuestions(selectedBank.questions);
    setRoundsPerTeam(rounds);

    const newTeams = Array.from({ length: teamCount }, (_, i) => ({
      id: i + 1,
      name: `Equipe ${i + 1}`,
      score: 0,
      questionsAnswered: 0,
      color: TEAM_COLORS[i % TEAM_COLORS.length],
    }));
    setTeams(newTeams);
    setCurrentTeamId(1);
    setGamePhase(GamePhase.PLAYING);
    setIsQuestionAnswered(true);
    setCurrentQuestion(null);
  }, []);

  const getQuestionByDifficulty = useCallback((difficulty: Difficulty): Question => {
    const filteredQuestions = activeQuestions.filter(q => q.difficulty === difficulty && q.id !== currentQuestion?.id);
    if (filteredQuestions.length === 0) {
      const fallbackQuestions = activeQuestions.filter(q => q.difficulty === difficulty);
      return fallbackQuestions[Math.floor(Math.random() * fallbackQuestions.length)];
    }
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    return filteredQuestions[randomIndex];
  }, [activeQuestions, currentQuestion]);

  const handleSpin = useCallback(() => {
    if (spinning) return;

    setSpinning(true);
    setIsQuestionAnswered(false);

    const extraRotations = 5;
    const newRotation = rotation + (360 * extraRotations) + Math.random() * 360;
    setRotation(newRotation);

    setTimeout(() => {
      const finalAngle = newRotation % 360;
      const winningAngle = 360 - finalAngle;
      let selectedDifficulty: Difficulty;

      if (winningAngle >= 0 && winningAngle < 120) {
        selectedDifficulty = Difficulty.HARD;
      } else if (winningAngle >= 120 && winningAngle < 240) {
        selectedDifficulty = Difficulty.EASY;
      } else {
        selectedDifficulty = Difficulty.MEDIUM;
      }

      const question = getQuestionByDifficulty(selectedDifficulty);
      setCurrentQuestion(question);
      setSpinning(false);
    }, 5000);
  }, [spinning, rotation, getQuestionByDifficulty]);
  
  const handleQuestionAnswered = useCallback((correct: boolean) => {
    if (!currentQuestion) return;

    let isGameOver = false;

    setTeams(prevTeams => {
      const newTeams = prevTeams.map(team => {
        if (team.id === currentTeamId) {
          const newAnsweredCount = team.questionsAnswered + 1;
          if (team.id === prevTeams.length && newAnsweredCount >= roundsPerTeam) {
            isGameOver = true;
          }
          return {
            ...team,
            score: correct ? team.score + POINTS_MAP[currentQuestion.difficulty] : team.score,
            questionsAnswered: newAnsweredCount,
          };
        }
        return team;
      });
      return newTeams;
    });

    setIsQuestionAnswered(true);

    if (isGameOver) {
      setGamePhase(GamePhase.ENDGAME);
    } else {
      setCurrentTeamId(prevId => (prevId % teams.length) + 1);
    }
  }, [currentQuestion, currentTeamId, teams.length, roundsPerTeam]);

  const handleRestart = useCallback(() => {
    setGamePhase(GamePhase.SETUP);
    setTeams([]);
    setCurrentTeamId(1);
    setCurrentQuestion(null);
    setSpinning(false);
    setRotation(0);
    setActiveQuestions([]);
    setIsQuestionAnswered(true);
  }, []);

  if (gamePhase === GamePhase.SETUP) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600">Roleta de Questões</h1>
          <p className="text-lg text-gray-600 mt-2">Uma atividade divertida para testar conhecimentos!</p>
        </header>
        <GameSetup onStartGame={handleStartGame} banks={questionBanks} />
         <footer className="text-center mt-12 text-gray-500 text-sm absolute bottom-8">
          <p>Desenvolvido para atividades educacionais dinâmicas.</p>
        </footer>
      </div>
    );
  }

  if (gamePhase === GamePhase.ENDGAME) {
    return <EndGameScreen teams={teams} onRestart={handleRestart} />;
  }
  
  const currentTeam = teams.find(t => t.id === currentTeamId);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center p-4 md:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600">Roleta de Questões</h1>
      </header>
      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col items-center gap-8">
          <Roulette 
            onSpin={handleSpin} 
            spinning={spinning} 
            rotation={rotation}
            disabled={spinning || (!!currentQuestion && !isQuestionAnswered)}
          />
          <Scoreboard teams={teams} currentTeamId={currentTeamId} />
        </div>
        <div>
          {currentTeam && (
            <div className={`w-full p-5 rounded-2xl shadow-lg text-center mb-8 ${currentTeam.color.lightBg} border-2 ${currentTeam.color.ring}`}>
                <h2 className={`text-2xl font-bold ${currentTeam.color.text}`}>
                    Vez da {currentTeam.name}!
                </h2>
                <p className="text-lg text-gray-600 mt-1">
                    Rodada {currentTeam.questionsAnswered + 1} de {roundsPerTeam}
                </p>
            </div>
          )}
          <QuestionDisplay 
              question={currentQuestion} 
              onQuestionAnswered={handleQuestionAnswered}
          />
        </div>
      </main>
      <footer className="text-center mt-12 text-gray-500 text-sm">
        <p>Desenvolvido para atividades educacionais dinâmicas.</p>
      </footer>
    </div>
  );
};

export default App;