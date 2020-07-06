import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Persona} from '../model/Persona';
import {RespuestaServidor} from '../model/respuesta-servidor';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url: string  =`${environment.apiUrl}/persona`;
  constructor(
    private http:HttpClient
  ) { }


  buscarTodo():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.url}/listar`);
  }


  crear(persona:Persona):Observable<RespuestaServidor>{
    return this.http.post<RespuestaServidor>(`${this.url}/crear`,persona);
  }

  editar(persona:Persona):Observable<null>{
    return this.http.put<null>(`${this.url}/update`,persona)
  }
}
