import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }
  
  // agregarPersonaje( argumento: Personaje ) {
  //   this.personajes.push( argumento );
  // }

  constructor () {}

}
