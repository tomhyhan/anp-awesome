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
export class projectService {
  apiUrl = 'http://localhost:8080/master/project';

  constructor(private http: HttpClient) {}



  getproject(filter: any, pageIndex: any, pageSize: any) {
    console.log(pageSize);
    return this.http.get(`${this.apiUrl}?projectFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}$`);
  }

  addproject( project: any) {
    return this.http.post(this.apiUrl, project, httpOptions);
  }

  updateproject( project: any, id: any) {
    return this.http.put(`${this.apiUrl}/${id}`, project, httpOptions);
  }

  getprojectCount() {
    return this.http.get(`${this.apiUrl}/pages`, httpOptions);
  }

  getprojectFilterCount(filter: any) {
    return this.http.get(
      `${this.apiUrl}/filterPages?projectFilter=${filter}`,
      httpOptions
    );
  }
}
