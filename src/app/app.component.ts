import { Component } from '@angular/core';
import {  Person } from './model/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Una\'s Lovely Forms';

  people: Person[];

  constructor()
  {
    this.people = [{firstName: "Una", lastName:"Evans", interests: []}];
    console.log(this.people[0]);
  }

  personSubmitted (person : Person) : void
  {
    console.log('Person submitted' , person);
  }
}
