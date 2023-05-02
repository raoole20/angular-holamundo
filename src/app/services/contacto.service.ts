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

  obtenerContactoPorId(id: number): Promise<IContacto | undefined> {
    return Promise.resolve(CONTACTOS.find(contacto => contacto.id === id))
  }
}
