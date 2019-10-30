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
  public message : string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  public login(email: string, password: string) {
    this.authService.Login(email, password)
    .then(resolve => {
      console.log("success loggin in");
    })
    .catch( err =>{
      console.log(err);
      this.message = err;
    })
   
  }

 




}
