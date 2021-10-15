import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  Remarks:any;
  @Output() onCreateVendor = new EventEmitter();
  addvendorForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // console.log(new Date().toLocaleDateString().replace('/','-').replace('/','-'))
    this.addvendorForm = this.formBuilder.group({
      vendor_code: ['', Validators.required],
      vendor_name: ['', Validators.required],
      contact:['', Validators.required],
      address:['', Validators.required],
      remarks:[''],
    });
  }
  
  onSubmit() {
    const vendor = {
      vendor: {
      //   ...this.addvendorForm.value,
        vendor_code: this.addvendorForm.value.vendor_code,
        vendor_name: this.addvendorForm.value.vendor_name,
        contact: this.addvendorForm.value.contact,
        address: this.addvendorForm.value.address,
        remarks: this.addvendorForm.value.remarks,
        created_by:"hosung",
      },
    };
    console.log(vendor)
    this.onCreateVendor.emit(vendor);
  }

  get VendorCode() {
    return this.addvendorForm.get('vendor_code');
  }

  get VendorName() {
    return this.addvendorForm.get('vendor_name');
  }

  get Contact() {
    return this.addvendorForm.get('contact');
  }

  get Address() {
    return this.addvendorForm.get('address');
  }


}
