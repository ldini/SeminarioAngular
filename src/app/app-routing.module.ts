import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { BeerListComponent } from './beer-list/beer-list.component';


const routes: Routes = [
  {
    path: 'about',
    component: BreweryAboutComponent,
  },
  {
    path: 'beerlist',
    component: BeerListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
