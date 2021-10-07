import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  VendorName: any;
  VendorCode: any;
  contact: any;
  address: any;
  @Output() onCreatevendor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const vendor = {
      vendor_user: {
        vendor_name: this.VendorName,
        vendor_code: this.VendorCode,
        contact: this.contact,
        address: this.address,
        remarks:"remarks",
        created_by:"hosung",
      },
    };

    this.onCreatevendor.emit(vendor);
  }
}
