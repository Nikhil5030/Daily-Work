import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  id:number;
  employee: Employee;

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee=data;
      this.router.navigate(['employee/:id']);
    })
  }

}
