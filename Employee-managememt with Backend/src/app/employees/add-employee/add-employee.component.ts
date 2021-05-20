import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee;

  @Input() countFromParent: number;

  @Output() countFromChild=new EventEmitter<number> ();

  signupForm : FormGroup;

  constructor(private employeeService: EmployeeService,private router:Router) { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
        id: new FormControl(this.countFromParent, Validators.required),
        password: new FormControl(null, Validators.required),
        name: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required),
        age: new FormControl(null, Validators.required),
        company: new FormControl(null, Validators.required)
    });
  }

 /* addEmployee(): void{

  }*/

  onSubmit(): void{
   // this.countFromChild.emit(this.countFromParent+5);
   this.employeeService.insertEmployee(this.signupForm.value).subscribe(data => {
     console.log("Employee data added successfully!")
     this.router.navigate(['']);
   })
    console.log(this.signupForm);
  }
}
