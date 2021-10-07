import { EmployeeService } from 'src/app/services/master/employee.service';
import {ViewChild, Component, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements AfterViewInit {
  
  displayedColumns: string[] = ["emp_id",	"emp_name", "emp_code", "site_master_id",	
                                "contact", "address", "designation", "department",
                                "remarks", "created_by", "created_date", "edit"];
  employees: any = [];
  @ViewChild(MatPaginator, {static: true}) set matPaginator(paginator: MatPaginator) {
    this.employees.paginator = paginator;}

  constructor(private employeeService: EmployeeService) {}

  ngAfterViewInit(): void {
    this.employeeService.getEmployee().subscribe(employees => this.employees = employees);
  }

  updateEmployee(Employee: any) {
    this.employeeService
      .updateEmployee(Employee.employee, Employee.id)
      .subscribe((updated: any) => {
        const newEmployees = this.employees.map((Employee: any) => {
          if (Employee.id === updated[0].id) {
            return updated[0];
          }
          return Employee;
        });
        this.employees = newEmployees;
      });
  }
}