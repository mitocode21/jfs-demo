import { Persona } from './_model/persona';
import { PersonaService } from './_service/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  persona: Persona;

  constructor(private personaService : PersonaService){

  }

  ngOnInit(){
    this.personaService.mostrar().subscribe(data => {
      this.persona = data;
    });
  }
}
