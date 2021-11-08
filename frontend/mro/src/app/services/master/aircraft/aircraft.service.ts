import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientHelper } from 'src/network/httpClient';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class aircraftService {
  url = '/master/aircraft';

  constructor(private httpHelper: HttpClientHelper) {}

  getaircraft(filter: any, pageIndex: any, pageSize: any) {
    console.log(filter);
    const queryString = `aircraftFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}`
    return this.httpHelper.get(this.url, queryString, {});
  }

  addaircraft(aircraft: any) {
    return this.httpHelper.post(this.url, aircraft, httpOptions);
  }

  updateaircraft(aircraft: any, id: any) {
    return this.httpHelper.put(`${this.url}/${id}`, aircraft, httpOptions);
  }

  getaircraftCount() {
    const queryString = '';
    return this.httpHelper.get(`${this.url}/pages`, queryString,{});
  }

  getaircraftFilterCount(filter: any) {
    const queryString=`aircraftFilter=${filter}`
    return this.httpHelper.get(`${this.url}/filterPages`, queryString,{});
  }
}
