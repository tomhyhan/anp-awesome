import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      empName: ['', Validators.required],
      empCode: ['', Validators.required],
      siteMasterId: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      remarks: '',
      createdBy: '',
      createdDate: '',
    });
    this.updateEmployees();
  }

updateEmployees() {
  this.employeeForm.patchValue({
    empName: this.employee.emp_name,
    empCode: this.employee.emp_code,
    siteMasterId: this.employee.site_master_id,
    contact: this.employee.contact,
    address: this.employee.address,
    designation: this.employee.designation,
    department: this.employee.department,
    remarks: this.employee.remarks,
    createdBy: this.employee.created_by,
    createdDate: this.employee.created_date,
  });
}


onSubmit() {
  const updateEmployee = {
    employee: {
      emp_name: this.employeeForm.value.empName,
      emp_code: this.employeeForm.value.empCode,
      site_master_id: this.employeeForm.value.siteMasterId,
      contact: this.employeeForm.value.contact,
      address: this.employeeForm.value.address,
      designation: this.employeeForm.value.designation,
      department: this.employeeForm.value.department,
      remarks: this.employeeForm.value.remarks,
      created_by: this.employeeForm.value.createdBy,
      created_date: this.employeeForm.value.createdDate,
    },
  };
  this.onUpdateEmployee.emit({
    employee: updateEmployee,
    id: this.employee.emp_id,
  });
  }
}