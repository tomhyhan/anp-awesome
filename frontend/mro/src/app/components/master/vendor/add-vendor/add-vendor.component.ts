import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  vendor_name: any;
  vendor_code: any;
  contact: any;
  address: any;
  remarks: any;
  @Output() onCreateVendor = new EventEmitter();
  addVendorForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addVendorForm = this.formBuilder.group({
      vendor_code: '',
      vendor_name: '',
      contact: '',
      address: '',
      remarks: '',
    });
  }
  onSubmit() {
    const vendor = {
      vendor: {
        vender_id: 2,
        vendor_code: this.vendor_code,
        vendor_name: this.vendor_name,
        contact: this.contact,
        address: this.address,
        remarks:this.remarks,
        created_by:"hosung",
        created_date: new Date(),
      },
    };
    this.onCreateVendor.emit(vendor);
  }
}
