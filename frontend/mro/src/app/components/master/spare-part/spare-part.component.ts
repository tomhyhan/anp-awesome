import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-spare-part',
  templateUrl: './spare-part.component.html',
  styleUrls: ['./spare-part.component.css'],
})
export class SparePartComponent implements OnInit {
  @Input() sparePart: any;
  @Output() onUpdateSparePart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updateSparePart(sparePart: any) {
    this.onUpdateSparePart.emit(sparePart);
  }
}
