import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})

export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;
  
    sumarNumero = (): number => {
      return this.numero ++;
    }
  
    restarNumero = (): number => {
      return this.numero --;
    }
  
    acumular = ( valor: number ): number => {
      return this.numero += valor;
    }

}