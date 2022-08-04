import { Pokemon } from "./Pokemon";

export class PokemonList{

    pokemonList: Array<Pokemon> = [];

    constructor(pokemon: Pokemon){
        this.pokemonList.push(pokemon);
    }
}