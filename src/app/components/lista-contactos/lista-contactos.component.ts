import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css'],
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;
  subscription: Subscription | undefined;

  constructor(private contactoService: ContactoService) {}

  async ngOnInit(): Promise<void> {
    this.listaContactos = await this.contactoService.obtenerContactos();
    console.log(this.listaContactos);
  }

  async obtenerContactoPorId(id: number): Promise<void> {
    this.subscription = this.contactoService.obtenerContactoPorId(id)?.subscribe(
      (contacto) => {
        this.contactoSeleccionado = contacto;
      },
      (error) => console.log(error),
      () => console.log('Completado')
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
