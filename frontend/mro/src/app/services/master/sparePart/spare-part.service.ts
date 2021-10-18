import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
export class SparePartService {
  url = '/master/spare_part';

  constructor(private httpHelper: HttpClientHelper) {}

  getSparePart(filter: any, pageIndex: any, pageSize: any) {
    const queryString = `sparePartFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    return this.httpHelper.get(this.url, queryString, {});
  }

  addSparePart(sparePart: any) {
    // return this.http.post(this.apiUrl, sparePart, httpOptions);
    return this.httpHelper.post(this.url, sparePart, {});
  }

  updateSparePart(sparePart: any, id: any) {
    return this.httpHelper.put(`${this.url}/${id}`, sparePart, {});
  }

  getSparePartCount() {
    // return this.http.get(`${this.apiUrl}/pages`, httpOptions);
    const queryString = '';
    return this.httpHelper.get(`${this.url}/pages`, queryString, {});
  }

  getSparePartFilterCount(filter: any) {
    const queryString = `sparePartFilter=${filter}`;
    return this.httpHelper.get(`${this.url}/filterPages`, queryString, {});
  }
}
