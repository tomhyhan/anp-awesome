import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-aircraft',
  templateUrl: './edit-aircraft.component.html',
  styleUrls: ['./edit-aircraft.component.css'],
})
export class EditaircraftComponent implements OnInit {
  @Output() onUpdateaircraft = new EventEmitter();
  @Input() aircraft: any;
  aircraftForm!: FormGroup | any;
  id: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.aircraftForm = this.formBuilder.group({
      aircraft_name: '',
      remarks:'',
    });
    this.updateValues();
  }

  updateValues() {
    this.aircraftForm.patchValue({
      aircraft_name: this.aircraft.aircraft_name,
      remarks:this.aircraft.remarks,
    });
  }

  // probably better use router
  onSubmit() {
    
    const updateaircraft = {
      aircraft: {
        aircraft_name: this.aircraftForm.value.aircraft_name,
        remarks: 'remark',
      },
    };
    this.onUpdateaircraft.emit({
      aircraft: updateaircraft,
      id: this.aircraft.material_aircraft_id,
    });
  }
}
