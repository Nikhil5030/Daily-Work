import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';


const routes:Routes =[
  /*{ path:'', component:EmployeesComponent},
  { path:'add-employee', component:AddEmployeeComponent},
  { path:'employee/:id', component:EmployeeComponent},
  { path:'update-employee', component:UpdateEmployeeComponent}*/
  { path:'', component:UsersComponent},
  { path:'add-user', component:AddUserComponent},
  { path:'update-user', component:UpdateUserComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
