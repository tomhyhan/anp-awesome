import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { VendorService } from 'src/app/services/master/vendor/vendor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css']
})
export class EditVendorComponent implements OnInit {
  @Output() onUpdateVendor = new EventEmitter();
  @Input() vendor: any;
  editVendorForm!: FormGroup | any;
  id: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.vendor)
    this.editVendorForm = this.formBuilder.group({
      vendor_code: '',
      vendor_name: '',
      contact:'',
      address:'',
      remarks:'',
    });
    this.updateVendors();
  }

  updateVendors() {
    console.log(this.vendor)
    this.editVendorForm.patchValue({
      vendor_code: this.vendor.vendor_code,
      vendor_name: this.vendor.vendor_name,
      contact: this.vendor.contact,
      address: this.vendor.address,
      remarks: this.vendor.remarks,
    });
  }


  onSubmit() {
    const updateVendor = {
      vendor: {
        vendor_code: this.editVendorForm.value.vendor_code,
        vendor_name: this.editVendorForm.value.vendor_name,
        contact: this.editVendorForm.value.contact,
        address: this.editVendorForm.value.address,
        remarks: this.editVendorForm.value.remarks,
        created_by:"hosung",
      },
    };
    // console.log(updateVendor)
    this.onUpdateVendor.emit({
      vendor: updateVendor,
      id: this.vendor.vendor_id,
    });
  }
}