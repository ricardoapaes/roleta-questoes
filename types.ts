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
}

export interface QuestionBank {
  id: string;
  subject: string;
  questions: Question[];
}

export enum GamePhase {
  SETUP = 'SETUP',
  PLAYING = 'PLAYING'
}

export interface Team {
  id: number;
  name: string;
  score: number;
  color: {
    bg: string;
    text: string;
    ring: string;
    lightBg: string;
  };
}