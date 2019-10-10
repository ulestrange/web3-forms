import { Component, OnInit } from '@angular/core';


import { UserDataService } from '../user-data-service';
import {Person} from '../model/person';

@Component({
  selector: 'app-show-current-users',
  templateUrl: './show-current-users.component.html',
  styleUrls: ['./show-current-users.component.css'],
  providers: [UserDataService]
})
export class ShowCurrentUsersComponent implements OnInit {

  personList: Person[];

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
  }

  // getCurrentUsers() {
  //   this.userDataService.getCurrentUsers.subscribe(
  //     value => {this.personList = value}
  //   )
  // }

}
