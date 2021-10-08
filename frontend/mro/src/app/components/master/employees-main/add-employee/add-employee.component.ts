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
  createdDate: any;
  @Output() onCreateEmployee = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}


  onSubmit() {
    const employee = {
      employee: {
        emp_name: this.empName,
        emp_code: this.empCode,
        site_master_id: 2,
        contact: 'LUCUS MARTENS',
        address: '29 TIREDWAY',
        designation: 'MECH.FOREMAN',
        department: 'P&M',
        remarks: 'Recently hired',
        created_by: 'Ingrid',
        created_date: new Date(),
      }
    };

    this.onCreateEmployee.emit(employee);
  }
}
