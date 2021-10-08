import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-aircraft',
  templateUrl: './add-aircraft.component.html',
  styleUrls: ['./add-aircraft.component.css'],
})
export class AddaircraftComponent implements OnInit {
  aircraft_name: any;
  material_aircraft_id: any;
  @Output() onCreateaircraft = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const aircraft = {
      spare_part: {
        material_aircraft_id: this.material_aircraft_id,
        aircraft_name: this.aircraft_name,
        remarks: 'remark',
        created_by: 'tom',
        created_date: '',
      },
    };

    this.onCreateaircraft.emit(aircraft);
  }
}
