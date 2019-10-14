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

  handlePersonSubmitted($event) {
    console.log("list-people getting data from its child", $event);
  }
}
