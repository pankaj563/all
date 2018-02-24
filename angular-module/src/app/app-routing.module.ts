import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegistrationComponent } from './registration/registration.component';

console.log("I am here-app-route-1.");

const routes: Routes = [
  { path: 'getemp', component: EmployeeListComponent },
  { path: 'register', component: RegistrationComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }


