import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,  Validators } from '@angular/forms';
import {debounceTime, map, filter} from 'rxjs/operators';
import { Subject, interval } from 'rxjs';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form2 = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(5), Validators.pattern('[a-z,A-Z]*')]),
    lastName: new FormControl(''),
  });

  constructor() {
    this.firstName.valueChanges
    .pipe(debounceTime(300),
    map(value => value.toUpperCase()),
    map(value => value.charAt(value.length - 1) ),
    filter(value => value !== 'U')).
    subscribe((value: string ) => {
      console.log(value); } );
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form2.value);
  }


 

get firstName() { return this.form2.get('firstName')}


}
