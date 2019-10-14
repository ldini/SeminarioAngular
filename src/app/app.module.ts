import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { BeerDataService } from './service/beer-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BeerListComponent,
    FooterComponent,
    CartComponent,
    BreweryAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ BeerDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
