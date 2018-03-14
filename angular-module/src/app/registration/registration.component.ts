import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Employee';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
console.log("EmployeeEmployeeEmployeeEmployeeEmployeeEmployee");
console.log(Employee);

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    Employee
  ],
  providers: [],
  bootstrap: []
})

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  employee: Employee;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get<Employee>('http://localhost:8000/getemp').subscribe(data => {
      console.log(data);
      this.employee = data;
    });
  }

  onSubmit() { this.submitted = true; }

  submitted = false;
  register(form: NgForm){
    console.log("pankaj maurya");
    console.log(form.value);
    //console.log(myform.value);
    //var body = "address=" + d.address + "&company=" + d.company + "&name=" + d.name;
    //console.log(body);
    this.http.post('http://localhost:8000/regEmp',form.value,httpOptions).subscribe((data:any[]) => {console.log(data)});
    //this.http.post<Employee>(this.employee, httpOptions);
  }
}


/*register (this.employee: Employee): Observable<Employee> {
    this.http.post<Employee>(url,this.employee,httpOptions)
    .pipe(
        catchError(this.handleError('Employee', employee))
    );
  }*/