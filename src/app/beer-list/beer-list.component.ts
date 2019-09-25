import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';
import { BEERS } from './mocks';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  
  public cervezas: Beer[];

  constructor() { 
    // let c : Beer = this.cervezas(0);
  }

  ngOnInit() {
    this.cervezas = BEERS;
  }


  
}
