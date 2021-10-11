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

  getUomPart() {
    return this.http.get(this.apiUrl);
  }

  addUomPart(uomPart: any) {
    return this.http.post(this.apiUrl, uomPart, httpOptions);
  }

  updateUomPart(uomPart: any, id: any) {
    return this.http.put(`${this.apiUrl}/${id}`, uomPart, httpOptions);
  }
}
