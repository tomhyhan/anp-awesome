export class Alert {
  id: string;
  type: AlertType;
  message: string;
  autoClose: boolean;

  constructor(alertInfo: Partial<Alert>) {
    Object.assign(this, alertInfo);
  }
}

export type AlertType = 'success' | 'error' | 'info' | 'warning';
