import { Injectable } from '@angular/core';
import { debounceTime, map, filter, pluck, take } from 'rxjs/operators';
import { Subject, interval, Observable, merge, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';



import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public people: Person[] = [
    { id: '1', firstName: 'Simor', lastName: 'Harris', interests: [], active: false },
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

  peopleCollection: AngularFirestoreCollection<Person>;
  peopleData: Observable<Person[]>;

  people2: Person[];

  constructor(private afs: AngularFirestore) {
    this.peopleCollection = afs.collection<Person>('people');
    this.addPersonToDatabase(this.people[0]);


  }

  getCurrentUsers(): Observable<Person[]> {
    this.peopleData = this.peopleCollection.valueChanges();

    this.peopleData.subscribe(data => {
      console.log('Data', JSON.stringify(data));
    })
    return this.peopleData;

  }

 // // for testing only this returns an observable 
  // getCurrentUsers(): Observable<Person[]> {
  //   return interval(3000).pipe(
  //     map(value => this.people.filter(this.isActive)),
  //     take(10)
  //   );
  // }

  // for testing only, sets some people active

  private isActive(p: Person) : boolean
{
  return (Math.random() > 0.8);
}

getUserDataList(): Person[] {
  return this.people;
}

addPersonToDatabase(person: Person){
  this.peopleCollection.add((person));
}

// addAllPeople(){
//   for ()


}

