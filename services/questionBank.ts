
import { Difficulty, Question } from '../types';

const questions: Question[] = [
  // FÁCIL (Verde)
  {
    id: 1,
    difficulty: Difficulty.EASY,
    text: 'Qual é a capital do Brasil?',
    options: { A: 'São Paulo', B: 'Rio de Janeiro', C: 'Brasília', D: 'Belo Horizonte' },
    answer: 'C'
  },
  {
    id: 2,
    difficulty: Difficulty.EASY,
    text: 'Quantos lados tem um triângulo?',
    options: { A: 'Três', B: 'Quatro', C: 'Cinco', D: 'Seis' },
    answer: 'A'
  },
  {
    id: 3,
    difficulty: Difficulty.EASY,
    text: 'Qual planeta é conhecido como "Planeta Vermelho"?',
    options: { A: 'Vênus', B: 'Marte', C: 'Júpiter', D: 'Saturno' },
    answer: 'B'
  },
  {
    id: 4,
    difficulty: Difficulty.EASY,
    text: 'Qual é o maior oceano da Terra?',
    options: { A: 'Atlântico', B: 'Índico', C: 'Ártico', D: 'Pacífico' },
    answer: 'D'
  },

  // MÉDIO (Amarelo)
  {
    id: 5,
    difficulty: Difficulty.MEDIUM,
    text: 'Quem escreveu "Dom Quixote"?',
    options: { A: 'William Shakespeare', B: 'Miguel de Cervantes', C: 'Machado de Assis', D: 'Dante Alighieri' },
    answer: 'B'
  },
  {
    id: 6,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual é o elemento químico cujo símbolo é Au?',
    options: { A: 'Prata', B: 'Cobre', C: 'Ouro', D: 'Alumínio' },
    answer: 'C'
  },
  {
    id: 7,
    difficulty: Difficulty.MEDIUM,
    text: 'Em que ano o homem pisou na Lua pela primeira vez?',
    options: { A: '1965', B: '1969', C: '1972', D: '1981' },
    answer: 'B'
  },
  {
    id: 8,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual o nome do processo pelo qual as plantas usam a luz solar para criar alimento?',
    options: { A: 'Respiração', B: 'Transpiração', C: 'Fotossíntese', D: 'Decomposição' },
    answer: 'C'
  },

  // DIFÍCIL (Vermelho)
  {
    id: 9,
    difficulty: Difficulty.HARD,
    text: 'Qual é a velocidade da luz no vácuo (aproximadamente)?',
    options: { A: '300.000 km/h', B: '150.000 km/s', C: '300.000 km/s', D: '500.000 km/s' },
    answer: 'C'
  },
  {
    id: 10,
    difficulty: Difficulty.HARD,
    text: 'Quem é considerado o "pai" da computação?',
    options: { A: 'Alan Turing', B: 'Bill Gates', C: 'Steve Jobs', D: 'Albert Einstein' },
    answer: 'A'
  },
  {
    id: 11,
    difficulty: Difficulty.HARD,
    text: 'Qual o teorema que afirma que, em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos?',
    options: { A: 'Teorema de Tales', B: 'Teorema de Pitágoras', C: 'Teorema de Euclides', D: 'Teorema de Fermat' },
    answer: 'B'
  },
  {
    id: 12,
    difficulty: Difficulty.HARD,
    text: 'Qual destes filósofos gregos foi o mentor de Alexandre, o Grande?',
    options: { A: 'Sócrates', B: 'Platão', C: 'Aristóteles', D: 'Diógenes' },
    answer: 'C'
  }
];

export const getQuestionByDifficulty = (difficulty: Difficulty, currentQuestionId?: number): Question => {
  const filteredQuestions = questions.filter(q => q.difficulty === difficulty && q.id !== currentQuestionId);
  if (filteredQuestions.length === 0) {
    // Fallback if all questions of a difficulty have been shown, return any question of that difficulty
    const fallbackQuestions = questions.filter(q => q.difficulty === difficulty);
    return fallbackQuestions[Math.floor(Math.random() * fallbackQuestions.length)];
  }
  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  return filteredQuestions[randomIndex];
};
