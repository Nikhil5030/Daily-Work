import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {}

  getAllEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }

  insertEmployee(employee:Employee): Observable<Employee> {
       return this.httpClient.post<Employee>(this.baseUrl,employee);
  }

  getEmployeeById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseUrl+'/'+id);
  }

  deleteEmployeeById(id:number): Observable<Employee>{
    return this.httpClient.delete<Employee>(this.baseUrl+'/'+id);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.baseUrl+'/'+employee.id,employee);
  }
}
