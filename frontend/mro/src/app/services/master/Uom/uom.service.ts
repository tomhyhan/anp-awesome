import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UomPart, UomPartFilter } from 'src/app/model/uom';
import { map, finalize } from 'rxjs/operators';
import { HttpClientHelper } from 'src/network/httpClient'

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
  public uompartSubject: BehaviorSubject<UomPart>;
  public uompart: Observable<UomPart>;

  constructor(private http: HttpClientHelper) {
    this.uompartSubject = new BehaviorSubject<UomPart>(null);
    this.uompart = this.uompartSubject.asObservable();
  }
 
  get uomPartValue() {
    return this.uompartSubject.value;
  }

  getUomPart(filter: UomPartFilter | string, pageIndex: number, pageSize: number) {
    const queryString = `UomPartFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    return this.http.get(this.apiUrl, queryString, {});
  }

  getAllUom(){
     const queryString = '';
    return this.http.get(`${this.apiUrl}/all`, queryString, {}).pipe(
      map((uomPart: any) => {
        this.uompartSubject.next(uomPart);
        return uomPart;
      })
    );
  }

  addUomPart(uom: UomPart) {
    return this.http.post(this.apiUrl, uom, {}).pipe(
      map((uom: any) => {
        this.getAllUom.subscribe();
        return uom;
      })
    );
  }
  // return this.http.post(this.apiUrl, uom, httpOptions);
  //} 

  updateUomPart(uoms: UomPart, id: string) {
    return this.http.put(`${this.apiUrl}/${id}`, uoms, httpOptions);
  }

  getUomCount() {
    const queryString = '';
    return this.http.get(`${this.apiUrl}/pages`, queryString, {});
  }

  getUomFilterCount(filter: UomPartFilter) {
    const queryString = `UomPartFilter=${filter}`;
    return this.http.get(`${this.apiUrl}/filterPages`, queryString, {}
    );
  }
}
