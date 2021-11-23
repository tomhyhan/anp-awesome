import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientHelper } from 'src/network/httpClient';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  private url = '/purchase/detail';
  private detailSubject: BehaviorSubject<any>;
  public detail: Observable<any>;

  constructor(private httpHelper: HttpClientHelper) {
    this.detailSubject = new BehaviorSubject<any>(null);
    this.detail = this.detailSubject.asObservable();
  }

  getAllDetail() {
    const queryString = '';
    return this.httpHelper.get(`${this.url}/all`, queryString, {}).pipe(
      map((detail) => {
        this.detailSubject.next(detail);
        return detail;
      })
    );
  }

  addDetail(detail) {
    return this.httpHelper.post(this.url, detail, {}).pipe(
      map((detail) => {
        this.getAllDetail().subscribe();
        return detail;
      })
    );
  }
}
