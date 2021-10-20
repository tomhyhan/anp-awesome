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

  getaircraft(filter: any, pageIndex: any, pageSize: any) {
    console.log(filter);
    return this.http.get(
      `${this.apiUrl}?aircraftFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}$`
      
    );
  }

  addaircraft(aircraft: any) {
    return this.http.post(this.apiUrl, aircraft, httpOptions);
  }

  updateaircraft(aircraft: any, id: any) {
    return this.http.put(`${this.apiUrl}/${id}`, aircraft, httpOptions);
  }

  getaircraftCount() {
    return this.http.get(`${this.apiUrl}/pages`, httpOptions);
  }

  getaircraftFilterCount(filter: any) {
    return this.http.get(
      `${this.apiUrl}/filterPages?aircraftFilter=${filter}`, httpOptions
    );
  }
}
