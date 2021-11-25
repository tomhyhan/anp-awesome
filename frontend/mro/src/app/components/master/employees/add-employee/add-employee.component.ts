import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  @Output() onCreateEmployee = new EventEmitter();
  addEmployeeForm: FormGroup | any;
  errorhandlers: any;
  employee: any;
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.authService.employee.subscribe((employee) => (this.user = employee));
  }
  //  Validators.pattern(`^[0-9]+`) NOT WORKING ???
  ngOnInit(): void {
    this.addEmployeeForm = this.formBuilder.group({
      emp_name: ['', Validators.required],
      emp_code: ['', Validators.required],
      site_master_id: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      remarks: [''],
      created_by: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.errorhandlers = new ErrorHandlers(this.addEmployeeForm);
  }

  onSubmit() {
    if (this.addEmployeeForm.valid) {
      const addEmployee = {
        employee: {
          emp_name: this.addEmployeeForm.value.emp_name,
          emp_code: this.addEmployeeForm.value.emp_code,
          site_master_id: this.addEmployeeForm.value.site_master_id,
          contact: this.addEmployeeForm.value.contact,
          address: this.addEmployeeForm.value.address,
          designation: this.addEmployeeForm.value.designation,
          department: this.addEmployeeForm.value.department,
          remarks: this.addEmployeeForm.value.remarks,
          created_by: this.user.emp_id,
          password: this.addEmployeeForm.value.password,
          username: this.addEmployeeForm.value.username,
        },
      };
      this.onCreateEmployee.emit(addEmployee);
      this.addEmployeeForm.reset();
    } else {
      this.errorhandlers.showErrors();
    }
  }
}
