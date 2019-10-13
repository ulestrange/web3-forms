import { Injectable } from '@angular/core';
import { debounceTime, map, filter, pluck, take } from 'rxjs/operators';
import { Subject, interval, Observable, merge, of } from 'rxjs';



import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private people: Person[] = [
    { id: '1', firstName: 'Una', lastName: 'Evans', interests: [], active: false },
    { id: '2', firstName: 'Boris', lastName: 'Johnson', interests: ['Brexit', 'Busses'], active: false },
    { id: '3', firstName: 'Therese', lastName: 'May', interests: ['Shoes', 'Brexit'], active: false },
    {
      id: '4', firstName: 'Donald', lastName: 'Trump', interests:
        ['Twitter', 'Himself', 'Gold', 'Building', 'Korea'], active: false
    },
    {
      id: '5', firstName: 'Sinead', lastName: 'Evans', interests:
        ['Sleeping', 'Reading', 'Warm PJs'], active: false
    }
  ];

  constructor() {

  }

  getCurrentUsers(): Observable<Person[]> {
    return interval(3000).pipe(
      map(value => this.people.filter(this.isActive)),
      take(10)
    );
  }

  isActive(p: Person) : boolean
  {
    return (Math.random() > 0.8);
  }

  currentUsers$ = interval(10000).pipe(
    map(value => this.people),
    filter(value => Math.random() > 0.5),
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

