import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService
      .login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      })
      .subscribe(
        (res) => {
          console.log(res);
          sessionStorage.setItem('token', res.token);
        },
        (error) => console.log(error),
        () => console.log('Completado')
      );
  }
}
