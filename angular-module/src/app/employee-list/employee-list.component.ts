import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Employee';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'ngx-flash-messages';
console.log("I am here-1.");
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee;
  constructor(private http: HttpClient,private flashMessagesService: FlashMessagesService) { console.log("I am here-2.");}

  ngOnInit() {
  	console.log("I am here-3.");
  	// Make the HTTP request:
      this.http.get<Employee>('http://localhost:8000/getemp').subscribe(data => {
      this.employee = data;
    });
  }

  /*editEmp(id){
    this.http.get<Employee>('http://localhost:8000/getempbyId/'+id).subscribe(data => {
      this.employee = data;
    });
  }*/

  deleteEmp(id){
    if (confirm('Are you sure you want to delete this?')) {
      console.log(id);
      this.http.get<Employee>('http://localhost:8000/delete-emp/'+id).subscribe(data => {
        
      });
      this.http.get<Employee>('http://localhost:8000/getemp').subscribe(data => {
        this.employee = data;
      });
      this.flashMessagesService.show('Employee Deleted Successfully.', {
          classes: ['alert', 'alert-success'], // You can pass as many classes as you need
          timeout: 3000, // Default is 3000
        });
           // TODO:  Do something here if the answer is "Ok".
    }
    
  }

}
