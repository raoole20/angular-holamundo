import { Component } from '@angular/core';

@Component({
  // Este es el selector donde se renderizara el componente
  // es decir en la etiqueta <app-root></app-root>
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = 'Raulito';
  nombre: any;


  resivirMensajeHijo(event: string) { 

    alert(event)
  }
}
