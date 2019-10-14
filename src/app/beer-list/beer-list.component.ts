import { Component, OnInit } from '@angular/core';
//import { Beer } from './Beer';
//import { BEERS } from './mocks';
import { BeerDataService } from '../service/beer-data.service';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  
  public cervezas;
  stock: any;

  public imgSource = "../../assets/img/pinta.png";

  constructor(private beerDataService:BeerDataService) { }

  public masBeer(cerveza){
    console.log(cerveza);
    cerveza.stock++;
  }

  public menosBeer(cerveza){
    console.log(cerveza);
    cerveza.stock--;
  }

  soloNumeros($event){
    if($event.key < "0" || $event.key > "9")
      $event.preventDefault();
  }

  ngOnInit() {
    this.cervezas = this.beerDataService.getBeers();
  }


  
}
