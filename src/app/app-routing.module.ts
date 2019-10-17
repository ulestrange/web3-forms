import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { Form1Component} from './form1/form1.component';
import { ListPeopleComponent} from './list-people/list-people.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', redirectTo: '/Home'},
  {path: 'form1', component: Form1Component},
  {path: 'ListPeople', component: ListPeopleComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
