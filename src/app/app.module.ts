import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ShowCurrentUsersComponent } from './show-current-users/show-current-users.component';
import { Form3ModalComponent } from './form3-modal/form3-modal.component';

import { UserDataService} from './services/user-data-service';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoginComponent } from './login/login.component';

import { ShowRouteInfoComponent } from './show-route-info/show-route-info.component';


const firebaseConfig = {
  apiKey: 'AIzaSyDuSeBVfw-z0PFWi_269O9l9F-ZK0COm8w',
  authDomain: 'web3angular.firebaseapp.com',
  databaseURL: 'https://web3angular.firebaseio.com',
  projectId: 'web3angular',
  storageBucket: 'web3angular.appspot.com',
  messagingSenderId: '878952047455',
  appId: '1:878952047455:web:40943f6df0a8ef71774cea'
};

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    ListPeopleComponent,
    ShowCurrentUsersComponent,
    Form3ModalComponent,
    NotFoundComponent,
    HomeComponent,
    PersonDetailsComponent,
    ProtectedComponent,
    LoginComponent,
    ShowRouteInfoComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ Form3ModalComponent ]  // needed because the component is not included in a template
})
export class AppModule { }
