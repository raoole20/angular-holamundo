import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS)
  }

  obtenerContactoPorId(id: number): Observable<IContacto | undefined> {

    let observable = new Observable<IContacto>(observer => {
      setTimeout(() => {
        observer.next(CONTACTOS.find(contacto => contacto.id === id)); // Emitir un valor a todo componente suscriptos
        observer.complete(); // No emitimos más eventos
      }, 2000);
    });

    return observable
  }
}
