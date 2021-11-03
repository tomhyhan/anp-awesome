import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  addPurhaseDetail: FormGroup;
  errorhandlers: ErrorHandlers;

  constructor(private formBuilder: FormBuilder) {
    this.errorhandlers = new ErrorHandlers(this.addPurhaseDetail);
  }

  ngOnInit(): void {
    this.addPurhaseDetail = this.formBuilder.group({
      purchase_requisition_number: [''],
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
  }

  onSubmit() {
    const detail = {
      detail: {
        ...this.addPurhaseDetail.value,
      },
    };
  }
}

// var dateObj = new Date();
// var month = dateObj.getUTCMonth() + 1;

// newdate = year + "/" + month
