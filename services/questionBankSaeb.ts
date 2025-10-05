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
  {
    id: 31,
    difficulty: Difficulty.EASY,
    text: 'Uma pizza foi dividida em 5 fatias e Juca comeu 3. Qual fração representa a porção da pizza que foi consumida?',
    options: { A: '5/3', B: '3/5', C: '5/5', D: '3/2' },
    answer: 'B',
    explanation: 'A pizza foi dividida em 5 partes iguais e 3 foram consumidas, representando a fração 3/5.',
  },
  {
    id: 32,
    difficulty: Difficulty.EASY,
    text: 'Uma régua marca os números 0, 2, 4, 6, 8, 10, 12, e depois um "?". Seguindo o padrão, que número o "?" representa?',
    options: { A: '14', B: '13', C: '10', D: '16' },
    answer: 'A',
    explanation: 'A régua mostra uma sequência de números pares. O próximo número par depois de 12 é 14.',
  },
  {
    id: 33,
    difficulty: Difficulty.EASY,
    text: 'Anderson quer fazer um cubo para um jogo. Qual das opções de planificação a seguir ele deve usar para formar um cubo?',
    options: { A: 'Uma cruz com 5 quadrados', B: 'Uma fileira de 6 quadrados', C: 'Uma forma de "L" com 5 quadrados', D: 'Uma cruz com 4 quadrados na vertical e 2 nas laterais' },
    answer: 'D',
    explanation: 'A planificação que forma um cubo corretamente é a que parece uma cruz, com 4 quadrados em linha e um de cada lado do segundo quadrado.',
  },
  {
    id: 34,
    difficulty: Difficulty.EASY,
    text: 'Um polígono com seis lados é chamado de:',
    options: { A: 'Losango', B: 'Pentágono', C: 'Hexágono', D: 'Triângulo' },
    answer: 'C',
    explanation: 'Um polígono de 6 lados é, por definição, um hexágono.',
  },
  {
    id: 35,
    difficulty: Difficulty.EASY,
    text: 'Uma garagem precisa acomodar dois carros (1,70m de largura cada), com 0,50m entre eles e 0,30m de folga em cada lado. Qual a largura mínima da garagem?',
    options: { A: '3,40 m', B: '4,20 m', C: '4,50 m', D: '5,00 m' },
    answer: 'C',
    explanation: 'Soma total: 1,70 (carro) + 1,70 (carro) + 0,50 (espaço) + 0,30 (folga) + 0,30 (folga) = 4,50m.',
  },
  {
    id: 36,
    difficulty: Difficulty.EASY,
    text: 'Melissa é 1 hora mais velha que sua irmã gêmea. Quantos minutos ela é mais velha?',
    options: { A: '60 minutos', B: '60 horas', C: '60 segundos', D: '600 minutos' },
    answer: 'A',
    explanation: 'Uma hora é composta por 60 minutos.',
  },
  {
    id: 37,
    difficulty: Difficulty.EASY,
    text: 'Paula é 2 anos mais velha que Luana. Isso significa que Luana nasceu quantos meses depois de Paula?',
    options: { A: '24 meses', B: '12 meses', C: '48 meses', D: '96 meses' },
    answer: 'A',
    explanation: 'Cada ano tem 12 meses. Portanto, 2 anos equivalem a 2 x 12 = 24 meses.',
  },
  {
    id: 38,
    difficulty: Difficulty.EASY,
    text: 'José pagou seu carro em um financiamento de 60 meses. Isso equivale a quantos anos?',
    options: { A: '12 anos', B: '60 anos', C: '5 anos', D: '10 anos' },
    answer: 'C',
    explanation: 'Para converter meses em anos, divide-se por 12. Assim, 60 meses / 12 = 5 anos.',
  },
  {
    id: 39,
    difficulty: Difficulty.EASY,
    text: 'Um procedimento no cabeleireiro começou às 9h e durou 1 hora e 30 minutos. A que horas terminou?',
    options: { A: '10h', B: '11h', C: '10h 15min', D: '10h 30min' },
    answer: 'D',
    explanation: 'Somando 1h 30min a 9h00min, o resultado é 10h30min.',
  },
  {
    id: 40,
    difficulty: Difficulty.EASY,
    text: 'Júnior trocou dez moedas de R$0,50 e cinco moedas de R$1 por notas de R$5. Quantas notas ele recebeu?',
    options: { A: '3', B: '5', C: '2', D: '6' },
    answer: 'C',
    explanation: 'O total é (10 × 0,50) + (5 × 1) = 5 + 5 = R$10. Dividindo por 5, ele recebeu 2 notas.',
  },
  {
    id: 41,
    difficulty: Difficulty.EASY,
    text: 'Qual é a forma simplificada da fração 8/10?',
    options: { A: '4/5', B: '2/5', C: '2/2', D: '4/2' },
    answer: 'A',
    explanation: 'Dividindo o numerador e o denominador de 8/10 pelo maior divisor comum (2), obtemos 4/5.',
  },
  {
    id: 42,
    difficulty: Difficulty.EASY,
    text: 'Carlos comprou um computador de R$3.456,00 e uma impressora de R$1.234,00. Qual foi o total gasto?',
    options: { A: 'R$ 4.690,00', B: 'R$ 4.680,00', C: 'R$ 4.700,00', D: 'R$ 4.690,40' },
    answer: 'A',
    explanation: 'A soma dos valores é R$ 3.456,00 + R$ 1.234,00 = R$ 4.690,00.',
  },
  {
    id: 43,
    difficulty: Difficulty.EASY,
    text: 'No número 482.739, qual é o valor posicional do algarismo 8?',
    options: { A: '800.000', B: '80.000', C: '800', D: '8.000' },
    answer: 'B',
    explanation: 'O algarismo 8 está na casa da dezena de milhar, representando o valor de 80.000.',
  },
  {
    id: 44,
    difficulty: Difficulty.EASY,
    text: 'Qual das opções mostra a decomposição correta do número 326.419?',
    options: { A: '300.000+20.000+6.000+400+10+9', B: '3.000.000+...', C: '30.000+...', D: '300.000+...+900' },
    answer: 'A',
    explanation: 'A decomposição correta é a soma dos valores de cada algarismo: (3×100.000)+(2×10.000)+(6×1.000)+(4×100)+(1×10)+(9×1).',
  },
  {
    id: 45,
    difficulty: Difficulty.EASY,
    text: 'Um parque recebeu 12.345 visitantes por dia durante 7 dias. Qual o total de visitantes no período?',
    options: { A: '85.415', B: '86.415.000', C: '86.415', D: '87.415' },
    answer: 'C',
    explanation: 'O total de visitantes é 12.345 × 7 = 86.415.',
  },
  {
    id: 46,
    difficulty: Difficulty.EASY,
    text: 'Se 4.800 maçãs foram distribuídas igualmente entre 10 turmas, quantas maçãs cada turma recebeu?',
    options: { A: '2.400', B: '1.600', C: '480', D: '1.200' },
    answer: 'C',
    explanation: 'A divisão de 4.800 maçãs por 10 turmas resulta em 480 maçãs para cada uma.',
  },
  {
    id: 47,
    difficulty: Difficulty.EASY,
    text: 'De uma pizza de 8 fatias, 3 foram comidas. Qual fração representa a parte que restou?',
    options: { A: '3/5', B: '3/8', C: '5/5', D: '5/8' },
    answer: 'D',
    explanation: 'Restaram 8 - 3 = 5 fatias. A fração correspondente é 5/8.',
  },
  {
    id: 48,
    difficulty: Difficulty.EASY,
    text: 'Júlia comeu 3/6 de um bolo e Pedro comeu 1/2. Comparando as quantidades, pode-se afirmar que:',
    options: { A: 'Júlia comeu mais', B: 'Pedro comeu mais', C: 'Ambos comeram a mesma quantidade', D: 'Não é possível saber' },
    answer: 'C',
    explanation: 'A fração 3/6 é equivalente a 1/2, pois ao simplificar 3/6 (dividindo ambos por 3) obtemos 1/2.',
  },
  {
    id: 49,
    difficulty: Difficulty.EASY,
    text: 'Quantas bandejas para 30 ovos são necessárias para embalar 600 ovos?',
    options: { A: '30', B: '20', C: '10', D: '5' },
    answer: 'B',
    explanation: 'Para encontrar o número de bandejas, divide-se o total de ovos pela capacidade da bandeja: 600 / 30 = 20.',
  },
  {
    id: 50,
    difficulty: Difficulty.EASY,
    text: 'Quantos pesos de 500 gramas são necessários para equilibrar um peso de 2 kg em uma balança?',
    options: { A: '2', B: '4', C: '5', D: '8' },
    answer: 'B',
    explanation: '2 kg equivalem a 2000 gramas. Como cada peso tem 500 gramas, são necessários 2000 / 500 = 4 pesos.',
  },
  {
    id: 51,
    difficulty: Difficulty.EASY,
    text: 'Paulo deposita R$10,00 por semana em seu cofrinho. Quanto ele terá em 10 semanas?',
    options: { A: 'R$ 50,00', B: 'R$ 150,00', C: 'R$ 100,00', D: 'R$ 80,00' },
    answer: 'C',
    explanation: 'O total será o valor semanal multiplicado pelo número de semanas: 10 × R$ 10,00 = R$ 100,00.',
  },
  {
    id: 52,
    difficulty: Difficulty.EASY,
    text: 'Em qual dos seguintes números o algarismo "3" ocupa a casa das dezenas: 523, 390, 232, 213?',
    options: { A: '523', B: '390', C: '232', D: '213' },
    answer: 'C',
    explanation: 'No número 232, o algarismo 3 está na segunda posição da direita para a esquerda, que corresponde à casa das dezenas.',
  },
  {
    id: 53,
    difficulty: Difficulty.EASY,
    text: 'Uma padaria produziu 600 panetones e os acondicionou em caixas com 12 unidades cada. Quantas caixas foram necessárias?',
    options: { A: '500', B: '50', C: '20', D: '10' },
    answer: 'B',
    explanation: 'Dividindo o total de panetones pela capacidade de cada caixa, temos 600 / 12 = 50 caixas.',
  },
  {
    id: 54,
    difficulty: Difficulty.EASY,
    text: 'Para comprar uma calça online, Gabi precisa medir a cintura. Qual instrumento ela deve usar?',
    options: { A: 'Relógio', B: 'Balança', C: 'Termômetro', D: 'Fita métrica' },
    answer: 'D',
    explanation: 'A fita métrica é o instrumento ideal para medir circunferências do corpo, como a da cintura.',
  },
  {
    id: 55,
    difficulty: Difficulty.EASY,
    text: 'Uma foto de 30cm por 17cm é ampliada, dobrando suas dimensões. Quais serão o novo comprimento e largura?',
    options: { A: '17cm e 15cm', B: '90cm e 51cm', C: '30cm e 24cm', D: '60cm e 34cm' },
    answer: 'D',
    explanation: 'Dobrando as dimensões, o novo comprimento será 30cm × 2 = 60cm, e a nova largura será 17cm × 2 = 34cm.',
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
  {
    id: 56,
    difficulty: Difficulty.MEDIUM,
    text: 'Paulo quer comprar um jogo de R$90,00 e já tem R$64,00. Quanto falta para ele comprar o jogo?',
    options: { A: 'R$34,00', B: 'R$65,00', C: 'R$26,00', D: 'R$100,00' },
    answer: 'C',
    explanation: 'Para descobrir o valor que falta, subtraímos o valor que Paulo já tem do valor total do jogo: R$90,00 - R$64,00 = R$26,00.'
  },
  {
    id: 57,
    difficulty: Difficulty.MEDIUM,
    text: 'Marta mediu seu lápis e obteve 13,5 cm. Essa medida está localizada entre quais dois números inteiros?',
    options: { A: '12 e 13', B: '13 e 14', C: '14 e 15', D: '15 e 16' },
    answer: 'B',
    explanation: 'O número 13,5 é maior que o inteiro 13 e menor que o inteiro 14, portanto, está entre eles.'
  },
  {
    id: 58,
    difficulty: Difficulty.MEDIUM,
    text: 'Carlos comprou um micro-ondas por R$ 860,00 e decidiu pagar em 5 parcelas iguais, sem juros. Qual o valor de cada parcela?',
    options: { A: 'R$ 172,00', B: 'R$ 4400,00', C: 'R$ 17,00', D: 'R$ 440,00' },
    answer: 'A',
    explanation: 'Para calcular o valor de cada parcela, divide-se o valor total pelo número de parcelas: R$ 860,00 / 5 = R$ 172,00.'
  },
  {
    id: 59,
    difficulty: Difficulty.MEDIUM,
    text: 'Todo mês, Cátia reserva R$ 438,00 em uma poupança. Quanto Cátia terá reservado após 12 meses?',
    options: { A: 'R$ 876,00', B: 'R$ 4.400,00', C: 'R$ 5.256,00', D: 'R$ 440,00' },
    answer: 'C',
    explanation: 'Para calcular o total reservado, multiplica-se o valor mensal pelo número de meses: R$ 438,00 x 12 = R$ 5.256,00.'
  },
  {
    id: 60,
    difficulty: Difficulty.MEDIUM,
    text: 'Ana comeu 3/6 de uma pizza, Pedro comeu 1/2, João comeu 4/8 e Maria comeu 2/4. Quem comeu mais?',
    options: { A: 'Ana', B: 'João', C: 'Todos comeram a mesma quantidade', D: 'Pedro' },
    answer: 'C',
    explanation: 'Todas as frações (3/6, 1/2, 4/8, 2/4) são equivalentes e representam a metade. Portanto, todos comeram a mesma quantidade.'
  },
  {
    id: 61,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual número é formado pela decomposição: (4x10000) + (5x1000) + (9x100) + (7x10) + (2x1)?',
    options: { A: '4.597', B: '45.972', C: '459.720', D: '459.072' },
    answer: 'B',
    explanation: 'A decomposição representa 40.000 + 5.000 + 900 + 70 + 2, que somados resultam em 45.972.'
  },
  {
    id: 62,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual das opções é a planificação de uma pirâmide de base quadrada?',
    options: { A: 'Um quadrado e 3 triângulos', B: 'Um retângulo e 4 triângulos', C: 'Um pentágono e 5 triângulos', D: 'Um quadrado e 4 triângulos' },
    answer: 'D',
    explanation: 'A pirâmide de base quadrada é formada por uma base quadrada e quatro faces triangulares. A planificação correta mostra um quadrado central com um triângulo em cada lado.'
  },
  {
    id: 63,
    difficulty: Difficulty.MEDIUM,
    text: 'Um abajur de 45 cm está sobre uma mesa. O comprimento da mesa equivale a aproximadamente 3 abajures. Qual o comprimento da mesa?',
    options: { A: '50 cm', B: '60 cm', C: '135 cm', D: '300 cm' },
    answer: 'C',
    explanation: 'Se a mesa tem o comprimento de 3 abajures, o cálculo é: 45 cm x 3 = 135 cm.'
  },
  {
    id: 64,
    difficulty: Difficulty.MEDIUM,
    text: 'Lourdes fez 2,5 litros de laranjada. Quantos mililitros de laranjada ela fez?',
    options: { A: '250 mL', B: '2500 cm', C: '2500 mL', D: '2500 L' },
    answer: 'C',
    explanation: 'Sabendo que 1 litro equivale a 1000 mililitros, para converter 2,5 litros para mililitros, multiplicamos por 1000: 2,5 x 1000 = 2500 mL.'
  },
  {
    id: 65,
    difficulty: Difficulty.MEDIUM,
    text: 'Um cubo mágico 3x3x3 é formado por bloquinhos de 1 cm³. Qual o volume total do cubo?',
    options: { A: '9 cm³', B: '12 cm³', C: '50 cm³', D: '27 cm³' },
    answer: 'D',
    explanation: 'O volume do cubo é calculado multiplicando suas dimensões: 3 blocos de largura x 3 de altura x 3 de profundidade = 27 blocos. O volume total é 27 cm³.'
  },
  {
    id: 66,
    difficulty: Difficulty.MEDIUM,
    text: 'Um cubo 4x4x4 é formado por bloquinhos de 1 cm³. Qual o volume total do cubo?',
    options: { A: '12 cm³', B: '16 cm³', C: '64 cm³', D: '24 cm³' },
    answer: 'C',
    explanation: 'O volume do cubo é 4 x 4 x 4 = 64 bloquinhos. Como cada um tem 1 cm³, o volume total é 64 cm³.'
  },
  {
    id: 67,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual das pipas a seguir tem o formato de um hexágono (6 lados)?',
    options: { A: 'Pipa I', B: 'Pipa II', C: 'Pipa III', D: 'Pipa IV' },
    answer: 'A',
    explanation: 'Um hexágono é um polígono que possui 6 lados. A pipa I é a única com essa característica.'
  },
  {
    id: 68,
    difficulty: Difficulty.MEDIUM,
    text: 'Numa corrida de 5 km, Murilo está na marca de 2 km. Que distância falta para ele completar o percurso?',
    options: { A: '2,5 km', B: '3 km', C: '3,5 km', D: '6 km' },
    answer: 'B',
    explanation: 'Se o percurso total é de 5 km e Murilo já percorreu 2 km, a distância que falta é 5 km - 2 km = 3 km.'
  },
  {
    id: 69,
    difficulty: Difficulty.MEDIUM,
    text: 'No dia 2 de julho, quantos dias faltam para o dia 31 do mesmo mês?',
    options: { A: '30 dias', B: '25 dias', C: '29 dias', D: '31 dias' },
    answer: 'C',
    explanation: 'Para calcular os dias restantes, subtraímos o dia atual do total de dias do mês: 31 - 2 = 29 dias.'
  },
  {
    id: 70,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual das frações representadas tem o mesmo valor que meio (0,5)?',
    options: { A: '1/4', B: '2/4', C: '3/4', D: '1/6' },
    answer: 'B',
    explanation: 'Meio (0,5) é equivalente à fração 1/2. A fração 2/4, quando simplificada (dividindo o numerador e o denominador por 2), resulta em 1/2.'
  },
  {
    id: 71,
    difficulty: Difficulty.MEDIUM,
    text: 'Observe os quadriláteros na malha quadriculada. Qual deles não é um retângulo?',
    options: { A: 'Figura 3', B: 'Figura 2 (Paralelogramo)', C: 'Figura 1', D: 'Figura 5' },
    answer: 'B',
    explanation: 'Um retângulo deve ter todos os ângulos internos de 90 graus. A figura 2 é um paralelogramo cujos ângulos não são retos.'
  },
  {
    id: 72,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual número completa a igualdade: X + 4.738 = 12.506?',
    options: { A: '7.768', B: '7.778', C: '7.788', D: '7.798' },
    answer: 'A',
    explanation: 'Para encontrar o número desconhecido, basta subtrair o número conhecido da soma total: 12.506 - 4.738 = 7.768.'
  },
  {
    id: 73,
    difficulty: Difficulty.MEDIUM,
    text: 'Mariana comprou 4 caixas com a mesma quantidade de lápis, totalizando 96 lápis. Se ★ é a quantidade por caixa, qual equação representa isso?',
    options: { A: '96 + ★ = 4', B: '4 + ★ = 96', C: '4 × ★ = 96', D: '★ ÷ 4 = 96' },
    answer: 'C',
    explanation: 'A situação é representada pela multiplicação do número de caixas (4) pela quantidade de lápis em cada caixa (★), resultando no total de lápis (96).'
  },
  {
    id: 74,
    difficulty: Difficulty.MEDIUM,
    text: 'Na sequência 56, 59, 62, ..., qual número estará na 6ª posição?',
    options: { A: '70', B: '85', C: '71', D: '95' },
    answer: 'C',
    explanation: 'A sequência aumenta de 3 em 3. Continuando o padrão: 56, 59, 62, 65 (4º), 68 (5º), 71 (6º).'
  },
  {
    id: 75,
    difficulty: Difficulty.MEDIUM,
    text: 'Marta tem 2 notas de R$50, 2 de R$20, 1 de R$10 e 3 moedas de R$1. Qual o valor total?',
    options: { A: 'R$ 153,00', B: 'R$ 200,00', C: 'R$ 75,00', D: 'R$ 280,00' },
    answer: 'A',
    explanation: 'Somando os valores: (2 x 50) + (2 x 20) + (1 x 10) + (3 x 1) = 100 + 40 + 10 + 3 = R$ 153,00.'
  },
  {
    id: 76,
    difficulty: Difficulty.MEDIUM,
    text: 'Qual das figuras geométricas possui apenas 3 lados e 3 vértices?',
    options: { A: 'Retângulo', B: 'Triângulo', C: 'Trapézio', D: 'Losango' },
    answer: 'B',
    explanation: 'Por definição, um triângulo é um polígono com 3 lados e 3 vértices (pontos de encontro dos lados).'
  },
  {
    id: 77,
    difficulty: Difficulty.MEDIUM,
    text: 'Em um trapézio com lados AB, BC, CD, DA, quais segmentos de reta são paralelos?',
    options: { A: 'As bases (AB e DC)', B: 'Lados adjacentes (AB e BC)', C: 'Lados não paralelos (AD e BC)', D: 'Um lado e uma base (AD e DC)' },
    answer: 'A',
    explanation: 'A característica que define um trapézio é possuir um par de lados paralelos, que são chamados de bases. Neste caso, AB e DC.'
  },
  {
    id: 78,
    difficulty: Difficulty.MEDIUM,
    text: 'Uma maratonista corre 2km em 5 minutos. Quanto tempo, em segundos, ela leva?',
    options: { A: '6 segundos', B: '300 segundos', C: '600 segundos', D: '100 segundos' },
    answer: 'B',
    explanation: 'Cada minuto tem 60 segundos. Para converter 5 minutos em segundos, multiplicamos: 5 x 60 = 300 segundos.'
  },
  {
    id: 79,
    difficulty: Difficulty.MEDIUM,
    text: 'A roleta A tem 1/2 de chance de parar no verde. A roleta B tem 2/4 de chance. A chance de parar no verde é:',
    options: { A: 'Maior na roleta A', B: 'Menor na roleta A', C: 'Maior na roleta B', D: 'Igual nas duas roletas' },
    answer: 'D',
    explanation: 'Na roleta A, a chance é de 1/2 (50%). Na roleta B, a chance é de 2/4, que ao simplificar também é 1/2 (50%). Portanto, as chances são iguais.'
  },
  {
    id: 80,
    difficulty: Difficulty.MEDIUM,
    text: 'Sandra arrecadou R$ 668,00 e sua irmã R$ 1.595,00. Qual a diferença entre os valores?',
    options: { A: 'R$ 933,00', B: 'R$ 1.137,00', C: 'R$ 927,00', D: 'R$ 937,00' },
    answer: 'C',
    explanation: 'A diferença é calculada pela subtração do menor valor do maior: 1.595 - 668 = 927.'
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