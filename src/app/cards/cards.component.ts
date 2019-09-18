import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  cards =  [
    1,2,3,4,5,6,7,8,9,10
  ];
  cardsCopy =  [
    1,2,3,4,5,6,7,8,9,10
  ];
  constructor() { }
  status: boolean = false;
  clickEvent(id){
      console.log('click', this.status)
      console.log(id)
      this.status = !this.status;    
      
  }
  ngOnInit() {
    this.cards.sort(function() {return Math.random() - 0.5});
    this.cardsCopy.sort(function() {return Math.random() - 0.5});
  }

}
