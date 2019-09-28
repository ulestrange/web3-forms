import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Person } from '../model/person';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  @Input() person: Person;

  form3: FormGroup;




  get interests() {

    return this.form3.get('interests') as FormArray;
  }

  addInterest() {
    this.interests.push(this.fb.control(''));
  }


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    console.log("person", this.person);

    this.form3 = this.fb.group({
      firstName: [this.person.firstName],
      lastName: [this.person.lastName],
      interests: this.fb.array([this.fb.control(this.person.interests[0])])
    });
  }


  onSubmit() {
    console.log(this.form3.value);
  }
}
