import { Component, OnInit } from '@angular/core';
import { GetPokemonFromList } from 'src/app/core/helpers/GetPokemonFromList';

@Component({
  selector: 'app-pokemon-card-list',
  templateUrl: './pokemon-card-list.component.html',
  styleUrls: ['./pokemon-card-list.component.scss']
})
export class PokemonCardListComponent implements OnInit {

  constructor(public getPokemonFromList: GetPokemonFromList) { }

  ngOnInit(): void {
    this.getPokemonFromList.getPokemonPointList();
    console.log(this.getPokemonFromList);
  }

}
