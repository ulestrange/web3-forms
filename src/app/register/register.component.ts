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
  }, [this.passwordMatchValidator]);

  // getters for the three form controls

  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get password2() { return this.registerForm.get('password2'); }

  constructor(private authService: AuthService) {
this.registerForm.valueChanges.subscribe (value => {
  this.errorMessage = '';
  this.successMessage = '';
})

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
      this.errorMessage = err;
      this.successMessage = "";
    })
  }

  // This is a custom validator for a formGroup
  // it will return a notMatching error if the controls password and password2 don't match
  // otherwise it will return null.

  passwordMatchValidator(group: FormGroup): any {
    if (group) {
      if (group.get('password').value !==group.get('password2').value) {
        return { notMatching : true };
      }
    }
    return null;
  }

}
