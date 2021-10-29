import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientHelper } from 'src/network/httpClient';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class projectService {
  url = '/master/project';

  constructor(private httpHelper: HttpClientHelper) {}

  getproject(filter: any, pageIndex: any, pageSize: any) {
    const queryString = `projectFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}`
    return this.httpHelper.get(this.url, queryString, {});
  }

  addproject( project: any) {
    return this.httpHelper.post(this.url, project, httpOptions);
  }

  updateproject( project: any, id: any) {
    return this.httpHelper.put(`${this.url}/${id}`, project, httpOptions);
  }

  getprojectCount() {
    const queryString = '';
    return this.httpHelper.get(`${this.url}/pages`, queryString,{});
  }

  getprojectFilterCount(filter: any) {
    const queryString=`projectFilter=${filter}`
    return this.httpHelper.get(`${this.url}/filterPages`, queryString,{});
  }
}
