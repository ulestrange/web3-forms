import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms'

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  firstNameControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }


  updateName() {
    this.firstNameControl.setValue('Una is Great');
  }
}
