import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-vendor',
  templateUrl: './search-vendor.component.html',
  styleUrls: ['./search-vendor.component.css']
})
export class SearchVendorComponent implements OnInit {
  VendorName: any;
  VendorCode: any;
  Contact: any;
  Address: any;
  Remarks: any;
  @Output() onSearchVendor = new EventEmitter();
  searchvendorForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.searchvendorForm = this.formBuilder.group({
      vendor_name:[''],
      vendor_code:[''],
      contact:[''],
      address:[''],
      remarks:[''],
    });
  }

  onSubmit() {
    const vendor_name =
      this.searchvendorForm.value.vendor_name || null;
    const vendor_code =
      this.searchvendorForm.value.vendor_code || null;
    const contact = this.searchvendorForm.value.contact || null;
    const address = this.searchvendorForm.value.address || null;
    const remarks = this.searchvendorForm.value.remarks || null;
 

    const filter = {
      vendor_name,
      vendor_code,
      contact,
      address,
      remarks,
    };
    console.log(filter)

    this.onSearchVendor.emit(JSON.stringify(filter));
  }
}
