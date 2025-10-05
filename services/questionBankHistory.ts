import { Difficulty, Question } from '../types';

export const subject = 'História';
export const questions: Question[] = [
  // FÁCIL (Verde)
  {
    id: 13,
    difficulty: Difficulty.EASY,
    text: 'Quem descobriu o Brasil?',
    options: { A: 'Vasco da Gama', B: 'Pedro Álvares Cabral', C: 'Cristóvão Colombo', D: 'Fernão de Magalhães' },
    answer: 'B'
  },
  {
    id: 14,
    difficulty: Difficulty.EASY,
    text: 'Em que ano começou a Segunda Guerra Mundial?',
    options: { A: '1914', B: '1939', C: '1945', D: '1922' },
    answer: 'B'
  },

  // MÉDIO (Amarelo)
  {
    id: 15,
    difficulty: Difficulty.MEDIUM,
    text: 'A Queda do Muro de Berlim, que marcou o fim da Guerra Fria, ocorreu em que ano?',
    options: { A: '1989', B: '1991', C: '1985', D: '1979' },
    answer: 'A'
  },
  {
    id: 16,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual civilização antiga construiu as pirâmides de Gizé?',
    options: { A: 'Gregos', B: 'Romanos', C: 'Maias', D: 'Egípcios' },
    answer: 'D'
  },

  // DIFÍCIL (Vermelho)
  {
    id: 17,
    difficulty: Difficulty.HARD,
    text: 'A Revolução Francesa começou com a Queda da Bastilha. Em que data isso ocorreu?',
    options: { A: '4 de Julho de 1776', B: '14 de Julho de 1789', C: '1 de Setembro de 1792', D: '5 de Maio de 1789' },
    answer: 'B'
  },
  {
    id: 18,
    difficulty: Difficulty.HARD,
    text: 'Quem foi o primeiro imperador de Roma?',
    options: { A: 'Júlio César', B: 'Marco Antônio', C: 'Augusto', D: 'Nero' },
    answer: 'C'
  }
];
