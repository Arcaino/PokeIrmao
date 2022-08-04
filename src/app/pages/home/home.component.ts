import { Component, OnInit } from '@angular/core';
import { GetPokemonFromList } from 'src/app/core/helpers/GetPokemonFromList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };

}
