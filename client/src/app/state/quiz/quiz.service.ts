import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { QuizStore, QuizState } from './quiz.store';

@Injectable({ providedIn: 'root' })
export class QuizService extends NgEntityService<QuizState> {
  constructor(protected store: QuizStore) {
    super(store);
  }
}
