import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @Input() Employee: any;
  @Output() onUpdateEmployee = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updateEmployee(employee:any) {
    this.onUpdateEmployee.emit(employee);
  }
}
