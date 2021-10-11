import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { aircraftService } from 'src/app/services/master/aircraft/aircraft.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-aircraft',
  templateUrl: './edit-aircraft.component.html',
  styleUrls: ['./edit-aircraft.component.css'],
})
export class EditaircraftComponent implements OnInit {
  @Output() onUpdateaircraft = new EventEmitter();
  @Input() aircraft: any;
  aircraftForm!: FormGroup;
  id: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.aircraftForm = this.formBuilder.group({
      aircraft_name: '',
      material_aircraft_id:''
    });
    this.updateValues();
  }

  updateValues() {
    this.aircraftForm.patchValue({
      material_aircraft_id: this.aircraft.value.material_aircraft_id,
      aircraft_name: this.aircraft.aircraft_name
    });
  }

  // probably better use router
  onSubmit() {
    const updateaircraft = {
      aircraft: {
        material_aircraft_id: this.aircraftForm.value.material_aircraft_id,
        aircraft_name: this.aircraftForm.value.aircraft_name,
        remarks: 'remark',
        active_id: 1,
        photo: '',
      },
    };
    this.onUpdateaircraft.emit({
      aircraft: updateaircraft,
      id: this.aircraft.material_aircraft_id,
    });
  }
}
