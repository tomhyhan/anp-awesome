import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  @Input() employee: any;
  @Output() onUpdateEmployee = new EventEmitter();
  employeeForm: FormGroup | any;
  id: any;
  errorhandlers: any;
  currentEmployee: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.authService.employee.subscribe(
      (employee) => (this.currentEmployee = employee)
    );
  }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      emp_name: ['', Validators.required],
      emp_code: ['', Validators.required],
      site_master_id: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      remarks: '',
    });
    this.updateEmployees();
    this.errorhandlers = new ErrorHandlers(this.employeeForm);
  }

  updateEmployees() {
    this.employeeForm.patchValue({
      emp_name: this.employee.emp_name,
      emp_code: this.employee.emp_code,
      site_master_id: this.employee.site_master_id,
      contact: this.employee.contact,
      address: this.employee.address,
      designation: this.employee.designation,
      department: this.employee.department,
      remarks: this.employee.remarks,
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const updateEmployee = {
        employee: {
          emp_name: this.employeeForm.value.emp_name,
          emp_code: this.employeeForm.value.emp_code,
          site_master_id: this.employeeForm.value.site_master_id,
          contact: this.employeeForm.value.contact,
          address: this.employeeForm.value.address,
          designation: this.employeeForm.value.designation,
          department: this.employeeForm.value.department,
          remarks: this.employeeForm.value.remarks,
          modified_by: this.currentEmployee.emp_id,
        },
      };
      this.onUpdateEmployee.emit({
        employee: updateEmployee,
        id: this.employee.emp_id,
      });
    } else {
      this.errorhandlers.showErrors();
    }
  }
}
