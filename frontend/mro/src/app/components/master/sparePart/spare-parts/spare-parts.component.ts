import { Component, OnInit, ViewChild } from '@angular/core';
import { SparePartService } from 'src/app/services/master/sparePart/spare-part.service';
import { UomService } from 'src/app/services/master/Uom/uom.service';
import { MatPaginator } from '@angular/material/paginator';
import { startWith, tap } from 'rxjs/operators';
@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.css'],
})
export class SparePartsComponent implements OnInit {
  spareParts: any;
  uom: any = [];
  sparePartCount: any;
  filter = JSON.stringify('');
  displayedColumns: string[] = [
    'spare_part_code',
    'spare_part_desc',
    'hsn_code',
    'spare_part_group',
    'rate',
    'uom',
    'active_id',
    'view',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(
    private sparePartService: SparePartService,
    private uomService: UomService
  ) {}

  ngOnInit(): void {
    this.sparePartService.getSparePartCount().subscribe((count) => {
      this.sparePartCount = count;
    });
    this.uomService.getUomPartforservice().subscribe((uom) => {
      console.log(uom)
      this.uom = uom;
    });
    
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() =>
          this.sparePartService
            .getSparePart(
              this.filter,
              this.paginator.pageIndex,
              this.paginator.pageSize
            )
            .subscribe((spareParts) => {
              this.spareParts = spareParts;
            })
        )
      )
      .subscribe(() => {});
  }

  createTask(sparePart: any) {
    this.sparePartService
      .addSparePart(sparePart)
      .subscribe((sparePart: any) => {
        this.sparePartService.getSparePartCount().subscribe((count) => {
          this.sparePartCount = count;
        });
        if (this.spareParts.length < this.paginator.pageSize) {
          this.spareParts = [...this.spareParts, sparePart[0]];
        }
      });
  }

  updateSparePart(sparePart: any) {
    this.sparePartService
      .updateSparePart(sparePart.sparePart, sparePart.id)
      .subscribe((updated: any) => {
        const newSpareParts = this.spareParts.map((sparePart: any) => {
          if (sparePart.material_master_id === updated[0].material_master_id) {
            return updated[0];
          }
          return sparePart;
        });

        this.spareParts = newSpareParts;
      });
  }

  searchSparePart(filter: any) {
    this.sparePartService.getSparePartFilterCount(filter).subscribe((count) => {
      this.sparePartCount = count;
    });
    this.filter = filter;
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() =>
          this.sparePartService
            .getSparePart(
              this.filter,
              this.paginator.pageIndex,
              this.paginator.pageSize
            )
            .subscribe((spareParts) => {
              this.spareParts = spareParts;
            })
        )
      )
      .subscribe(() => {});
  }
}