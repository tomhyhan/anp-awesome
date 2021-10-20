import { FormGroup } from '@angular/forms';
export class ErrorHandlers {
  form: any;

  constructor(form: FormGroup) {
    this.form = form;
  }

  static linkForm(form: FormGroup) {
    return new ErrorHandlers(form);
  }

  isFieldValid(field: any) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  showErrors() {
    Object.keys(this.form.controls).forEach((field) => {
      const control = this.form.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
