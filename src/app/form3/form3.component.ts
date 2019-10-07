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
      this.form3.patchValue({
        firstName: this.person.firstName, lastName: this.person.lastName,
      });

      const inputInterestArray = this.person.interests;

      if (inputInterestArray.length === this.interests.length) {
        // same length - just swap values
        this.interests.patchValue(inputInterestArray);
      } else if (inputInterestArray.length < this.interests.length) {
        // less interests comming in then are there already
        this.interests.patchValue(inputInterestArray);
        const length = this.interests.length;
        for (let i = length; i >= inputInterestArray.length; i--) {
          this.interests.removeAt(i);
        }
      } else {
        // more interests comming in that are there already
        const length = this.interests.length;
        const newlength = inputInterestArray.length;
        const extraInterests = inputInterestArray.splice(length, newlength - length);
       
       // replace the existing interests
        this.interests.patchValue(inputInterestArray);


        // add the new interests
        extraInterests.forEach( (interest) =>
        { this.interests.push(this.fb.control(interest));  });

      }
    }
  }

  onSubmit() {
    console.log(this.form3.value);

    this.personSubmitted.emit(this.form3.value);
  }
}
