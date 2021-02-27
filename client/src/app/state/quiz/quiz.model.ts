import { ID } from '@datorama/akita';

export interface Quiz {
  id: ID;
  title: string;
  question: string;
  options: string;
  answer: string;
}
