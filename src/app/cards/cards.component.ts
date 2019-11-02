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
      id: 1,
      show: true,
      able: true
    },
    {
      nombre: 'luna',
      img: 2,
      id: 2,
      show: true,
      able: true
    },
    {
      nombre: 'lechuga',
      img: 3,
      id: 3,
      show: true,
      able: true
    },
    {
      nombre: 'halloween',
      img: 4,
      id: 4,
      show: true,
      able: true
    },
    {
      nombre: 'murcielago',
      img: 5,
      id: 5,
      show: true,
      able: true
    },
    {
      nombre: 'raton',
      img: 6,
      id: 6,
      show: true,
      able: true
    },
    {
      nombre: 'monstro',
      img: 7,
      id: 7,
      show: true,
      able: true
    },
    {
      nombre: 'vampiro',
      img: 8,
      id: 8,
      show: true,
      able: true
    },
    {
      nombre: 'frank',
      img: 9,
      id: 9,
      show: true,
      able: true
    },
    {
      nombre: 'calabaza',
      img: 10,
      id: 10,
      show: true,
      able: true
    },
    {
      nombre: 'fantasma',
      img: 1,
      id: 11,
      show: true,
      able: true
    },
    {
      nombre: 'luna',
      img: 2,
      id: 12,
      show: true,
      able: true
    },
    {
      nombre: 'lechuga',
      img: 3,
      id: 13,
      show: true,
      able: true
    },
    {
      nombre: 'halloween',
      img: 4,
      id: 14,
      show: true,
      able: true
    },
    {
      nombre: 'murcielago',
      img: 5,
      id: 15,
      show: true,
      able: true
    },
    {
      nombre: 'raton',
      img: 6,
      id: 16,
      show: true,
      able: true
    },
    {
      nombre: 'monstro',
      img: 7,
      id: 17,
      show: true,
      able: true
    },
    {
      nombre: 'vampiro',
      img: 8,
      id: 18,
      show: true,
      able: true
    },
    {
      nombre: 'frank',
      img: 9,
      id: 19,
      show: true,
      able: true
    },
    {
      nombre: 'calabaza',
      img: 10,
      id: 20,
      show: true,
      able: true
    }
  ];

  showMessage = false;
  successText = 'Genial!, continúa jugando';
  failText = 'fallaste, siguiente jugador';
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

  turno1 = true;
  turno2 = false;


  constructor() { }

  ngOnInit() {
    this.contador$ = timer(1000, 1000)
      .pipe(
        takeWhile(() => this.tiempo > 0),
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
    console.log('paramo el reloj')
    this.countdown.unsubscribe();
  }

  playGame(card) {
    this.selectedCards.push(card);
    if (this.selectedCards.length > 0) {
      // console.log('arranco el conteo regresivo')
      // this.getTimer();
    }
    const clickedCard = this.cards.find(x => x.id === card.id);
    clickedCard.show = false;
    // evaluo quien es el jugador
    if (this.turno1 === true) {
      console.log('turno primer jugador')
      // evaluo la cantidad de cartas seleccionadas
      if (this.selectedCards.length === 2) {
        // this.clearTimer();
        this.tiempo = 10;
        // evaluo si las cartas seleccionadas son iguales
        if (this.selectedCards[0].img === this.selectedCards[1].img) {
          this.player1.push(this.selectedCards);
          this.puntajePlayer1 = this.player1.length;
          this.compare = true;
          this.showMessage = true;
          clickedCard.able = false;
          setTimeout(() => {
            this.showMessage = false;
          }, 1500);
        } else {
          this.showMessage = true;
          this.compare = false;
          this.turno1 = false;
          this.turno2 = true;
        }
        this.selectedCards = [];
      }
    } else {
      console.log('turno segundo jugador')
      if (this.selectedCards.length === 2) {
        // this.clearTimer();
        this.tiempo = 10;
        // evaluo si las cartas seleccionadas son iguales
        if (this.selectedCards[0].img === this.selectedCards[1].img) {
          this.player2.push(this.selectedCards);
          this.puntajePlayer2 = this.player2.length;
          this.compare = true;
          this.showMessage = true;
          clickedCard.able = false;
          setTimeout(() => {
            this.showMessage = false;
          }, 1500);
        } else {
          this.showMessage = true;
          this.compare = false;
          this.turno1 = true;
          this.turno2 = false;
        }
        this.selectedCards = [];
      }
    }

  }

}
