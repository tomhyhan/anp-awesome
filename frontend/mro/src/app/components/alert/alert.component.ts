import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { Alert, AlertType } from 'src/app/model/alert';
import { AlertService } from 'src/app/services/alert/alert.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() id = 'alert';

  alerts: Alert[] = [];
  alertSubscription: Subscription;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertSubscription = this.alertService.OnAlert().subscribe((alert) => {
      if (!alert.message) return;
      this.alerts.push(alert);

      if (alert.autoClose) {
        setTimeout(() => this.removeAlert(alert), 3000);
      }
    });
  }

  ngOnDestory() {
    this.alertSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    if (!this.alerts.includes(alert)) return;
    this.alerts = this.alerts.filter((al) => al !== alert);
  }

  cssClasses(alert: Alert) {
    if (!alert) return;
    const classes = ['alert', 'alert-dismissable'];

    const alertTypeClass = {
      success: 'alert alert-success',
      error: 'alert alert-danger',
      info: 'alert alert-info',
      warning: 'alert alert-warning',
    };

    classes.push(alertTypeClass[alert.type]);

    return classes.join(' ');
  }
}
