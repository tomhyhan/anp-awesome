import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Output() onCreateEmployee = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const employee = {
      employee: {
        emp_code: this.empCode,
        emp_name: this.empName,
        siteMasterId: 2,
        contact: 'Lucus',
        address: 'Vancouver BC',
        designation: 'Calgary AB',
        department: 'P&M',
        remarks: 'Recently hired',
        createdBy: 'Ingrid',
      }
    };

    this.onCreateEmployee.emit(employee);
  }
}
