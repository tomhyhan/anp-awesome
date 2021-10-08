import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  empName: any;
  empCode: any;
  siteMasterId: any;
  contact: any;
  address: any;
  designation: any;
  department: any;
  remarks: any;
  createdBy: any;
  createdDate: any;
  @Output() onCreateEmployee = new EventEmitter();
  addEmployeeForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addEmployeeForm = this.formBuilder.group({
      emp_name: [''],
      emp_code: [''],
      site_master_id: [''],
      contact: [''],
      address: [''],
      designation: [''],
      department: [''],
      remarks: [''],
      created_by: [''],
      created_date: [''],
    });
  }

  onSubmit() {
    const employee = {
      employee: {
        emp_name: this.addEmployeeForm.value.empName,
        emp_code: this.addEmployeeForm.value.empCode,
        site_master_id: parseInt(this.addEmployeeForm.value.siteMasterId),
        contact: this.addEmployeeForm.value.contact,
        address: this.addEmployeeForm.value.address,
        designation: this.addEmployeeForm.value.designation,
        department: this.addEmployeeForm.value.department,
        remarks: this.addEmployeeForm.value.remarks,
        created_by: "Inggy",
        created_date: new Date(),
      }
    };
    console.log(employee)
    this.onCreateEmployee.emit(employee);
  }
}
