import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  cards = [
    {
      nombre: 'fantasma',
      img: 1,
      id: 1
    },
    {
      nombre: 'luna',
      img: 2,
      id: 2
    },
    {
      nombre: 'lechuga',
      img: 3,
      id: 3
    },
    {
      nombre: 'halloween',
      img: 4,
      id: 4
    },
    {
      nombre: 'murcielago',
      img: 5,
      id: 5
    },
    {
      nombre: 'raton',
      img: 6,
      id: 6
    },
    {
      nombre: 'monstro',
      img: 7,
      id: 7
    },
    {
      nombre: 'vampiro',
      img: 8,
      id: 8
    },
    {
      nombre: 'frank',
      img: 9,
      id: 9
    },
    {
      nombre: 'calabaza',
      img: 10,
      id: 10
    },
    {
      nombre: 'fantasma',
      img: 1,
      id: 11
    },
    {
      nombre: 'luna',
      img: 2,
      id: 12
    },
    {
      nombre: 'lechuga',
      img: 3,
      id: 13
    },
    {
      nombre: 'halloween',
      img: 4,
      id: 14
    },
    {
      nombre: 'murcielago',
      img: 5,
      id: 15
    },
    {
      nombre: 'raton',
      img: 6,
      id: 16
    },
    {
      nombre: 'monstro',
      img: 7,
      id: 17
    },
    {
      nombre: 'vampiro',
      img: 8,
      id: 18
    },
    {
      nombre: 'frank',
      img: 9,
      id: 19
    },
    {
      nombre: 'calabaza',
      img: 10,
      id: 20
    }
  ];

  showMessage = false;
  successText: string;
  failText: string;
  tiempo = 10;
  status = false;
  selectedCards = [];
  player1 = [];
  player2 = [];
  puntajePlayer1: number;
  puntajePlayer2: number;
  compare: boolean;
  turnoChange: boolean;
  contador$: any;
  countdown: any;
  timeOver = false;


  constructor() { }

  ngOnInit() {
    this.contador$ = timer(1000, 1000)
    .pipe(
      takeWhile( () => this.tiempo > 0 ),
      tap(() => this.tiempo--)
    );
    this.cards.sort(function () { return Math.random() - 0.5 });
  }

  getTimer() {
    this.countdown = this.contador$.subscribe(() => {
      if (this.tiempo === 0) {
        this.timeOver = true;
      }
    });
  }

  clearTimer() {
    this.tiempo = 11;
    this.countdown.unsubscribe();
  }

  clickEvent(card) {
    this.getTimer();
    this.selectedCards.push(card.img);
    console.log(this.selectedCards);
    if (this.selectedCards.length === 2) {
      this.clearTimer();
      if (this.selectedCards[0] === this.selectedCards[1]) {
        this.turnoChange = false;
        if (!this.turnoChange) {
          this.player1.push(card.nombre);
          console.log(this.player1);
          this.puntajePlayer1 = this.player1.length;
        } else {
          this.player2.push(card.nombre);
          console.log(this.player2);
          this.puntajePlayer2 = this.player2.length;
        }
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
        this.turnoChange = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 1500);
      }
      this.selectedCards = [];
    }
  }

}
