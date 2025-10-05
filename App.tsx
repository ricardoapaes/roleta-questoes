import React, { useState, useCallback, useEffect } from 'react';
import Roulette from './components/Roulette';
import QuestionDisplay from './components/QuestionDisplay';
import GameSetup from './components/GameSetup';
import Scoreboard from './components/Scoreboard';
import EndGameScreen from './components/EndGameScreen';
import ClassSetup from './components/ClassSetup';
import HistoryScreen from './components/HistoryScreen';
import { questionBanks } from './services/questionBanks';
import { getClasses, saveClasses } from './services/storageService';
import { Difficulty, Question, GamePhase, Team, ClassData, GameSession } from './types';

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
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.CLASS_SETUP);
  const [allClasses, setAllClasses] = useState<ClassData[]>([]);
  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);
  
  const [teams, setTeams] = useState<Team[]>([]);
  const [currentTeamId, setCurrentTeamId] = useState<number>(1);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState<boolean>(true);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [roundsPerTeam, setRoundsPerTeam] = useState<number>(10);
  const [isRouletteFocused, setIsRouletteFocused] = useState<boolean>(false);

  useEffect(() => {
    setAllClasses(getClasses());
  }, []);

  const handleCreateClass = useCallback((name: string) => {
    const newClass: ClassData = {
      id: crypto.randomUUID(),
      name,
      teams: [],
      answeredQuestionIds: [],
      gameHistory: [],
    };
    const updatedClasses = [...allClasses, newClass];
    setAllClasses(updatedClasses);
    saveClasses(updatedClasses);
    setSelectedClass(newClass);
    setGamePhase(GamePhase.GAME_SETUP);
  }, [allClasses]);

  const handleSelectClass = useCallback((id: string) => {
    const foundClass = allClasses.find(c => c.id === id);
    if (foundClass) {
      setSelectedClass(foundClass);
      setGamePhase(GamePhase.GAME_SETUP);
    }
  }, [allClasses]);

  const handleStartGame = useCallback((
    teamsConfig: { id: number; name: string }[],
    bankId: string,
    rounds: number
  ) => {
    const selectedBank = questionBanks.find(b => b.id === bankId);
    if (!selectedBank || !selectedClass) return;
    
    setActiveQuestions(selectedBank.questions);
    setRoundsPerTeam(rounds);

    const newTeams = teamsConfig.map((teamConfig, i) => ({
      ...teamConfig,
      score: 0,
      questionsAnswered: 0,
      color: TEAM_COLORS[i % TEAM_COLORS.length],
    }));
    setTeams(newTeams);

    // Persist team names
    setSelectedClass(prev => {
      const updatedClass = { ...prev!, teams: teamsConfig };
       const updatedClasses = allClasses.map(c => c.id === updatedClass.id ? updatedClass : c);
      saveClasses(updatedClasses);
      setAllClasses(updatedClasses);
      return updatedClass;
    });
    
    setCurrentTeamId(1);
    setCurrentQuestion(null);
    setIsQuestionAnswered(true);
    setGamePhase(GamePhase.PLAYING);
  }, [selectedClass, allClasses]);

  const getQuestionByDifficulty = useCallback((difficulty: Difficulty): Question => {
    const answeredIds = new Set(selectedClass?.answeredQuestionIds || []);
    const availableQuestions = activeQuestions.filter(q => q.difficulty === difficulty && !answeredIds.has(q.id));
    
    if (availableQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      return availableQuestions[randomIndex];
    }
    
    // Fallback if all questions of a difficulty are answered
    const allQuestionsOfDifficulty = activeQuestions.filter(q => q.difficulty === difficulty);
    return allQuestionsOfDifficulty[Math.floor(Math.random() * allQuestionsOfDifficulty.length)];
  }, [activeQuestions, selectedClass]);

  const handleSpin = useCallback(() => {
    if (spinning || !isQuestionAnswered) return;

    setCurrentQuestion(null);
    setIsQuestionAnswered(false);
    setIsRouletteFocused(true);

    // Delay spin start to allow for focus animation
    setTimeout(() => {
      setSpinning(true);
      const extraRotations = 5;
      const newRotation = rotation + (360 * extraRotations) + Math.random() * 360;
      setRotation(newRotation);
      
      setTimeout(() => {
        const finalAngle = newRotation % 360;
        const winningAngle = 360 - finalAngle;
        let selectedDifficulty: Difficulty;
        if (winningAngle >= 0 && winningAngle < 120) selectedDifficulty = Difficulty.HARD;
        else if (winningAngle >= 120 && winningAngle < 240) selectedDifficulty = Difficulty.EASY;
        else selectedDifficulty = Difficulty.MEDIUM;
        
        const question = getQuestionByDifficulty(selectedDifficulty);
        setCurrentQuestion(question);
        setSpinning(false);
        setIsRouletteFocused(false);
      }, 5000); // Spin duration
    }, 700); // Focus animation duration
  }, [spinning, rotation, getQuestionByDifficulty, isQuestionAnswered]);
  
  const handleQuestionAnswered = useCallback((correct: boolean) => {
    if (!currentQuestion || !selectedClass) return;

    let isGameOver = false;
    let finalTeams: Team[] = [];

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
      const sortedTeams = [...newTeams].sort((a, b) => b.score - a.score);
      finalTeams = sortedTeams;
      return sortedTeams;
    });

    setIsQuestionAnswered(true);
    
    // Update answered questions for the class
    const updatedAnsweredIds = [...(selectedClass.answeredQuestionIds || []), currentQuestion.id];

    if (isGameOver) {
      const bankSubject = questionBanks.find(b => b.questions.some(q => q.id === currentQuestion.id))?.subject || 'Desconhecido';
      const newSession: GameSession = {
        date: new Date().toLocaleDateString('pt-BR'),
        teams: finalTeams,
        bankSubject,
        rounds: roundsPerTeam,
      };

      const updatedClass: ClassData = {
        ...selectedClass,
        answeredQuestionIds: updatedAnsweredIds,
        gameHistory: [...selectedClass.gameHistory, newSession],
      };

      setSelectedClass(updatedClass);
      const updatedClasses = allClasses.map(c => c.id === updatedClass.id ? updatedClass : c);
      setAllClasses(updatedClasses);
      saveClasses(updatedClasses);

      setGamePhase(GamePhase.ENDGAME);
    } else {
       // Persist answered question immediately
      const updatedClass = { ...selectedClass, answeredQuestionIds: updatedAnsweredIds };
      setSelectedClass(updatedClass);
      const updatedClasses = allClasses.map(c => c.id === updatedClass.id ? updatedClass : c);
      setAllClasses(updatedClasses);
      saveClasses(updatedClasses);

      setCurrentTeamId(prevId => (prevId % teams.length) + 1);
    }
  }, [currentQuestion, currentTeamId, teams.length, roundsPerTeam, selectedClass, allClasses]);
  
  const resetGameState = () => {
    setTeams([]);
    setCurrentTeamId(1);
    setCurrentQuestion(null);
    setSpinning(false);
    setRotation(0);
    setActiveQuestions([]);
    setIsQuestionAnswered(true);
  };

  const handleRestart = useCallback(() => {
    resetGameState();
    setGamePhase(GamePhase.CLASS_SETUP);
    setSelectedClass(null);
  }, []);

  const handleBackToSetup = useCallback(() => {
    resetGameState();
    setGamePhase(GamePhase.GAME_SETUP);
  }, []);

  const renderContent = () => {
    switch (gamePhase) {
      case GamePhase.CLASS_SETUP:
        return <ClassSetup classes={allClasses} onCreateClass={handleCreateClass} onSelectClass={handleSelectClass} />;
      case GamePhase.GAME_SETUP:
        if (!selectedClass) return null;
        return (
          <GameSetup
            classData={selectedClass}
            onStartGame={handleStartGame}
            banks={questionBanks}
            onShowHistory={() => setGamePhase(GamePhase.HISTORY)}
            onBack={() => {
              setSelectedClass(null);
              setGamePhase(GamePhase.CLASS_SETUP);
            }}
          />
        );
      case GamePhase.HISTORY:
        if (!selectedClass) return null;
        return <HistoryScreen history={selectedClass.gameHistory} onBack={handleBackToSetup} />;
      case GamePhase.ENDGAME:
        return <EndGameScreen teams={teams} onRestart={handleRestart} />;
      case GamePhase.PLAYING:
        const currentTeam = teams.find(t => t.id === currentTeamId);
        return (
          <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center p-4 md:p-8 overflow-hidden">
            <header className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600">Roleta de Questões</h1>
            </header>
            <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className={`lg:col-span-1 flex flex-col items-center gap-8 transition-all duration-700 ease-in-out ${isRouletteFocused ? 'lg:col-span-3' : ''}`}>
                  <Roulette 
                    onSpin={handleSpin} 
                    spinning={spinning} 
                    rotation={rotation}
                    disabled={spinning || !isQuestionAnswered}
                  />
                  <div className={`w-full transition-opacity duration-300 ${isRouletteFocused ? 'opacity-0 invisible h-0' : 'opacity-100 visible h-auto'}`}>
                    <Scoreboard teams={teams} currentTeamId={currentTeamId} />
                  </div>
              </div>
              <div className={`lg:col-span-2 flex flex-col gap-8 transition-opacity duration-300 ${isRouletteFocused ? 'opacity-0 invisible h-0' : 'opacity-100 visible h-auto'}`}>
                {currentTeam && (
                  <div className={`w-full p-5 rounded-2xl shadow-lg text-center ${currentTeam.color.lightBg} border-2 ${currentTeam.color.ring}`}>
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
      default:
        return <div>Carregando...</div>;
    }
  };

  return <>{renderContent()}</>;
};

export default App;