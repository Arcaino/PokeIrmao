import { PokemonPoint } from "./PokemonPoint";

export class ResponsePageable{
    constructor(
        public count: number,
        public next: string,
        public previous: any,
        public results: Array<PokemonPoint>
    ){}
}