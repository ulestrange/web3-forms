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
     ['Twitter', 'Himself', 'Gold', 'Building', 'Korea']},
     {firstName: 'Sinead', lastName: 'Evans', interests:
    ['Sleeping','Reading','Warm PJs']}
  ];

  constructor() { 

  }

  currentUsers$ = interval(1000).pipe(
    map (value => this.people),
    map (value => value.slice(Math.floor(Math.random()*value.length),value.length)),
    take(10)
    );

 

  getUserDataList(): Person[] {
    return this.people;
  }

  // this returns an observable, which can change over time

  // getCurrentUsers(): Observable <Person[]> {
  //   return interval(1000).pipe(
  //   map (value => this.people),
  //   take(10)
  //   );
  // }



}

