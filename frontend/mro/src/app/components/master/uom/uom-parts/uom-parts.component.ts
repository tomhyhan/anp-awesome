import { ViewChild, Component, OnInit } from '@angular/core';
import { UomService } from 'src/app/services/master/Uom/uom.service';
import {MatPaginator} from '@angular/material/paginator';
import { startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-uoms',
  templateUrl: './uom-parts.component.html',
  styleUrls: ['./uom-parts.component.css']
})
export class UomPartsComponent implements OnInit {

  uoms: any = [];

  displayedColumns: string[] = [
    'uom_id',
    'uom',
    'remarks',
    'created_by',
    'created_date',
    'edit',
  ];
  uomCount: any;
  filter = JSON.stringify('');

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private uomService: UomService) { }

  ngOnInit(): void {
    this.uomService.getUomCount().subscribe((uoms) => {
      this.uoms = uoms;
      console.log(this.uoms)
    });
  }
  createTask(uomPart: any) {
    this.uomService
      .addUomPart(uomPart)
      .subscribe((uomPart: any) => {
        this.uoms = [...this.uoms, uomPart[0]];
      });
  }
  updateUom(uomPart: any) {
    this.uomService
      .updateUomPart(uomPart.uom, uomPart.id)
      .subscribe((updated: any) => {
        const newUomParts = this.uoms.map((uomPart: any) => {
          
          if (uomPart.uom_id === updated[0].uom_id) {
            return updated[0];
          }
          return uomPart;
        });
        this.uoms = newUomParts;
      });
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() =>
          this.uomService
            .getUomPart(
              this.filter,
              this.paginator.pageIndex,
              this.paginator.pageSize
            )
            .subscribe((uoms) => {
              this.uoms = uoms;
            })
        )
      )
      .subscribe(() => {});
  }

  searchUom(filter: any) {
    this.uomService.getUomFilterCount(filter).subscribe((count) => {
      this.uomCount = count;
    });
    this.filter = filter;
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() =>
          this.uomService.getUomPart(
              this.filter,
              this.paginator.pageIndex,
              this.paginator.pageSize
            )
            .subscribe((uoms) => {
              this.uoms = uoms;
            })
        )
      )
      .subscribe(() => {});
  }
}
