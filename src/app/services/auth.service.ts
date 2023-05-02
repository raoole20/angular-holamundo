import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(body: { email: string, password: string }): Observable<any> {

    // Nos devuelve un observable, cuando la peticion http, se haya completado
    // el componente suscrito accederá al toke de login
    // El componente que se suscriba, recibirá el token
    return this.http.post('https://reqres.in/api/login', body);
  }
}
