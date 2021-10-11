import { Component, OnInit } from '@angular/core';
import { UomService } from 'src/app/services/master/Uom/uom.service';

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

  constructor(private uomService: UomService) { }

  ngOnInit(): void {
    this.uomService.getUomPart().subscribe((uoms) => {
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


}
