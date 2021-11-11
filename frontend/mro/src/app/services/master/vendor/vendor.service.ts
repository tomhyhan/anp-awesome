import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClientHelper } from 'src/network/httpClient';
import { query } from '@angular/animations';
import { map, finalize } from 'rxjs/operators';

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
  private vendorSubject: BehaviorSubject<any>;
  public vendor: Observable<any>;

  constructor(private httpHelper: HttpClientHelper) {
    this.vendorSubject = new BehaviorSubject<any>(null);
    this.vendor = this.vendorSubject.asObservable();
  }

  getAllVendor() {
    const queryString = ``;
    return this.httpHelper.get(`${this.apiUrl}/all`, queryString, {}).pipe(
      map((vendor: any) => {
        this.vendorSubject.next(vendor);
        return vendor;
      })
    );
  }

  getVendor(filter: any, pageIndex: any, pageSize: any) {
    const queryString = `vendorFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    return this.httpHelper.get(this.apiUrl, queryString, {});
  }

  addVendor(vendor: any) {
    return this.httpHelper.post(this.apiUrl, vendor, httpOptions).pipe(
      map((vendor: any) => {
        this.getAllVendor().subscribe();
        return vendor;
      })
    );
  }

  updateVendor(vendor: any, id: any) {
    return this.httpHelper
      .put(`${this.apiUrl}/${id}`, vendor, httpOptions)
      .pipe(
        map((vendor: any) => {
          this.getAllVendor().subscribe();
          return vendor;
        })
      );
  }

  getVendorCount() {
    const queryString = '';
    return this.httpHelper.get(`${this.apiUrl}/pages`, queryString, {});
  }

  getVendorFilterCount(filter: any) {
    const queryString = `vendorFilter=${filter}`;
    return this.httpHelper.get(`${this.apiUrl}/filterPages`, queryString, {});
  }
}
