import { ViewChild, Component, AfterViewInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/master/employees/employee.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements AfterViewInit {
  
  displayedColumns: string[] = ["emp_id",	"emp_name", "emp_code", "site_master_id",	
                                "contact", "address", "designation", "department",
                                "remarks", "created_by", "created_date", "edit"];
  employees: any = [];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private employeeService: EmployeeService) {}

  ngAfterViewInit(): void {
    this.employeeService.getEmployee().subscribe(employees => this.employees = employees);
    this.employees.paginator = this.paginator;
  }

  createTask(employee: any) {
    this.employeeService
      .addEmployee(employee)
      .subscribe((employee: any) => {
        this.employees = [...this.employees, employee[0]];
      });
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

