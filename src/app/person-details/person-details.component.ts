import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



import { Person } from '../model/person';
import { UserDataService } from '../services/user-data-service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  id: string;
  private people: Person[];
  person: Person;

  constructor(private route: ActivatedRoute, private userDataService: UserDataService) {
    route.params.subscribe ( parameters => {this.id = parameters.id; });
   }

  ngOnInit() {
    this.people = this.userDataService.getUserDataList();
    console.log(this.people);
    this.person = this.people.find(p => this.id === p.id );
    console.log(this.person);

  }

}
