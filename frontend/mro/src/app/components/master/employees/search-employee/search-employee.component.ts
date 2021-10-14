import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css'],
})
export class SearchEmployeeComponent implements OnInit {
  empName: any;
  empCode: any;
  siteMasterId: any;
  contact: any;
  address: any;
  designation: any;
  department: any;
  createdBy: any;
  createdDate: any;
  @Output() onSearchEmployee = new EventEmitter();
  searchEmployeeForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchEmployeeForm = this.formBuilder.group({
        emp_name: [''],
        emp_code: [''],
        site_master_id: [''],
        contact: [''],
        address: [''],
        designation: [''],
        department: [''],
        created_by: [''],
        created_date: [''],
    });
  }

  onSubmit() {
    const emp_name = this.searchEmployeeForm.value.emp_name || null;
    const emp_code = this.searchEmployeeForm.value.emp_code || null;
    const site_master_id = this.searchEmployeeForm.value.site_master_id || null;
    const contact = this.searchEmployeeForm.value.contact || null;
    const address = this.searchEmployeeForm.value.address || null;
    const designation = this.searchEmployeeForm.value.designation || null;
    const department = this.searchEmployeeForm.value.department || null;
    const created_by = this.searchEmployeeForm.value.created_by || null;
    const created_date = this.searchEmployeeForm.value.created_date || null;

    const filter = {
      emp_name,
      emp_code,
      site_master_id,
      contact,
      address,
      designation,
      department,
      created_by,
      created_date
    };
    this.onSearchEmployee.emit(JSON.stringify(filter));
  }
}