import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from 'src/app/services/master/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})

export class EditEmployeeComponent implements OnInit {
  @Output() onUpdateEmployee = new EventEmitter();
  @Input() employee: any;
  employeeForm!: FormGroup;
  id: any;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      empName: '',
      empCode: '',
      siteMasterId: '',
      contact: '',
      address: '',
      designation: '',
      department: '',
      remarks: '',
      createdBy: '',
      createdDate: '',
    });
    this.updateValues();
  }

updateValues() {
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
  })
}


onSubmit() {
  const updateEmployee = {
    employee: {
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
    },
  };

  this.onUpdateEmployee.emit({
    employee: updateEmployee,
    id: this.employee.emp_id,
  });
}
}