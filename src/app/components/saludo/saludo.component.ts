import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  // input es un decorador que permite recibir parametros desde el componente padre
  @Input()
  public nombre: string = '@Anonimo';

  @Output()
  public eventoSaludo: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  // se ejecuta cuando se crea el componente
  ngOnInit(): void {
    // instrucciones previas a la rederizacion del componente
    console.log('ngOnInit')
  }

  /**
   * Ejemplo para gestionar un evento de tipo click en el DOM
   */
  public onClick(): void {
    console.log('onClick')
    this.nombre = 'Raulito';
  }

  alertaSaludo(): void { 
    alert(`Hola ${this.nombre}`);
  }

  emitirEventoAlpadre(): string { 
    this.eventoSaludo.emit(`Hola ${this.nombre}`);
    return `Hola ${this.nombre}`;
  }
}
    