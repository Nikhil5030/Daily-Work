import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employee = {name:"Suresh", salary:35000,company:"CTS",address:"markapur"};

  constructor() { }

  ngOnInit(): void {
  }

}
