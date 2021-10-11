import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = 'http://localhost:8080/master/employee';

  constructor(private http: HttpClient) {}

  getEmployee() {
    return this.http.get(this.apiUrl);
  }

  addEmployee(employee: any) {
    return this.http.post(this.apiUrl, employee, httpOptions);
  }

  updateEmployee(employee: any, id: any) {
    return this.http.put(`${this.apiUrl}/${id}`, employee, httpOptions);
  }
}
