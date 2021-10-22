import { Injectable } from '@angular/core';
import { Userdata } from './../model/userInfo';
import { HttpClientHelper } from 'src/network/httpClient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL: string = '/auth/login';

  constructor(private httpClient: HttpClientHelper, private http: HttpClient) {}

  login(userData: Userdata) {
    console.log(userData);

    return this.http.post(
      'http://localhost:8080/auth/login',
      userData,
      { withCredentials:true}
    );
    // return this.httpClient.post(this.apiURL, userData, {});
  }
}
