import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,  Validators } from '@angular/forms';
import {debounceTime, map, filter,  pairwise} from 'rxjs/operators';
import { Subject, interval, Observable, merge } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  source1 = this.firstName.valueChanges
  .pipe(debounceTime(300),
  map(value => value.toUpperCase()),
  map(value => value.charAt(value.length - 1) ),
  filter(value => value !== 'U'));

  source2 = this.lastName.valueChanges;

  combineSource: Observable<any> = merge(this.source1, this.source2);

  constructor() {
    this.combineSource.subscribe((value: string ) => {
      console.log(value); } );
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form2.value);
  }


 

get firstName() { return this.form2.get('firstName')};

get lastName() { return this.form2.get('lastName')}
}
