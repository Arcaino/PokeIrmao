import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/shared/models/Pokemon';
import { ResponsePageable } from 'src/app/shared/models/ResponsePageable';
import { Specie } from 'src/app/shared/models/Specie';
import { API_BASE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  public getPokemonPointList() : Observable<ResponsePageable>{
    return this.http.get<ResponsePageable>(`${API_BASE}pokemon`);
  };

  public getPokemonFromPokemonPointList(url: any) : Observable<Pokemon>{
    return this.http.get<Pokemon>(`${url}`);
  };

  public getPokemonSpecie(id: number) : Observable<Specie>{
    return this.http.get<Specie>(`${API_BASE}pokemon-species/${id}`);
  };
}
