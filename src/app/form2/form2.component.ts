import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,  Validators, FormArray } from '@angular/forms';


import { Person } from '../model/person';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form2 = new FormGroup({
    firstName: new FormControl('', [ Validators.required, Validators.minLength(5), Validators.pattern('[a-z,A-Z]*')]),
    lastName: new FormControl(''),
    interests: new FormArray([])
  });

  constructor() {
    this.firstName.valueChanges.subscribe(
      (value: string) => {
        console.log('firstname changed to:', value);
      }
    );

    this.form2.get('lastName').valueChanges.subscribe(
      (value: string) => {
        console.log('lastname changed to:', value);
      }
    );

    this.form2.valueChanges.subscribe(
      (value: string) => {
        console.log('Input to form changed:', value);
      }
    );

    this.addInterest();

    this.addInterest();

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form2.value);
    if (this.firstName.value.toUpperCase().includes('UNA')) {
            this.firstName.setValue('there is only one Una !!');
    }
  }

  onDangerClicked() {
    // this.form2.setValue({
    //   firstName: "Una is Great",
    //    lastName: "mof fdasf fdasf ha"});
  }

  addInterest() {
    this.interests.push(new FormControl(''));
  }

  get firstName() { return this.form2.get('firstName'); }

  get interests() { return this.form2.get('interests') as FormArray; }
}
