import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getEmployee(filter: any, pageIndex: any, pageSize: any) {
    return this.http.get(
      `${this.apiUrl}?employeeFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}$`
      
    );
  }

  addEmployee(employee: any) {
    return this.http.post(this.apiUrl, employee, httpOptions);
  }

  updateEmployee(employee: any, id: any) {
    return this.http.put(`${this.apiUrl}/${id}`, employee, httpOptions);
  }

  getEmployeeCount() {
    return this.http.get(`${this.apiUrl}/pages`, httpOptions);
  }

  getEmployeeFilterCount(filter: any) {
    return this.http.get(
      `${this.apiUrl}/filterPages?employeeFilter=${filter}`, httpOptions
    );
  }
}
