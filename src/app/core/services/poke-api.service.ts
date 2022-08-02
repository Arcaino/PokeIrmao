import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from 'src/app/shared/models/ResponsePageable';
import { API_BASE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  public getPokemonList() : Observable<ResponsePageable>{
    return this.http.get<ResponsePageable>(`${API_BASE}pokemon`);
  };
}
