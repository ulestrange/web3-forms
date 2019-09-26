import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup ,  Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  form3 = this.fb.group({
    firstName: [''],
    lastName: [''],
    interests: this.fb.array([this.fb.control('')])
  });

  get interests() {

    return this.form3.get('interests') as FormArray;
  }

addInterest() {
 this.interests.push(this.fb.control(''));
}

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


  onSubmit() {
    console.log(this.form3.value);
  }
}
