import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientHelper } from 'src/network/httpClient';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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
  private employeeSubject: BehaviorSubject<any>;
  public employee: Observable<any>;

  constructor(private http: HttpClient, private httpHelper: HttpClientHelper) {
    this.employeeSubject = new BehaviorSubject<any>(null);
    this.employee = this.employeeSubject.asObservable();
  }

  get employeeValue() {
    return this.employeeSubject.value;
  }

  getAllEmployee() {
    const queryString = '';
    return this.httpHelper.get(`${this.apiUrl}/all`, queryString, {}).pipe(
      map((employees: any) => {
        this.employeeSubject.next(employees);
        return employees;
      })
    );
  }

  getEmployee(filter: any, pageIndex: any, pageSize: any) {
    const queryString = `employeeFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}$`;
    return this.httpHelper.get(this.apiUrl, queryString, {});
  }

  addEmployee(employee: any) {
    console.log('Emp service');
    console.log(employee);

    return this.httpHelper.post(this.apiUrl, employee, {}).pipe(
      map((employee: any) => {
        this.getAllEmployee().subscribe(() => {
          console.log('subscribing...');
        });
        return employee;
      })
    );
  }

  updateEmployee(employee: any, id: any) {
    return this.httpHelper.put(`${this.apiUrl}/${id}`, employee, httpOptions);
  }

  getEmployeeCount() {
    const queryString = '';
    return this.httpHelper.get(`${this.apiUrl}/pages`, queryString, {});
  }

  getEmployeeFilterCount(filter: any) {
    const queryString = `employeeFilter=${filter}`;
    return this.httpHelper.get(`${this.apiUrl}/filterPages?`, queryString, {});
  }
}
