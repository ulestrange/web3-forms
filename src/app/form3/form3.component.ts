import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Person } from '../model/person';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit, OnChanges {

  // The inital values for the form

  @Input() person: Person;

  // The new values from the form.

  @Output() personSubmitted = new EventEmitter<Person>();

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

    this.form3 = this.fb.group({
      firstName: [this.person.firstName],
      lastName: [this.person.lastName],
      interests: this.fb.array(this.person.interests)
    });
  }

  ngOnChanges() {
    console.log('On Changes:', this.person);
    if (this.form3) {
      
      
      this.form3.setValue({ firstName : this.person.firstName, lastName: this.person.lastName,
      interests : this.fb.array(this.person.interests) });
      }
  }

  onSubmit() {
    console.log(this.form3.value);

    this.personSubmitted.emit(this.form3.value);
  }
}
