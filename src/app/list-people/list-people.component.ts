import { Component, OnInit, Input } from '@angular/core';

import {Person} from '../model/person';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  @Input() personList: Person[];
  currentPerson: Person;

  constructor() { }

  ngOnInit() {
    console.log ('people', this.personList);
  }


  edit(person: Person) {
    this.currentPerson = person;
  }


  clicked(person: Person): void {
    this.currentPerson = person;
   // this.onCourseSelected.emit(course);
  }

  isSelected(person: Person): boolean {
    if (!person || !this.currentPerson) {
      return false;
    }
    return (person === this.currentPerson) ;
  }
}
