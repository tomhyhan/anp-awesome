import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { VendorService } from 'src/app/services/master/vendor/vendor.service';
import { startWith, tap } from 'rxjs/operators';
import { vendor,VendorFilter } from 'src/app/model/vendor';

type Filter = string | VendorFilter;
@Component({
  selector: 'app-vendor',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  vendor: vendor[];
  vendorCount: any;
  filter:Filter = JSON.stringify('');


  displayedColumns: string[] = [
    'vendor_code',
    'vendor_name',
    'contact',
    'address',
    'remarks',
    'view',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator | any;


  constructor(private vendorService: VendorService) { }



  ngOnInit(): void {
    this.vendorService.getVendorCount().subscribe((count) => {
   this.vendorCount = count;
    })
  }



  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() =>
          this.vendorService
            .getVendor(
              this.filter,
              this.paginator.pageIndex,
              this.paginator.pageSize
            )
            .subscribe((vendor) => {
              this.vendor = vendor;
            })
        )
      )
      .subscribe(() => {});
  }



  createTask(vendor: any) {
    this.vendorService
      .addVendor(vendor)
      .subscribe((vendor: any) => {
        this.vendorService.getVendorCount().subscribe((count) => {
          this.vendorCount = count;
      });
      if (this.vendor.length < this.paginator.pageSize) {
        this.vendor = [...this.vendor, vendor[0]];
      }
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

 
  searchVendor(filter: any) {
    this.vendorService.getVendorFilterCount(filter).subscribe((count) => {
      this.vendorCount = count;
    });
    this.filter = filter;
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() =>
          this.vendorService
            .getVendor(
              this.filter,
              this.paginator.pageIndex,
              this.paginator.pageSize
            )
            .subscribe((vendor) => {
              this.vendor = vendor;
            })
        )
      )
      .subscribe(() => {});
  }



}
