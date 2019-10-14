import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ShowCurrentUsersComponent } from './show-current-users/show-current-users.component';
import { Form3ModalComponent } from './form3-modal/form3-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    ListPeopleComponent,
    ShowCurrentUsersComponent,
    Form3ModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [{provide: 'UnaMessage', useValue: 'hello from a value provider'}],
  bootstrap: [AppComponent],
  entryComponents: [ Form3ModalComponent ]  //needed because the component is not included in a template
})
export class AppModule { }
