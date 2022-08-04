import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { PokemonCardComponent } from './shared/components/pokemon-card-list/pokemon-card/pokemon-card.component';
import { PokemonCardListComponent } from './shared/components/pokemon-card-list/pokemon-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonCardComponent,
    PokemonCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
