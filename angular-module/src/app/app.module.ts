import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Import HttpClientModule from @angular/common/http
import { FormsModule } from '@angular/forms';  //<<<< import it here
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { FlashMessagesModule } from 'ngx-flash-messages';
//import { FlashMessageModule } from 'angular2-flash-messages/module';
console.log("I am here-app-mnodule-1.");

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
