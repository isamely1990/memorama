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
  clickEvent(e){
      console.log('click', this.status)
      const target = e.target
      console.log(target)
      const idAttr = target.attributes.id;
      console.log(idAttr)
      this.status = !this.status;    
      
  }
  ngOnInit() {
    this.cards.sort(function() {return Math.random() - 0.5});
    this.cardsCopy.sort(function() {return Math.random() - 0.5});
  }

}
