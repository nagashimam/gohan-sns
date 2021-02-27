import { Component } from '@angular/core';
import { QuizService } from '../state/quiz/quiz.service';
import { QuizQuery } from '../state/quiz/quiz.query';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quizes$ = this.query.selectAll();
  readonly appName = '鹿児島クイズ';

  constructor(private quizeService: QuizService, private query: QuizQuery) {
    this.quizeService.get().subscribe();
  }

  isOver(deadline: number) {
    return deadline >= Date.now() / 1000;
  }
}
