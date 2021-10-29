import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType } from 'src/app/model/alert';
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private subject = new Subject<Alert>();
  private id = 'alert';

  // change our subject into Observable
  //  id = this.id
  OnAlert(): Observable<Alert> {
    return this.subject.asObservable();
    // .pipe(filter((alert) => alert && alert.id === id));
  }
  // this one gets call
  success(message: string, options?: Partial<Alert>) {
    this.alert(new Alert({ ...options, type: 'success', message }));
  }
  // set id if ther is an id
  alert(alert: Alert) {
    alert.id = alert.id || this.id;
    this.subject.next(alert);
  }

  clear(id = this.id) {
    this.subject.next(new Alert({ id }));
  }
}
