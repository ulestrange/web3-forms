import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Person } from '../model/person';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  // The inital values for the form

  @Input() person: Person;

  // The new values from the form.

  @Output() onPersonSubmited : EventEmitter<Person>;

  form3: FormGroup;

  p : Person;




  get interests() {

    return this.form3.get('interests') as FormArray;
  }

  addInterest() {
    this.interests.push(this.fb.control(''));
  }


  constructor(private fb: FormBuilder) {
    this.onPersonSubmited = new EventEmitter();

  }

  ngOnInit() {
    

    this.form3 = this.fb.group({
      firstName: [''],
      lastName: [''],
      interests: this.fb.array([''])
    });
  }


  onSubmit() {
    console.log(this.form3.value);
    this.p = this.form3.value as Person;
    console.log(this.p);
    this.onPersonSubmited.emit(this.p)
  }
}
