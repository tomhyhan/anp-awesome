import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientHelper } from 'src/network/httpClient';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UomService {
  apiUrl = '/master/uom';
  private uomSubject: BehaviorSubject<any>;
  public uom: Observable<any>;

  constructor(private http: HttpClient, private httpHelper: HttpClientHelper) {
    this.uomSubject = new BehaviorSubject<any>(null);
    this.uom = this.uomSubject.asObservable();
  }

  get uomValue() {
    return this.uomSubject.value;
  }

  getUomPart(filter: any, pageIndex: any, pageSize: any) {
//    return this.http.get(
//      `${this.apiUrl}?uomPartFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}$`
//    );
  const queryString = `uomPartFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}$`;
  return this.httpHelper.get(this.apiUrl, queryString, {});
  }
  getUomPartforservice() {
//    return this.http.get(`${this.apiUrl}/uomservices`);
  const queryString = '';
  return this.httpHelper.get(`${this.apiUrl}/uomservices`, queryString, {}).pipe(
    map((uoms: any) => {
      return uoms;
    })
  );
  }

  addUomPart(uom: any) {
//    return this.http.post(this.apiUrl, uom, httpOptions);
  console.log('UOM service');
  console.log(uom);

  return this.httpHelper.post(this.apiUrl, uom, {}).pipe(
    map((uom: any) => {
      this.getUomPartforservice().subscribe(() => {
        console.log('subscribing...');
      });
      return uom;
    })
  );
  }

  updateUomPart(uoms: any, id: any) {
//    return this.http.put(`${this.apiUrl}/${id}`, uoms, httpOptions);
  return this.httpHelper.put(`${this.apiUrl}/${id}`, uoms, httpOptions);
  }

  getUomCount() {
//    return this.http.get(`${this.apiUrl}/pages`, httpOptions);
  const queryString = '';
  return this.httpHelper.get(`${this.apiUrl}/pages`, queryString, {});
  }

  getUomFilterCount(filter: any) {
//    return this.http.get(
//      `${this.apiUrl}/filterPages?uomPartFilter=${filter}`,
//      httpOptions
//    );
  const queryString = `uomPartFilter=${filter}`;
  return this.httpHelper.get(`${this.apiUrl}/filterPages?`, queryString, {});
  }
}
