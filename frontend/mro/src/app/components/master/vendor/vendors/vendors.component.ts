import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { VendorService } from 'src/app/services/master/vendor/vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  vendor: any = [];

  displayedColumns: string[] = [
    'vendor_code',
    'vendor_name',
    'contact',
    'address',
    'remarks',
    'view',
  ];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private vendorService: VendorService) { }


  ngAfterViewInit(): void {
    this.vendorService.getVendor().subscribe(vendor => this.vendor = vendor);
    this.vendor.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.vendorService.getVendor().subscribe((vendor) => {
      console.log(vendor);
      this.vendor = vendor;
    });
  }
  createTask(vendor: any) {
    this.vendorService
      .addVendor(vendor)
      .subscribe((vendor: any) => {
        this.vendor = [...this.vendor, vendor[0]];
      });
  }

  updateVendor(Vendor: any) {
    this.vendorService
      .updateVendor(Vendor.vendor, Vendor.id)
      .subscribe((updated: any) => {
        console.log(updated)
        const newVendors = this.vendor.map((Vendor: any) => {
          if (Vendor.vendor_id === updated[0].vendor_id) {
            return updated[0];
          }
          return Vendor;
        });
        this.vendor = newVendors;
      });
  }

}
