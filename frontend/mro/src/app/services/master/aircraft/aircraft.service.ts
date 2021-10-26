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
export class aircraftService {
  apiUrl = 'http://localhost:8080/master/aircraft';

  constructor(private http: HttpClient) {}

  getaircraft() {
    return this.http.get(this.apiUrl);
  }

  addaircraft(aircraft: any) {
    return this.http.post(this.apiUrl, aircraft, httpOptions);
  }

  updateaircraft(aircraft: any, id: any) {
    return this.http.put(`${this.apiUrl}/${id}`, aircraft, httpOptions);
  }
}
