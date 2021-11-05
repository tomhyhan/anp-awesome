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
  url = 'http://localhost:8080/purchase/file';

  constructor(private httpHelper: HttpClientHelper,private http: HttpClient) {}


  postfiles(files:any) {
    // console.log(filter);
    return this.http.post(this.url, files, httpOptions);
  }

}
