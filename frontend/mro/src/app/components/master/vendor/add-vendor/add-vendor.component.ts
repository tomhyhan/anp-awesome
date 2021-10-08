import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

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
        ...this.addVendorForm.value,
        created_by:"hosung",
      },
    };
    console.log(vendor)
    this.onCreateVendor.emit(vendor);
  }
}
