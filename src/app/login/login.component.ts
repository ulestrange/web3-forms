import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public User$;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.User$ = this.authService.user$;
  }

  public login(email: string, password: string) {
    this.authService.Login(email, password);
   
  }

  public signup(email: string, password: string) {
    this.authService.SignUp(email, password);
   
  }

  public logout(){
    this.authService.Logout();
  }

}
