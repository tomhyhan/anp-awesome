import { Component, OnInit } from '@angular/core';
import { SparePartService } from 'src/app/services/master/sparePart/spare-part.service';
import { UomService } from 'src/app/services/master/Uom/uom.service';

@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.css'],
})
export class SparePartsComponent implements OnInit {
  spareParts: any = [];
  uom: any = [];

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

  constructor(
    private sparePartService: SparePartService,
    private uomService: UomService
  ) {}

  ngOnInit(): void {
    this.sparePartService.getSparePart().subscribe((spareParts) => {
      this.spareParts = spareParts;
    });
    this.uomService.getUomCount().subscribe((uom) => {
      this.uom = uom;
    });
  }

  createTask(sparePart: any) {
    this.sparePartService
      .addSparePart(sparePart)
      .subscribe((sparePart: any) => {
        this.spareParts = [...this.spareParts, sparePart[0]];
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
}

