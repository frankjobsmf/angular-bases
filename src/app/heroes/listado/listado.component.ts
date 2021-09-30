import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = [
    'Spiderman', 
    'Ironman', 
    'Captain America',
    'Hulk',
    'Thor'
  ];

  heroesBorrados: string[] = []

  borrarHeroe = (): void => {

    const heroeBorrado = this.heroes.pop();

    if (heroeBorrado){
      this.heroesBorrados.push(heroeBorrado);
    }
    return ;


  }

}
