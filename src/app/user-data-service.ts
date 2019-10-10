import { Injectable } from '@angular/core';
import { debounceTime, map, filter, pluck, take } from 'rxjs/operators';
import { Subject, interval, Observable, merge, of } from 'rxjs';



import { Person } from './model/person';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  // getUserListData(): Observable <Person[]> {
  //   const people = [
  //     { firstName: 'Una', lastName: 'Evans', interests: [] },
  //     { firstName: 'Boris', lastName: 'Johnson', interests: ['Brexit', 'Busses'] }];

  //   return  of(people) ;
  // }

  getUserDataList(): Person[] {
    const people = [
      { firstName: 'Una', lastName: 'Evans', interests: [] },
      { firstName: 'Boris', lastName: 'Johnson', interests: ['Brexit', 'Busses'] }];
    return people;
  }
}

