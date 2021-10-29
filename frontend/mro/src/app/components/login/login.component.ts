import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorhandlers: ErrorHandlers;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });

    const errorHandlers = ErrorHandlers.linkForm(this.loginForm);
  }

  onSubmit() {
    const userData = {
      ...this.loginForm.value,
    };
    this.alertService.clear();

    if (this.loginForm.valid) {
      this.authService
        .login(userData)
        .pipe(first())
        .subscribe({
          next: () => {
            this.alertService.success('Logged in Success!', {
              autoClose: true,
            });
            this.router.navigateByUrl('/');
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      this.errorhandlers.showErrors();
    }
  }
}
