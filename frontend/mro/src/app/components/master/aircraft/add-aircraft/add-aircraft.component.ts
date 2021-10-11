import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-aircraft',
  templateUrl: './add-aircraft.component.html',
  styleUrls: ['./add-aircraft.component.css'],
})
export class AddaircraftComponent implements OnInit {
  aircraft_name: any;
  material_aircraft_id: any;
  created_date: any;
  @Output() onCreateaircraft = new EventEmitter();
  addaircraftForm : FormGroup | any;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const aircraft = {
      spare_part: {
        material_aircraft_id: this.addaircraftForm.material_aircraft_id,
        aircraft_name: this.addaircraftForm.aircraft_name,
        remarks: 'remark',
        created_by: 'tom',
        created_date: '',
      },
    };
    console.log(aircraft)
    this.onCreateaircraft.emit(aircraft);
  }
}
