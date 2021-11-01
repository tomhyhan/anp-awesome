import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientHelper } from 'src/network/httpClient';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = '/master/employee';

  constructor(private http: HttpClient, private httpHelper: HttpClientHelper) {}

  getEmployee(filter: any, pageIndex: any, pageSize: any) {
    const queryString = `employeeFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}$`
    return this.httpHelper.get(this.apiUrl, queryString, {});
  }

  addEmployee(employee: any) {
    return this.httpHelper.post(this.apiUrl, employee, httpOptions);
  }

  updateEmployee(employee: any, id: any) {
    return this.httpHelper.put(`${this.apiUrl}/${id}`, employee, httpOptions);
  }

  getEmployeeCount() {
    const queryString = ''
    return this.httpHelper.get(`${this.apiUrl}/pages`, queryString, {});
  }

  getEmployeeFilterCount(filter: any) {
    const queryString = `employeeFilter=${filter}`
    return this.httpHelper.get(
      `${this.apiUrl}/filterPages?`, queryString,{});
  }
}
