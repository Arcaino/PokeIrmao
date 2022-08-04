import { PokemonPoint } from "./PokemonPoint";

export interface ResponsePageable{

    count: number,
    next: string,
    previous: any,
    results: Array<PokemonPoint>
}