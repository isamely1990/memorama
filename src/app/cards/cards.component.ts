import { Component, OnInit } from '@angular/core';

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
  successText: string;
  failText: string;
  timer = 20;
  gameTimer;
  status = false;
  selectedCards = [];
  player1 = [];
  player2 = [];
  puntajePlayer1: number;
  puntajePlayer2: number;

  compare: boolean;
  turnoChange: boolean;

  constructor() { }

  ngOnInit() {
    this.cards.sort( function () { return Math.random() - 0.5; });
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

  clickEvent(card) {
    this.getTimer();
    this.selectedCards.push(card.img);
    const hfs = this.cards.find(x => x.id === card.id);
    hfs.show = false;
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
        hfs.show = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 1500);
      }
      this.selectedCards = [];
    }
  }

}
