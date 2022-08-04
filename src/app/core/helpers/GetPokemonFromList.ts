import { PokeApiService } from "../services/poke-api.service";
import { Injectable } from '@angular/core';
import { PokemonPoint } from "src/app/shared/models/PokemonPoint";
import { Pokemon } from "src/app/shared/models/Pokemon";
import { PokemonComplete } from "src/app/shared/models/PokemonComplete";

@Injectable({
  providedIn: 'root',
})
export class GetPokemonFromList {

  pokemon!: Pokemon;
  pokemonPointList: PokemonPoint[] = [];
  pokemonList: Pokemon[] = [];

  pokemonComplete!: PokemonComplete;
  pokemonCompleteList: PokemonComplete[] = [];

  constructor(private api: PokeApiService) { }

  getPokemonPointList() {

    this.api.getPokemonPointList()
      .subscribe(response => {

        this.pokemonPointList = response.results;
        this.pokemonPointList.forEach((pokemonPoint, index) => {
          this.getPokemon(pokemonPoint, index)
        });
      });
  };

  getPokemon(pokemon: any, index: number) {

    this.api.getPokemonFromPokemonPointList(pokemon.url)
      .subscribe((response : Pokemon) => {
        
        this.pokemon = response;
        this.pokemonList.push(this.pokemon);
        this.assignPokemonSpecie(this.pokemonList[index]);
      });
  };

  assignPokemonSpecie(pokemonObj: Pokemon) {

    this.api.getPokemonSpecie(pokemonObj.id)
      .subscribe(response => {

        this.pokemonList.forEach(pokemon => {

          if (pokemonObj.id == pokemon.id) {

            this.pokemonComplete = {...pokemonObj, ...response};
            this.pokemonCompleteList.push(this.pokemonComplete);
          }
        });
      });
  }
}