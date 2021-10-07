import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/master/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe((employees) => {
      this.employees = employees;
    });
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
        const newEmployees = this.employees.map((employee: any) => {
          if (employee.id === updated[0].id) {
            return updated[0];
          }
          return employee;
        });
        this.employees = newEmployees;
      });
  }
}
