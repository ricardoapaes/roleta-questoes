import { questions as saebQuestions, subject as saebSubject } from './questionBankSaeb';
import { QuestionBank } from '../types';

export const questionBanks: QuestionBank[] = [
  { id: 'saeb', subject: saebSubject, questions: saebQuestions },
];