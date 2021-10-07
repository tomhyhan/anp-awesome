import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/master/employees-main/employee/employee.component';
import { EmployeesComponent } from './components/master/employees-main/employees/employees.component';
import { AddEmployeeComponent } from './components/master/employees-main/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/master/employees-main/edit-employee/edit-employee.component';
import { EmployeeTableComponent } from './components/master/employees-main/employee-table/employee-table.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeTableComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
