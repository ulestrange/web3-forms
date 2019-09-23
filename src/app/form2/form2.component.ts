import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,  Validators } from '@angular/forms'

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form2 = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(5)]),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form2.value);
  }


  get firstName () { return this.form2.get('firstName')}
}
