// FIX: Removed self-import that caused declaration conflicts for 'Difficulty' and 'Question'.
export enum Difficulty {
  EASY = 'Verde',
  MEDIUM = 'Amarelo',
  HARD = 'Vermelho'
}

export interface Question {
  id: number;
  difficulty: Difficulty;
  text: string;
  options: { [key: string]: string };
  answer: string;
  explanation: string;
}

export interface QuestionBank {
  id: string;
  subject: string;
  questions: Question[];
}

export enum GamePhase {
  CLASS_SETUP = 'CLASS_SETUP',
  GAME_SETUP = 'GAME_SETUP',
  PLAYING = 'PLAYING',
  ENDGAME = 'ENDGAME',
  HISTORY = 'HISTORY',
}

export interface Team {
  id: number;
  name: string;
  score: number;
  questionsAnswered: number;
  answerHistory: boolean[];
  color: {
    bg: string;
    text: string;
    ring: string;
    lightBg: string;
  };
}

export interface GameSession {
  date: string;
  teams: Team[];
  bankSubject: string;
  rounds: number;
}

export interface ClassData {
  id: string; // uuid
  name: string;
  teams: { id: number; name: string }[];
  answeredQuestionIds: number[];
  gameHistory: GameSession[];
}