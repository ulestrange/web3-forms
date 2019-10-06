import { Component } from '@angular/core';

import { Person } from './model/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Una\'s Lovely Forms';

  people: Person[];



  constructor() {
    this.people = [{firstName: 'Una', lastName: 'Evans', interests: []},
    {firstName: 'Boris', lastName: 'Johnson', interests: ['Brexit', 'Busses']}];
  }

  handlePersonSubmitted(person: Person) {
    console.log('Person submitted' , person);
  }

  handlePersonSelected(person: Person) {
    console.log('Person selected' , person);
  }



}
