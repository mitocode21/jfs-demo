import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../_model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  mostrar(){
    return this.http.get<Persona>('http://localhost:9090');
  }
}
