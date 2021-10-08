import { Component, OnInit } from '@angular/core';
import { SparePartService } from 'src/app/services/master/spare-part.service';

@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.css'],
})
export class SparePartsComponent implements OnInit {
  spareParts: any = [];

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

  constructor(private sparePartService: SparePartService) {}

  ngOnInit(): void {
    this.sparePartService.getSparePart().subscribe((spareParts) => {
      this.spareParts = spareParts;
      console.log(this.spareParts);
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
