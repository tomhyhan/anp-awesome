
import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';


@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  Remarks:any;
  @Output() onCreateVendor = new EventEmitter();
  addvendorForm: FormGroup | any;
  errorhandlers: any;


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
    this.errorhandlers = new ErrorHandlers(this.addvendorForm);
  }
  
  onSubmit() {
    if (this.addvendorForm.valid) {
      const vendor = {
        vendor: {
          vendor_code: this.addvendorForm.value.vendor_code,
          vendor_name: this.addvendorForm.value.vendor_name,
          contact: this.addvendorForm.value.contact,
          address: this.addvendorForm.value.address,
          remarks: this.addvendorForm.value.remarks,

          created_by:"hosung",
        },
      };
      // console.log(vendor)
      this.onCreateVendor.emit(vendor);
      this.addvendorForm.reset();
  } else {
    this.errorhandlers.showErrors();
  }};


  // get VendorCode() {
  //   return this.addvendorForm.get('vendor_code');
  // }

  // get VendorName() {
  //   return this.addvendorForm.get('vendor_name');
  // }

  // get Contact() {
  //   return this.addvendorForm.get('contact');
  // }

  // get Address() {
  //   return this.addvendorForm.get('address');
  // }
}
