import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  constructor() { }
  status: boolean = false;
  clickEvent(){
      console.log('click', this.status)
      this.status = !this.status;       
  }
  ngOnInit() {
  }

}
