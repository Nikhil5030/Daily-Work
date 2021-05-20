import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employee = {name:"Suresh", salary:35000,company:"CTS",address:"markapur"};

  employees: Employee[];

  constructor(private employeeService:EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
           this.employees=data;
    });
  }

  updateEmployee(employee: Employee): void {
      localStorage.removeItem('id');
      localStorage.setItem('id',employee.id.toString());
      this.router.navigate(['update-employee']);
  }

  deleteEmployee(employee: Employee): void{
    this.employeeService.deleteEmployeeById(employee.id).subscribe();
    this.employees=this.employees.filter(e => e !==employee);
  }

}
