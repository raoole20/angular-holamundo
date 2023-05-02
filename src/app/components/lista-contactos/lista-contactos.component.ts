import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {
  listaContactos: IContacto[] = [] ;
  contactoSeleccionado: IContacto | undefined;

  constructor(private contactoService: ContactoService) {}

  async ngOnInit(): Promise<void> { 
    this.listaContactos = await this.contactoService.obtenerContactos() ;
    console.log(this.listaContactos)
  }

  async obtenerContactoPorId(id: number): Promise<void>{
    this.contactoSeleccionado =  await this.contactoService.obtenerContactoPorId(id)
   }
}
