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
export class UomService {
  apiUrl = 'http://localhost:8080/master/uom';

  constructor(private http: HttpClient) {}

  getUomPart(filter: any, pageIndex: any, pageSize: any) {
    return this.http.get(
      `${this.apiUrl}?uomPartFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}$`
    );
  }
  getUomPartforservice() {
    return this.http.get(`${this.apiUrl}/uomservices`);
  }

  addUomPart(uom: any) {
    return this.http.post(this.apiUrl, uom, httpOptions);
  }

  updateUomPart(uom: any, id: any) {
    return this.http.put(`${this.apiUrl}/${id}`, uom, httpOptions);
  }

  getUomCount() {
    return this.http.get(`${this.apiUrl}/pages`, httpOptions);
  }

  getUomFilterCount(filter: any) {
    return this.http.get(
      `${this.apiUrl}/filterPages?uomPartFilter=${filter}`,
      httpOptions
    );
  }
}
