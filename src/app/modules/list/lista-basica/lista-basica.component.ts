import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.css']
})
export class ListaBasicaComponent implements OnInit {
  listaElementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  cargando: boolean = true;
  option: number = 1;

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 5000);
  }

  switch( option: number): void {
    this.option = option
  }
}
