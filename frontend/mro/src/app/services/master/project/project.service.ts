import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClientHelper } from 'src/network/httpClient';
import { map } from 'rxjs/operators';

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
  private projectSubject: BehaviorSubject<any>;
  public project: Observable<any>;

  constructor(private httpHelper: HttpClientHelper) {
    this.projectSubject = new BehaviorSubject(null);
    this.project = this.projectSubject.asObservable();
  }
  getAllproject() {
    const queryString = '';
    return this.httpHelper.get(`${this.url}/all`, queryString, {}).pipe(
      map((project) => {
        this.projectSubject.next(project);
        return project;
      })
    );
  }
  getproject(filter, pageIndex, pageSize) {
    const queryString = `projectFilter=${filter}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    return this.httpHelper.get(this.url, queryString, {});
  }

  addproject(project) {
    return this.httpHelper.post(this.url, project, httpOptions);
  }

  updateproject(project, id) {
    return this.httpHelper.put(`${this.url}/${id}`, project, httpOptions);
  }

  getprojectCount() {
    const queryString = '';
    return this.httpHelper.get(`${this.url}/pages`, queryString, {});
  }

  getprojectFilterCount(filter) {
    const queryString = `projectFilter=${filter}`;
    return this.httpHelper.get(`${this.url}/filterPages`, queryString, {});
  }
}
