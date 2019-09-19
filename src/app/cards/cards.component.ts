import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  cards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];
  cardsCopy = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];
  showMessage = false;
  successText: string;
  failText: string;
  timer = 20;
  gameTimer;
  status = false;
  selectedCards = [];
  compare: boolean;

  constructor() { }

  ngOnInit() {
    this.cards.sort(function () { return Math.random() - 0.5 });
    this.cardsCopy.sort(function () { return Math.random() - 0.5 });
  }

  getTimer() {
    this.gameTimer = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.timer = 20;
      }
    }, 1000);
  }

  clearTimer() {
    if (this.gameTimer) {
      clearInterval(this.gameTimer);
    }
  }

  clickEvent(id) {
    this.getTimer();
    this.selectedCards.push(id);
    console.log(this.selectedCards);
    if (this.selectedCards.length === 2) {
      this.clearTimer();
      if (this.selectedCards[0] === this.selectedCards[1]) {
        this.compare = true;
        this.showMessage = true;
        this.successText = 'Genial!, continúa jugando';
        setTimeout(() => {
          this.showMessage = false;
        }, 1500);
      } else {
        this.clearTimer();
        this.compare = false;
        this.showMessage = true;
        this.failText = 'fallaste!, siguiente jugador';
        setTimeout(() => {
          this.showMessage = false;
        }, 1500);
      }
      this.selectedCards = [];
    }
  }

}
