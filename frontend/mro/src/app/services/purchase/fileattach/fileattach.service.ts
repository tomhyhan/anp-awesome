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
export class fileattachService {
  url = '/purchase/file';

  constructor(private httpHelper: HttpClientHelper) {}


  postfiles(files:any) {
    console.log(files);
    return this.httpHelper.post(this.url, files, httpOptions);
  }

}
