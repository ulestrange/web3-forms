import { Component } from '@angular/core';

import { Person } from './model/person';
import { UserDataService } from './services/user-data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: 'UDS', useClass: UserDataService}]
})
export class AppComponent {
  title = 'Una\'s Lovely Forms';

  people: Person[];

  constructor() {


  }


}
