import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientHelper } from 'src/network/httpClient';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  private url = '/purchase/detail';
  constructor(private httpHelper: HttpClientHelper) {}

  addDetail(detail) {
    console.log(detail);
    return this.httpHelper.post(this.url, detail, {}).pipe(
      map((detail) => {
        return detail;
      })
    );
  }
}
