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
  apiUrl = 'http://localhost:8080/master/spare_part';
  url = '/master/spare_part';
  constructor(private http: HttpClient, private httpHelper: HttpClientHelper) {}

  getSparePart(filter: any, pageIndex: any, pageSize: any) {
    const queryString = `sparePartFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    return this.httpHelper.get(this.url, queryString, {});
  }

  addSparePart(sparePart: any) {
    return this.http.post(this.apiUrl, sparePart, httpOptions);
  }

  updateSparePart(sparePart: any, id: any) {
    return this.http.put(`${this.apiUrl}/${id}`, sparePart, httpOptions);
  }

  getSparePartCount() {
    return this.http.get(`${this.apiUrl}/pages`, httpOptions);
  }

  getSparePartFilterCount(filter: any) {
    return this.http.get(
      `${this.apiUrl}/filterPages?sparePartFilter=${filter}`,
      httpOptions
    );
  }
}
