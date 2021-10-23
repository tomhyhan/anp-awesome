import { Injectable } from '@angular/core';
import { Userdata } from './../model/userInfo';
import { HttpClientHelper } from 'src/network/httpClient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

// NEED TO DECIDE THE TYPE OF EMPLOYEE AND NOT USE ANY

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL: string = '/auth/login';
  private employeeSubject: BehaviorSubject<any>;
  public employee: Observable<any>;

  constructor(private httpClient: HttpClientHelper, private http: HttpClient) {
    this.employeeSubject = new BehaviorSubject<any>(null);
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
        map((employee) => {
          this.employeeSubject.next(employee);
          console.log('employee data');
          console.log(this.employeeSubject.value);

          return employee;
        })
      );
    // return this.httpClient.post(this.apiURL, userData, {});
  }
}
