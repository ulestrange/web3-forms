import { Component, OnInit, OnChanges, Input, EventEmitter, Output, NgModuleRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



import { Person } from '../model/person';
import { Form3ModalComponent } from '../form3-modal/form3-modal.component';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  // The inital values for the form

  @Input() person: Person;

  // The new values from the form.

  @Output() personSubmitted = new EventEmitter<Person>();

  form3: FormGroup;
  closeResult: string;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
  }


  ngOnInit() { }

// open the modal form, the form itself is a component
  open() {
    const modalRef = this.modalService.open(Form3ModalComponent);
    modalRef.componentInstance.person = this.person;

    modalRef.result.then(
      (result) => {
        console.log("emitting", result);
        this.personSubmitted.emit(result);
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }



  private getDismissReason(reason: any): string {
    console.log("dismmis");
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}






