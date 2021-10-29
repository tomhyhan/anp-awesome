import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  employee: any;
  //  Change this to a username later on
  constructor(private authService: AuthService) {
    this.authService.employee.subscribe(
      (employee) => (this.employee = employee)
    );
  }
  logout() {
    this.authService.logout();
  }
  ngOnInit(): void {}
}
