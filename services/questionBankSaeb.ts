// FIX: Replaced placeholder content with a valid question bank module to resolve import and syntax errors.
import { Difficulty, Question } from '../types';

export const subject = 'SAEB - Prova Brasil';
export const questions: Question[] = [
  // FÁCIL (Verde)
  {
    id: 25,
    difficulty: Difficulty.EASY,
    text: 'Na frase "O cachorro é rápido", qual palavra é o adjetivo?',
    options: { A: 'O', B: 'cachorro', C: 'é', D: 'rápido' },
    answer: 'D',
    explanation: '"Rápido" é um adjetivo que dá uma qualidade/característica ao substantivo "cachorro".'
  },
  {
    id: 26,
    difficulty: Difficulty.EASY,
    text: 'Se uma caixa tem 5 maçãs e você adiciona mais 7, com quantas maçãs você fica?',
    options: { A: '10', B: '11', C: '12', D: '13' },
    answer: 'C',
    explanation: 'A operação é uma simples adição: 5 + 7 = 12. Você terá 12 maçãs.'
  },

  // MÉDIO (Amarelo)
  {
    id: 27,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual é a figura de linguagem presente na frase "Choveram elogios para o artista"?',
    options: { A: 'Metáfora', B: 'Hipérbole', C: 'Eufemismo', D: 'Ironia' },
    answer: 'B',
    explanation: 'Hipérbole é uma figura de linguagem que representa um exagero intencional. Dizer que "choveram elogios" é uma forma exagerada de dizer que foram muitos elogios.'
  },
  {
    id: 28,
    difficulty: Difficulty.MEDIUM,
    text: 'Um retângulo tem 8 cm de comprimento e 5 cm de largura. Qual é a sua área?',
    options: { A: '13 cm²', B: '26 cm²', C: '40 cm²', D: '35 cm²' },
    answer: 'C',
    explanation: 'A área de um retângulo é calculada multiplicando-se o comprimento pela largura. Portanto, 8 cm * 5 cm = 40 cm².'
  },

  // DIFÍCIL (Vermelho)
  {
    id: 29,
    difficulty: Difficulty.HARD,
    text: 'Leia o trecho: "A menina, que era muito estudiosa, passou no vestibular." A oração "que era muito estudiosa" é classificada como:',
    options: { A: 'Oração Subordinada Adjetiva Restritiva', B: 'Oração Subordinada Adjetiva Explicativa', C: 'Oração Coordenada Sindética Explicativa', D: 'Oração Subordinada Substantiva Objetiva Direta' },
    answer: 'B',
    explanation: 'A oração está entre vírgulas e adiciona uma informação extra sobre o substantivo "menina", mas não restringe seu sentido. Portanto, é uma oração subordinada adjetiva explicativa.'
  },
  {
    id: 30,
    difficulty: Difficulty.HARD,
    text: 'Se o preço de um produto aumentou 20% e depois diminuiu 20%, qual foi a alteração percentual em relação ao preço original?',
    options: { A: 'Nenhuma alteração', B: 'Aumentou 4%', C: 'Diminuiu 4%', D: 'Diminuiu 10%' },
    answer: 'C',
    explanation: 'Suponha um preço original de R$100. Com aumento de 20%, vai para R$120. Uma diminuição de 20% sobre R$120 é R$24 (120 * 0.20). O novo preço é R$120 - R$24 = R$96. Em relação ao preço original de R$100, houve uma diminuição de 4%.'
  }
];
