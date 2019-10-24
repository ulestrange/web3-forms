import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { Form1Component} from './form1/form1.component';
import { ListPeopleComponent} from './list-people/list-people.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { ProtectedComponent} from './protected/protected.component';
import { AuthGuard } from './auth/auth.guard';
import { ShowRouteInfoComponent } from './show-route-info/show-route-info.component';


// the array below defines the routes for the application


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', redirectTo: '/Home'},
  {path: 'form1', component: Form1Component},
  {path: 'ListPeople', component: ListPeopleComponent},
  {path: 'person/:id', component: PersonDetailsComponent},
  {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
  {path: 'testRoute', component: ShowRouteInfoComponent },
  {path: 'testRoute/:user', component: ShowRouteInfoComponent },
  {path: 'testRoute/:user/:id/:mess', component: ShowRouteInfoComponent },
  {path: '**', component: NotFoundComponent, pathMatch: 'full'} // this needs to be last

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
