import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Employee';
console.log("I am here-1.");
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee;
  constructor(private http: HttpClient) { console.log("I am here-2.");}

  ngOnInit() {
  	console.log("I am here-3.");
  	// Make the HTTP request:
    this.http.get<Employee>('http://localhost:8000/get-emp').subscribe(data => {
      console.log(data);
      this.employee = data;
    });
  }

}
