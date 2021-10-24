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

    if (isLoggedIn && isApiURL) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${employee.token}` },
      });
    }

    return next.handle(request);
  }
}
