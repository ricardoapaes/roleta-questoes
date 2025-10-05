
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
