import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emp_code: [''],
      password: [''],
    });

    const errorHandlers = ErrorHandlers.linkForm(this.loginForm);
  }

  onSubmit() {
    const userData = {
      ...this.loginForm.value,
    };

    if (this.loginForm.valid) {
      this.authService
        .login(userData)
        .pipe(first())
        .subscribe({
          next: () => {
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
