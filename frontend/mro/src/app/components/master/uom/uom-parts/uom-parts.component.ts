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

  uomPartCount: any;

  filter = JSON.stringify('');

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private uomService: UomService) { }


  ngOnInit(): void {
    this.uomService.getUomCount().subscribe((count) => {
      this.uomPartCount = count;
    });
  }


  createTask(uomPart: any) {
    this.uomService
      .addUomPart(uomPart)
      .subscribe((uomPart: any) => {
        this.uomService.getUomCount().subscribe((count) =>{
          this.uomPartCount = count
        });
        if (this.uoms.length < this.paginator.pageSize){
          this.uoms = [...this.uoms, uomPart[0]];
        }
      });
  }

  
  updateUom(uoms: any) {
    this.uomService
      .updateUomPart(uoms.uoms, uoms.id)
      .subscribe((updated: any) => {
        const newUomParts = this.uoms.map((uoms: any) => {
          
          if (uoms.uom_id === updated[0].uom_id) {
            return updated[0];
          }
          return uoms;
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
      this.uomPartCount = count;
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
