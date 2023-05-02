import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';

@NgModule({
  // Son los componentes declarados para este modulo
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Exportar el componente para que pueda ser usado en otros modulos
    ListaBasicaComponent
  ]
})
export class ListModule { }
