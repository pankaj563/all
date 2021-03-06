import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

console.log("I am here-app-route-1.");

const routes: Routes = [
  { path: 'getemp', component: EmployeeListComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'register/:id', component: RegistrationComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }


