import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  remarks: any;
  createdBy: any;
  createdDate: any;
  @Output() onCreateEmployee = new EventEmitter();
  addEmployeeForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

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
      created_date: [''],
    });
  }

  onSubmit() {
    const employee = {
      employee: {
        emp_name: this.addEmployeeForm.value.emp_name,
        emp_code: this.addEmployeeForm.value.emp_code,
        site_master_id: parseInt(this.addEmployeeForm.value.site_master_id),
        contact: this.addEmployeeForm.value.contact,
        address: this.addEmployeeForm.value.address,
        designation: this.addEmployeeForm.value.designation,
        department: this.addEmployeeForm.value.department,
        remarks: this.addEmployeeForm.value.remarks,
        created_by: 'Inggy',
        created_date: new Date(),
      },
    };
    this.onCreateEmployee.emit(employee);
  }

  get empName() {
    return this.addEmployeeForm.get('emp_name');
  }

  get empCode() {
    return this.addEmployeeForm.get('emp_code');
  }

  get siteMasterId() {
    return this.addEmployeeForm.get('site_master_id');
  }

  get contact() {
    return this.addEmployeeForm.get('contact');
  }

  get address() {
    return this.addEmployeeForm.get('address');
  }

  get designation() {
    return this.addEmployeeForm.get('designation');
  }

  get department() {
    return this.addEmployeeForm.get('department');
  }
}
