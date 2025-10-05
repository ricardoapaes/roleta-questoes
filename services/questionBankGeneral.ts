import { Difficulty, Question } from '../types';

export const subject = 'Conhecimentos Gerais';
export const questions: Question[] = [
  // FÁCIL (Verde)
  {
    id: 1,
    difficulty: Difficulty.EASY,
    text: 'Qual é a capital do Brasil?',
    options: { A: 'São Paulo', B: 'Rio de Janeiro', C: 'Brasília', D: 'Belo Horizonte' },
    answer: 'C',
    explanation: 'Brasília, planejada por Oscar Niemeyer e Lúcio Costa, foi inaugurada em 1960 para ser a nova capital federal do Brasil, substituindo o Rio de Janeiro.'
  },
  {
    id: 2,
    difficulty: Difficulty.EASY,
    text: 'Quantos lados tem um triângulo?',
    options: { A: 'Três', B: 'Quatro', C: 'Cinco', D: 'Seis' },
    answer: 'A',
    explanation: "A palavra 'triângulo' significa literalmente 'três ângulos', o que implica que a forma também possui três lados."
  },
  {
    id: 3,
    difficulty: Difficulty.EASY,
    text: 'Qual planeta é conhecido como "Planeta Vermelho"?',
    options: { A: 'Vênus', B: 'Marte', C: 'Júpiter', D: 'Saturno' },
    answer: 'B',
    explanation: 'Marte é chamado de Planeta Vermelho por causa da grande quantidade de óxido de ferro (ferrugem) em sua superfície, o que lhe confere uma aparência avermelhada.'
  },
  {
    id: 4,
    difficulty: Difficulty.EASY,
    text: 'Qual é o maior oceano da Terra?',
    options: { A: 'Atlântico', B: 'Índico', C: 'Ártico', D: 'Pacífico' },
    answer: 'D',
    explanation: 'O Oceano Pacífico é o maior e mais profundo dos oceanos do mundo, cobrindo cerca de um terço da superfície da Terra.'
  },

  // MÉDIO (Amarelo)
  {
    id: 5,
    difficulty: Difficulty.MEDIUM,
    text: 'Quem escreveu "Dom Quixote"?',
    options: { A: 'William Shakespeare', B: 'Miguel de Cervantes', C: 'Machado de Assis', D: 'Dante Alighieri' },
    answer: 'B',
    explanation: "Miguel de Cervantes, um escritor espanhol, publicou a primeira parte de 'Dom Quixote' em 1605. É considerado um dos maiores romances da história."
  },
  {
    id: 6,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual é o elemento químico cujo símbolo é Au?',
    options: { A: 'Prata', B: 'Cobre', C: 'Ouro', D: 'Alumínio' },
    answer: 'C',
    explanation: "O símbolo 'Au' vem do latim 'aurum', que significa ouro. É um metal precioso usado em joias, moedas e eletrônicos."
  },
  {
    id: 7,
    difficulty: Difficulty.MEDIUM,
    text: 'Em que ano o homem pisou na Lua pela primeira vez?',
    options: { A: '1965', B: '1969', C: '1972', D: '1981' },
    answer: 'B',
    explanation: 'A missão Apollo 11 da NASA levou os primeiros humanos à Lua em 20 de julho de 1969. Neil Armstrong foi o primeiro a pisar na superfície lunar.'
  },
  {
    id: 8,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual o nome do processo pelo qual as plantas usam a luz solar para criar alimento?',
    options: { A: 'Respiração', B: 'Transpiração', C: 'Fotossíntese', D: 'Decomposição' },
    answer: 'C',
    explanation: 'A fotossíntese é o processo onde as plantas convertem luz, água e dióxido de carbono em glicose (energia) e oxigênio.'
  },

  // DIFÍCIL (Vermelho)
  {
    id: 9,
    difficulty: Difficulty.HARD,
    text: 'Qual é a velocidade da luz no vácuo (aproximadamente)?',
    options: { A: '300.000 km/h', B: '150.000 km/s', C: '300.000 km/s', D: '500.000 km/s' },
    answer: 'C',
    explanation: 'A velocidade da luz no vácuo é uma constante universal de aproximadamente 299.792 quilômetros por segundo, frequentemente arredondada para 300.000 km/s.'
  },
  {
    id: 10,
    difficulty: Difficulty.HARD,
    text: 'Quem é considerado o "pai" da computação?',
    options: { A: 'Alan Turing', B: 'Bill Gates', C: 'Steve Jobs', D: 'Albert Einstein' },
    answer: 'A',
    explanation: 'Alan Turing é considerado o pai da ciência da computação teórica e da inteligência artificial. Sua Máquina de Turing foi um conceito fundamental para a computação.'
  },
  {
    id: 11,
    difficulty: Difficulty.HARD,
    text: 'Qual o teorema que afirma que, em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos?',
    options: { A: 'Teorema de Tales', B: 'Teorema de Pitágoras', C: 'Teorema de Euclides', D: 'Teorema de Fermat' },
    answer: 'B',
    explanation: 'Este teorema fundamental da geometria descreve a relação entre os lados de um triângulo retângulo (a² + b² = c²).'
  },
  {
    id: 12,
    difficulty: Difficulty.HARD,
    text: 'Qual destes filósofos gregos foi o mentor de Alexandre, o Grande?',
    options: { A: 'Sócrates', B: 'Platão', C: 'Aristóteles', D: 'Diógenes' },
    answer: 'C',
    explanation: 'Aristóteles foi um dos mais influentes filósofos gregos. Ele foi tutor de Alexandre, o Grande, por vários anos, ensinando-lhe retórica, política e filosofia.'
  }
];