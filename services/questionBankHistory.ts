import { Difficulty, Question } from '../types';

export const subject = 'História';
export const questions: Question[] = [
  // FÁCIL (Verde)
  {
    id: 13,
    difficulty: Difficulty.EASY,
    text: 'Quem descobriu o Brasil?',
    options: { A: 'Vasco da Gama', B: 'Pedro Álvares Cabral', C: 'Cristóvão Colombo', D: 'Fernão de Magalhães' },
    answer: 'B',
    explanation: 'Pedro Álvares Cabral era o comandante da frota portuguesa que chegou à costa do atual estado da Bahia em 22 de abril de 1500, marcando a descoberta oficial do Brasil pelos europeus.'
  },
  {
    id: 14,
    difficulty: Difficulty.EASY,
    text: 'Em que ano começou a Segunda Guerra Mundial?',
    options: { A: '1914', B: '1939', C: '1945', D: '1922' },
    answer: 'B',
    explanation: 'A Segunda Guerra Mundial começou em 1 de setembro de 1939, quando a Alemanha, liderada por Adolf Hitler, invadiu a Polônia.'
  },

  // MÉDIO (Amarelo)
  {
    id: 15,
    difficulty: Difficulty.MEDIUM,
    text: 'A Queda do Muro de Berlim, que marcou o fim da Guerra Fria, ocorreu em que ano?',
    options: { A: '1989', B: '1991', C: '1985', D: '1979' },
    answer: 'A',
    explanation: 'A queda do Muro de Berlim em 9 de novembro de 1989 simbolizou o colapso do comunismo na Europa Oriental e o início da reunificação da Alemanha.'
  },
  {
    id: 16,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual civilização antiga construiu as pirâmides de Gizé?',
    options: { A: 'Gregos', B: 'Romanos', C: 'Maias', D: 'Egípcios' },
    answer: 'D',
    explanation: 'As grandes pirâmides de Gizé foram construídas durante a Quarta Dinastia do Antigo Egito como túmulos para os faraós Quéops, Quéfren e Miquerinos.'
  },

  // DIFÍCIL (Vermelho)
  {
    id: 17,
    difficulty: Difficulty.HARD,
    text: 'A Revolução Francesa começou com a Queda da Bastilha. Em que data isso ocorreu?',
    options: { A: '4 de Julho de 1776', B: '14 de Julho de 1789', C: '1 de Setembro de 1792', D: '5 de Maio de 1789' },
    answer: 'B',
    explanation: 'A tomada da prisão da Bastilha em 14 de julho de 1789 é considerada o evento que deu início à Revolução Francesa, um marco na história moderna.'
  },
  {
    id: 18,
    difficulty: Difficulty.HARD,
    text: 'Quem foi o primeiro imperador de Roma?',
    options: { A: 'Júlio César', B: 'Marco Antônio', C: 'Augusto', D: 'Nero' },
    answer: 'C',
    explanation: 'Após o fim da República Romana, Otaviano, sobrinho-neto de Júlio César, tornou-se o primeiro imperador, adotando o título de Augusto em 27 a.C.'
  }
];