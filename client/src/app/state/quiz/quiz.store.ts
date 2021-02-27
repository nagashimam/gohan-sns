import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Quiz } from './quiz.model';

export interface QuizState extends EntityState<Quiz> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'quiz'
})
export class QuizStore extends EntityStore<QuizState> {

  constructor() {
    super();
  }

}
