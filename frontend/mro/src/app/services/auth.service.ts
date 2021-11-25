import { Injectable } from '@angular/core';
import { Userdata } from './../model/userInfo';
import { HttpClientHelper } from 'src/network/httpClient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { AuthData } from '../model/auth';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

type Employee = AuthData | null;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL: string = '/auth/login';
  private employeeSubject: BehaviorSubject<Employee>;
  public employee: Observable<Employee>;

  constructor(private router: Router, private http: HttpClient) {
    this.employeeSubject = new BehaviorSubject<Employee>(null);
    this.employee = this.employeeSubject.asObservable();
  }

  get employeeValue() {
    return this.employeeSubject.value;
  }

  login(userData: Userdata) {
    console.log(userData);

    return this.http
      .post('http://localhost:8080/auth/login', userData, {
        withCredentials: true,
      })
      .pipe(
        map((employee: any) => {
          this.employeeSubject.next(employee);

          return employee;
        })
      );
    // return this.httpClient.post(this.apiURL, userData, {});
  }

  me() {
    return this.http
      .post('http://localhost:8080/auth/me', {}, { withCredentials: true })
      .pipe(
        map((employee: any) => {
          this.employeeSubject.next(employee);
          return employee;
        })
      );
  }

  logout() {
    this.http
      .post(`${environment.apiURL}/auth/logout`, {}, { withCredentials: true })
      .subscribe();
    this.employeeSubject.next(null);
    this.router.navigate(['/']);
  }
}
