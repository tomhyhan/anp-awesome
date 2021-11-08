import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClientHelper } from 'src/network/httpClient';
import { map, finalize } from 'rxjs/operators';

import { SparePart, SparePartFilter } from 'src/app/model/sparePart';

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
  private sparepartSubject: BehaviorSubject<SparePart>;
  public sparepart: Observable<SparePart>;

  constructor(private httpHelper: HttpClientHelper) {
    this.sparepartSubject = new BehaviorSubject<SparePart>(null);
    this.sparepart = this.sparepartSubject.asObservable();
  }

  get sparePartValue() {
    return this.sparepartSubject.value;
  }

  getAllSparePart() {
    const queryString = '';
    return this.httpHelper.get(`${this.url}/all`, queryString, {}).pipe(
      map((sparePart: any) => {
        this.sparepartSubject.next(sparePart);
        return sparePart;
      })
    );
  }

  getSparePart(
    filter: SparePartFilter | string,
    pageIndex: number,
    pageSize: number
  ) {
    const queryString = `sparePartFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    return this.httpHelper.get(this.url, queryString, {});
  }

  addSparePart(sparePart: SparePart) {
    // return this.http.post(this.apiUrl, sparePart, httpOptions);
    return this.httpHelper.post(this.url, sparePart, {}).pipe(
      map((sparePart: any) => {
        this.getAllSparePart().subscribe();
        return sparePart;
      })
    );
  }

  updateSparePart(sparePart: SparePart, id: string) {
    return this.httpHelper.put(`${this.url}/${id}`, sparePart, {});
  }

  getSparePartCount() {
    // return this.http.get(`${this.apiUrl}/pages`, httpOptions);
    const queryString = '';
    return this.httpHelper.get(`${this.url}/pages`, queryString, {});
  }

  getSparePartFilterCount(filter: SparePartFilter | string) {
    const queryString = `sparePartFilter=${filter}`;
    return this.httpHelper.get(`${this.url}/filterPages`, queryString, {});
  }
}
