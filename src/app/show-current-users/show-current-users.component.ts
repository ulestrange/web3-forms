import { Component, OnInit } from '@angular/core';
import { Subject, interval, Observable, merge, of, pipe } from 'rxjs';


import { UserDataService } from '../services/user-data-service';
import { Person } from '../model/person';
import { tap } from 'rxjs/operators';

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

    this.userDataService.getCurrentUsers().subscribe({
      next: (value: Person[]) => {
        this.personList = value
      },
      complete: () => { console.log("all done") }
    });


  }



}
