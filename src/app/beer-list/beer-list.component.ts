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
  stock: any;

  constructor() { 
    // let c : Beer = this.cervezas(0);
  }

  public masBeer(beer){
    console.log(beer);
    beer.stock++;
  }

  public menosBeer(beer){
    console.log(beer);
    beer.stock--;
  }

  ngOnInit() {
    this.cervezas = BEERS;
  }


  
}
