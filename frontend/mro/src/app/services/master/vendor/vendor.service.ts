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
export class VendorService {
  apiUrl = 'http://localhost:8080/master/vendor';

  constructor(private http: HttpClient) {}

  getVendor(filter: any, pageIndex: any, pageSize: any) {
    return this.http.get(`${this.apiUrl}?vendorFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}$`);
  }

  addVendor( vendor: any) {
    return this.http.post(this.apiUrl, vendor, httpOptions);
  }

  updateVendor( vendor: any, id: any) {
    return this.http.put(`${this.apiUrl}/${id}`, vendor, httpOptions);
  }

  
  getVendorCount() {
    return this.http.get(`${this.apiUrl}/pages`, httpOptions);
  }

  getVendorFilterCount(filter: any) {
    return this.http.get(
      `${this.apiUrl}/filterPages?vendorFilter=${filter}`, httpOptions
    );
  }
}
