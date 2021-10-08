import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css'],
})
export class aircraftComponent implements OnInit {
  @Input() aircraft: any;
  @Output() onUpdateaircraft = new EventEmitter();
  numbers = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit(): void {}

  updateaircraft(aircraft: any) {
    this.onUpdateaircraft.emit(aircraft);
  }
}
