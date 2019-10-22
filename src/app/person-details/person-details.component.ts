import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';




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
  nextId: string;

  constructor(private route: ActivatedRoute,
    private router: Router, private userDataService: UserDataService) {
  }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.people = this.userDataService.getUserDataList();
      this.person = this.people.find(p => this.id === p.id);
      console.log(this.person);
    }
    );

    if (!this.person) {
      this.router.navigate(['/not-found']);

    }

  }

  getNextId(): string {
    var i = this.people.findIndex(p => this.id === p.id);
    if (i + 1 >= this.people.length)
      return (this.people[0].id)
    else
      return (this.people[i + 1].id)
  }

}
