import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { QuizStore, QuizState } from './quiz.store';

@Injectable({ providedIn: 'root' })
export class QuizQuery extends QueryEntity<QuizState> {
  constructor(protected store: QuizStore) {
    super(store);
  }
}
