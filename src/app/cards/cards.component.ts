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
  constructor() { }
  status = false;
  selectedCards = []
  clickEvent(id) {
    this.selectedCards.push(id);
    console.log(this.selectedCards);
    if (this.selectedCards.length === 2) {
      if (this.selectedCards[0] === this.selectedCards[1]) {
        console.log('son iguales!, continúa jugando');
      } else {
        console.log('siguiente jugador');
      }
      this.selectedCards = [];
    }
  }
  ngOnInit() {
    this.cards.sort(function () { return Math.random() - 0.5 });
    this.cardsCopy.sort(function () { return Math.random() - 0.5 });
  }

}
