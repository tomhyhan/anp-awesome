import { ViewChild, Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/master/employees/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = [
    'emp_id',
    'emp_name',
    'emp_code',
    'site_master_id',
    'contact',
    'address',
    'designation',
    'department',
    'remarks',
    'created_by',
    'created_date',
    'edit',
  ];
  employees: any = [];
  employeeCount: any;
  filter = JSON.stringify('');
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployeeCount().subscribe((count) => {
      this.employeeCount = count;
    });
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() =>
          this.employeeService
            .getEmployee(
              this.filter,
              this.paginator.pageIndex,
              this.paginator.pageSize
            )
            .subscribe((employees) => {
              this.employees = employees;
            })
        )
      )
      .subscribe(() => {});
  }

  createTask(employee: any) {
    this.employeeService.addEmployee(employee).subscribe((employee: any) => {
      this.employeeService.getEmployeeCount().subscribe((count) => {
        this.employeeCount = count;
      });
      if (this.employees.length < this.paginator.pageSize) {
        this.employees = [...this.employees, employee[0]];
      }
    });
  }

  updateEmployee(employee: any) {
    this.employeeService
      .updateEmployee(employee.employee, employee.id)
      .subscribe((updated: any) => {
        const newEmployees = this.employees.map((employee: any) => {
          if (employee.emp_id === updated[0].emp_id) {
            return updated[0];
          }
          return employee;
        });
        console.log(newEmployees);

        this.employees = newEmployees;
      });
  }

  searchEmployee(filter: any) {
    this.employeeService.getEmployeeFilterCount(filter).subscribe((count) => {
      this.employeeCount = count;
    });
    this.filter = filter;
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() =>
          this.employeeService
            .getEmployee(
              this.filter,
              this.paginator.pageIndex,
              this.paginator.pageSize
            )
            .subscribe((employees) => {
              this.employees = employees;
            })
        )
      )
      .subscribe(() => {});
  }
}
