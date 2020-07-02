import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url: string  =`${environment.apiUrl}/persona`;
  constructor(
    private http:HttpClient
  ) { }
  buscarTodo(){
    return this.http.get(`${this.url}/listar`)
  }
}
