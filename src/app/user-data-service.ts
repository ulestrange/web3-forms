import { Injectable } from '@angular/core';
import { debounceTime, map, filter, pluck, take } from 'rxjs/operators';
import { Subject, interval, Observable, merge, of } from 'rxjs';



import { Person } from './model/person';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private people: Person[] = [
    { firstName: 'Una', lastName: 'Evans', interests: [] },
    { firstName: 'Boris', lastName: 'Johnson', interests: ['Brexit', 'Busses'] },
    { firstName: 'Therese', lastName: 'May', interests: ['Shoes', 'Brexit'] },
    { firstName: 'Donald', lastName: 'Trump', interests :
     ['Twitter', 'Himself', 'Gold', 'Building', 'Korea']}
  ];

  constructor() { 

    this.myObservable.subscribe(value => {console.log(value); } );
  }

  myObservable = interval(1000).pipe(
    map (value => this.people)
    );

  getUserDataList(): Person[] {
    return this.people;
  }

  // this returns an observable, which can change over time

  getCurrentUsers(): Observable <Person[]> {
    return interval(1000).pipe(
    map (value => this.people)
    );
  }



}

