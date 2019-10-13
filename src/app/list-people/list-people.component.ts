import { Component, OnInit, Input } from '@angular/core';

import {Person} from '../model/person';
import {UserDataService} from '../services/user-data-service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css'],
  providers: [UserDataService]
})
export class ListPeopleComponent implements OnInit {

  personList: Person[];
  currentPerson: Person;

  constructor(private userDataService: UserDataService) {
  }

  ngOnInit() {
    this.personList = this.userDataService.getUserDataList();
    console.log ('people', this.personList);
  }


  edit(person: Person) {
    this.currentPerson = person;
    console.log(this.currentPerson);
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

  handlePersonSubmitted($event) {
    console.log($event);

  }
}
