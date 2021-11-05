import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';
import { EmployeeService } from 'src/app/services/master/employees/employee.service';
import { SparePartService } from 'src/app/services/master/sparePart/spare-part.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  addPurhaseDetail: FormGroup;
  errorhandlers: ErrorHandlers;
  employees: any;
  employeeSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.employeeService.getAllEmployee().subscribe((employees) => {
      this.employees = employees;
    });
    this.employeeSubscription = this.employeeService.employee.subscribe(
      (employees) => {
        this.employees = employees;
      }
    );
  }

  ngOnInit(): void {
    this.addPurhaseDetail = this.formBuilder.group({
      purchase_requisition_number: ['', Validators.required],
      vendor_id: ['', Validators.required],
      payment_terms: ['', Validators.required],
      other_reference: ['', Validators.required],
      transport_mode: ['', Validators.required],
      purchase_order_validity: ['', Validators.required],
      freight_terms: ['', Validators.required],
      insurance: ['', Validators.required],
      remarks: ['', Validators.required],
      approval_level_1: ['', Validators.required],
      approval_level_2: ['', Validators.required],
      created_by: ['', Validators.required],
      created_date: ['', Validators.required],
    });
    this.errorhandlers = new ErrorHandlers(this.addPurhaseDetail);
  }

  // ngAfterViewInit() {
  //   console.log(this.employees);
  // }

  onSubmit() {
    const detail = {
      detail: {
        ...this.addPurhaseDetail.value,
      },
    };
  }

  ngOnDestroy() {
    this.employeeSubscription.unsubscribe();
  }
}

// var dateObj = new Date();
// var month = dateObj.getUTCMonth() + 1;

// newdate = year + "/" + month
