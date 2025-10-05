import { Difficulty, Question } from '../types';

export const subject = 'Ciências';
export const questions: Question[] = [
  // FÁCIL (Verde)
  {
    id: 19,
    difficulty: Difficulty.EASY,
    text: 'Qual é a fórmula química da água?',
    options: { A: 'CO2', B: 'O2', C: 'H2O', D: 'N2' },
    answer: 'C'
  },
  {
    id: 20,
    difficulty: Difficulty.EASY,
    text: 'Qual é o maior órgão do corpo humano?',
    options: { A: 'Cérebro', B: 'Coração', C: 'Pele', D: 'Fígado' },
    answer: 'C'
  },

  // MÉDIO (Amarelo)
  {
    id: 21,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual é o planeta mais próximo do Sol?',
    options: { A: 'Vênus', B: 'Terra', C: 'Marte', D: 'Mercúrio' },
    answer: 'D'
  },
  {
    id: 22,
    difficulty: Difficulty.MEDIUM,
    text: 'Quantos cromossomos um ser humano normalmente possui?',
    options: { A: '23', B: '46', C: '48', D: '22' },
    answer: 'B'
  },

  // DIFÍCIL (Vermelho)
  {
    id: 23,
    difficulty: Difficulty.HARD,
    text: 'Qual lei da física é representada pela fórmula E=mc²?',
    options: { A: 'Lei da Gravitação Universal', B: 'Teoria da Relatividade Especial', C: 'Segunda Lei de Newton', D: 'Leis de Kepler' },
    answer: 'B'
  },
  {
    id: 24,
    difficulty: Difficulty.HARD,
    text: 'O que é a mitocôndria em uma célula?',
    options: { A: 'O cérebro da célula', B: 'A usina de energia da célula', C: 'O sistema digestivo da célula', D: 'A parede protetora da célula' },
    answer: 'B'
  }
];
