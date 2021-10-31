import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
import { ErrorHandlers } from 'src/app/utils/error-handler'
import { AuthService } from 'src/app/services/auth.service';
import { AuthData } from 'src/app/model/auth';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css'],
})
export class EditVendorComponent implements OnInit {
  @Output() onUpdateVendor = new EventEmitter();
  @Input() vendor: any;
  editVendorForm: FormGroup | any;
  id: any;
  errorhandlers: any;
  user: AuthData;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.editVendorForm = this.formBuilder.group({
      vendor_code: ['', Validators.required],
      vendor_name: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      remarks: '',
    });
    this.updateVendors();
    this.errorhandlers = new ErrorHandlers(this.editVendorForm);
  }

  updateVendors() {
    // console.log(this.vendor)
    this.editVendorForm.patchValue({
      vendor_code: this.vendor.vendor_code,
      vendor_name: this.vendor.vendor_name,
      contact: this.vendor.contact,
      address: this.vendor.address,
      remarks: this.vendor.remarks,
    });
  }

  onSubmit() {
    if (this.editVendorForm.valid) {
      const updateVendor = {
        vendor: {
          vendor_code: this.editVendorForm.value.vendor_code,
          vendor_name: this.editVendorForm.value.vendor_name,
          contact: this.editVendorForm.value.contact,
          address: this.editVendorForm.value.address,
          remarks: this.editVendorForm.value.remarks,
          modified_by:this.user.emp_id,
        },
      };
      console.log(updateVendor)
      this.onUpdateVendor.emit({
        vendor: updateVendor,
        id: this.vendor.vendor_id,
    })
  } else {
    this.errorhandlers.showErrors();

  }}
}
