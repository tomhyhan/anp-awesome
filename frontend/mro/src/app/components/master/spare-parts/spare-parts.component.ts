import { Component, OnInit } from '@angular/core';
import { SparePartService } from 'src/app/services/master/spare-part.service';

@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.css'],
})
export class SparePartsComponent implements OnInit {
  spareParts: any = [];

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
        this.spareParts.push(sparePart[0]);
      });
  }
}
