import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule } from '@angular/forms';
import { ListModule } from './modules/list/list.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent
  ],
  // Importar módulos de Angular
  // Lo que este importado aca, se puede usar en cualquier componente
  imports: [
    BrowserModule,
    FormsModule,
    // Importar nuestro módulo personalizado
    ListModule,
    // importar el modulo HttpClientModule
    HttpClientModule,
  ],
  providers: [],
  // The root component that Angular creates and inserts into the index.html host web page.
  bootstrap: [AppComponent]
})
export class AppModule { }
