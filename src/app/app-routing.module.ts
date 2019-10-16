import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component} from './form1/form1.component';

import { ListPeopleComponent} from './list-people/list-people.component';


const routes: Routes = [
  {path: 'form1', component: Form1Component},
  {path: 'ListPeople', component: ListPeopleComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
