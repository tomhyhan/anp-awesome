import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SparePart } from 'src/app/model/sparePart';

const baseURL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root',
})
export class HttpClientHelper {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: ${error.message}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(`${error.message}`);
  }

  public get(url: string, params: string, headers: any) {
    const headersOption = new HttpHeaders({
      ...headers,
      'Content-Type': 'application/json',
    });

    const paramsOptions = new HttpParams({
      fromString: params,
    });

    const options = {
      params: paramsOptions,
      headers: headersOption,
      withCredentials: true,
    };
    return this.http
      .get<any[]>(`${baseURL}${url}`, options)
      .pipe(catchError(this.handleError));
  }

  post(url: string, body: {}, headers: any) {
    const headersOption = new HttpHeaders({
      ...headers,
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headersOption,
      withCredentials: true,
    };

    return this.http
      .post<any[]>(`${baseURL}${url}`, body, options)
      .pipe(catchError(this.handleError));
  }

  put(url: string, body: {}, headers: any) {
    const headersOption = new HttpHeaders({
      ...headers,
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headersOption,
      withCredentials: true,
    };
    return this.http
      .put<any[]>(`${baseURL}${url}`, body, options)
      .pipe(catchError(this.handleError));
  }

  delete(url: string, payload: {}, {}) {}
}
