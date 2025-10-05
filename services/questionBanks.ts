import { questions as generalQuestions, subject as generalSubject } from './questionBankGeneral';
import { questions as scienceQuestions, subject as scienceSubject } from './questionBankScience';
import { questions as historyQuestions, subject as historySubject } from './questionBankHistory';
import { QuestionBank } from '../types';

export const questionBanks: QuestionBank[] = [
  { id: 'general', subject: generalSubject, questions: generalQuestions },
  { id: 'science', subject: scienceSubject, questions: scienceQuestions },
  { id: 'history', subject: historySubject, questions: historyQuestions },
];
