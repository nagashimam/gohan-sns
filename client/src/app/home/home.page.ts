import { AfterContentChecked, AfterViewInit, Component } from '@angular/core';
import { QuizService } from '../state/quiz/quiz.service';
import { QuizQuery } from '../state/quiz/quiz.query';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quizes$ = this.query.selectAll();
  readonly appName = '鹿児島クイズ';

  constructor(
    private quizeService: QuizService,
    private query: QuizQuery,
    private navController: NavController
  ) {
    this.quizeService.get().subscribe();
  }

  isOver(deadline: number) {
    return deadline >= Date.now() / 1000;
  }

  callFilter(query: string = '') {
    requestAnimationFrame(() => this.filter(query));
  }

  public showDetail() {
    this.navController.navigateForward('detail');
  }

  private filter(query: string = '') {
    const cards = Array.from(document.querySelectorAll('ion-card'));
    cards.forEach((card) => {
      const header = card.querySelector('ion-card-header');
      const shouldShow = header.textContent.indexOf(query) > -1;
      card.style.display = shouldShow ? 'block' : 'none';
    });
  }
}
