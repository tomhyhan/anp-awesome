import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/master/vendor/vendor.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  vendors: any = [];

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.vendorService.getVendor().subscribe((vendors) => {
      console.log(vendors);
      this.vendors = vendors;
    });
  }
  createTask(vendor: any) {
    this.vendorService
      .addVendor(vendor)
      .subscribe((vendor: any) => {
        this.vendors = [...this.vendors, vendor[0]];
      });
  }

  updateVendor(vendor: any) {
    this.vendorService
      .updateVendor(vendor.vendor, vendor.id)
      .subscribe((updated: any) => {
        const newVendors = this.vendors.map((vendor: any) => {
          if (vendor.id === updated[0].id) {
            return updated[0];
          }
          return vendor;
        });
        this.vendors = newVendors;
      });
  }

}
