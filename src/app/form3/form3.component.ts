import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


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
  closeResult: string;

  get interests() {
    return this.form3.get('interests') as FormArray;
  }

  addInterest() {
    this.interests.push(this.fb.control(''));
  }


  constructor(private fb: FormBuilder, private modalService: NgbModal) {
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

      this.swapInterestValues(this.person.interests);

    }
  }

  onSubmit() {
    console.log('submitted' , this.form3.value);

    this.personSubmitted.emit(this.form3.value);
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log( 'person submitted' , this.form3.value);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

 private swapInterestValues (inputInterestArray){
  if (inputInterestArray.length === this.interests.length) {
    // same length - just swap values
    this.interests.patchValue(inputInterestArray);
  } else if (inputInterestArray.length < this.interests.length) {
    // less interests comming in then are there already
    this.interests.patchValue(inputInterestArray);
    const length = this.interests.length;
    for (let i = length; i >= inputInterestArray.length; i--) {
      this.interests.removeAt(i);
      console.log(inputInterestArray);
    }
  } else {
    // more interests comming in that are there already
    const length = this.interests.length;
    const newlength = inputInterestArray.length;
    const firstSetofValues = inputInterestArray.slice(0, length)
    const extraInterests = inputInterestArray.slice(length, newlength);
   // replace the existing interests
    this.interests.patchValue(firstSetofValues);


    // add the new interests
    extraInterests.forEach( (interest) =>
    { this.interests.push(this.fb.control(interest));  });

    console.log(inputInterestArray);

  }


 }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}