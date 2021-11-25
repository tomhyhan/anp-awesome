import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';
import { EmployeeService } from 'src/app/services/master/employees/employee.service';
import { Subscription } from 'rxjs';
import { VendorService } from 'src/app/services/master/vendor/vendor.service';
import { DetailService } from 'src/app/services/purchase/detail.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  addPurhaseDetail: FormGroup;
  errorhandlers: ErrorHandlers;
  employees;
  vendors;
  employeeSubscription: Subscription;
  vendorSubscription: Subscription;
  dateObj: Date = new Date();
  user;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private vendorService: VendorService,
    private detailService: DetailService,
    private authService: AuthService
  ) {
    this.authService.employee.subscribe((employee) => (this.user = employee));
    this.employeeService.getAllEmployee().subscribe((employees: any) => {
      this.employees = employees;
    });
    this.employeeSubscription = this.employeeService.employee.subscribe(
      (employees) => {
        this.employees = employees;
      }
    );
    this.vendorService.getAllVendor().subscribe((vendor: any) => {
      this.vendors = vendor;
    });
    this.vendorSubscription = this.vendorService.vendor.subscribe((vendor) => {
      this.vendors = vendor;
    });
  }

  ngOnInit(): void {
    const year = this.dateObj.getUTCFullYear();
    const mon = this.dateObj.getUTCMonth();
    const day = this.dateObj.getUTCDate();
    const sec = this.dateObj.getUTCMilliseconds();
    const newPR =
      year +
      '/' +
      mon +
      '/' +
      day +
      '/' +
      sec +
      Math.floor(Math.random() * 1000);

    this.addPurhaseDetail = this.formBuilder.group({
      purchase_requisition_number: [
        { value: newPR, disabled: true },
        Validators.required,
      ],
      vendor_id: ['', Validators.required],
      payment_terms: ['', Validators.required, Validators.pattern(`^[0-9]*$`)],
      other_reference: ['', Validators.required],
      transport_mode: ['', Validators.required],
      purchase_order_validity: ['', Validators.required],
      freight_terms: ['', Validators.required],
      insurance: ['', Validators.required],
      remarks: ['', Validators.required],
      approval_level_1: ['', Validators.required],
      approval_level_2: ['', Validators.required],
      created_by: ['', Validators.required],
    });
    this.errorhandlers = new ErrorHandlers(this.addPurhaseDetail);
  }

  // ngAfterViewInit() {
  //   console.log(this.employees);
  // }

  onSubmit() {
    const detail = {
      detail: {
        ...this.addPurhaseDetail.getRawValue(),
        created_by: this.user.emp_id,
      },
    };
    this.detailService.addDetail(detail).subscribe();
  }

  ngOnDestroy() {
    this.employeeSubscription.unsubscribe();
  }
}
