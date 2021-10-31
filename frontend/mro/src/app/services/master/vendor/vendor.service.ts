import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientHelper } from 'src/network/httpClient';
import { query } from '@angular/animations';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  apiUrl = '/master/vendor';

  constructor(private httpHelper: HttpClientHelper) {}

  getVendor(filter: any, pageIndex: any, pageSize: any) {
    const queryString = `vendorFilter=&pageIndex=${pageIndex}&pageSize=${pageSize}`
    return this.httpHelper.get(this.apiUrl, queryString, {});

  }

  addVendor( vendor: any) {
    return this.httpHelper.post(this.apiUrl, vendor, httpOptions);
  }

  updateVendor( vendor: any, id: any) {
    return this.httpHelper.put(`${this.apiUrl}/${id}`, vendor, httpOptions);
  }


  
  getVendorCount() {
    const queryString='';
    return this.httpHelper.get(`${this.apiUrl}/pages`, queryString,{});
  }

  getVendorFilterCount(filter: any) {
    const queryString=`vendorFilter=${filter}`
    return this.httpHelper.get(`${this.apiUrl}/filterPages`, queryString,{});
  }

}
