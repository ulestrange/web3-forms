import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  user: firebase.User;

  constructor(public authService: AuthService) {
    this.message = '';

  }

  ngOnInit() {
    this.authService.user$.subscribe( value => { this.user = value; });
  }

  login(email: string, password: string): void {
    this.message = '';
    this.authService.login(email, password);
    console.log ('user is', this.user);
  }

  logout() {
    this.authService.logout();
  }

}
