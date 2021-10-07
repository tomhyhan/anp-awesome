import { Component, OnInit } from '@angular/core';
import { SparePartService } from 'src/app/services/master/spare-part.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.css'],
})
export class SparePartsComponent implements OnInit {
  spareParts: any = [];

  displayedColumns: string[] = [
    'demo-position',
    'demo-name',
    'demo-weight',
    'demo-symbol',
    'demo-button',
  ];

  constructor(private sparePartService: SparePartService) {}

  ngOnInit(): void {
    this.sparePartService.getSparePart().subscribe((spareParts) => {
      console.log(spareParts);
      this.spareParts = spareParts;
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
