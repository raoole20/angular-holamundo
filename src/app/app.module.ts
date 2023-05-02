import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule } from '@angular/forms';
import { ListModule } from './modules/list/list.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent
  ],
  // Importar módulos de Angular
  // Lo que este importado aca, se puede usar en cualquier componente
  imports: [
    BrowserModule,
    FormsModule,
    // Importar nuestro módulo personalizado
    ListModule,
  ],
  providers: [],
  // The root component that Angular creates and inserts into the index.html host web page.
  bootstrap: [AppComponent]
})
export class AppModule { }
