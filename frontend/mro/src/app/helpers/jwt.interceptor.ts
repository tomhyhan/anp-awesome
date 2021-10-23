import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authservice: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const employee = this.authservice.employeeValue;
    const isLoggedIn = employee && employee.token;
    const isApiURL = request.url.startsWith(environment.apiURL);
    console.log('intercepting...');
    console.log(employee);

    console.log(isLoggedIn);
    console.log(isApiURL);

    if (isLoggedIn && isApiURL) {
      console.log('employee Data');
      console.log(employee);
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${employee.token}` },
      });
    }

    return next.handle(request);
  }
}
