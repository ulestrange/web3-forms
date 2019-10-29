import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import {ReactiveFormsModule, FormControl, FormsModule, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
 
  registerForm = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required])
  });

  get email() { return this.registerForm.get('email'); }

  get password() { return this.registerForm.get('password'); }

  constructor(private authService: AuthService) {


   }

  ngOnInit() {
  }


  tryRegister(){
    this.authService.SignUp(this.email.value, this.password.value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }


}
