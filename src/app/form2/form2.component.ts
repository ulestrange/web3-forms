import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, map, filter, pluck, take } from 'rxjs/operators';
import { Subject, interval, Observable, merge } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form2 = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-z,A-Z]*')]),
    lastName: new FormControl(''),
  });

  isTrumpNamed = false;

  source1$ = this.firstName.valueChanges
    .pipe(
     // debounceTime(1000),                               
      map(value => value.toUpperCase()),                  
      map(value => value.charAt(value.length - 1)),
      filter(value => value !== 'U')
      );

  source2$ = this.lastName.valueChanges;

  combineSource$: Observable<any> = merge(this.source1$, this.source2$);

  formSource$: Observable<any> = this.form2.valueChanges.pipe(
    pluck('lastName'),
    filter(value => value.length > 3),
    take(1)
  );

  constructor() {


  }

  ngOnInit() {


// this.source1$.subscribe( value => console.log(value));

    this.formSource$.subscribe({
      next: (value: string) => {console.log(value); },
      error: msg => {console.warn(msg)},
      complete: () => console.log('recived the message')
    }
  );

    this.formSource$.pipe(
      pluck('lastName'),
      // filter(value => value.includes('Trump')),
      // take(1)
      // ).subscribe((value: string) => {
      //   console.log('Bingo ', value);
      //   this.isTrumpNamed = true;}
      );
  }

  onSubmit() {
    console.log(this.form2.value);
  }




  get firstName() { return this.form2.get('firstName'); }

  get lastName() { return this.form2.get('lastName'); }
}
