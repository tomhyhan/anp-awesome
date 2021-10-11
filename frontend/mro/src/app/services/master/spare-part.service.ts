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
export class SparePartService {
  apiUrl = 'http://localhost:8080/master/spare_part';

  constructor(private http: HttpClient) {}

  getSparePart() {
    return this.http.get(this.apiUrl);
  }

  addSparePart(sparePart: any) {
    return this.http.post(this.apiUrl, sparePart, httpOptions);
  }

  updateSparePart(sparePart: any, id: any) {
    return this.http.put(`${this.apiUrl}/${id}`, sparePart, httpOptions);
  }
}
