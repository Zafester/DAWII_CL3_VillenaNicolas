import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRest } from './apiRest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }
  listarCharacter(): Observable<apiRest[]>{
    return this.http.get<apiRest[]>("https://rickandmortyapi.com/api/character");
  }
}
