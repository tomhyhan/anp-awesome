import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spare-part',
  templateUrl: './spare-part.component.html',
  styleUrls: ['./spare-part.component.css'],
})
export class SparePartComponent implements OnInit {
  @Input() sparePart: any;

  constructor() {}

  ngOnInit(): void {}
}
