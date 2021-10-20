import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { aircraftService } from 'src/app/services/master/aircraft/aircraft.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-aircraft',
  templateUrl: './edit-aircraft.component.html',
  styleUrls: ['./edit-aircraft.component.css']
})
export class EditaircraftComponent implements OnInit {
  @Output() onUpdateaircraft = new EventEmitter();
  @Input() aircraft: any;
  editaircraftForm!: FormGroup | any;
  id: any;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // console.log(this.aircraft)
    this.editaircraftForm = this.formBuilder.group({
      aircraft_name: ['', Validators.required],
      remarks:'',
    });
    this.updateaircrafts();
  }

  updateaircrafts() {
    // console.log(this.aircraft)
    this.editaircraftForm.patchValue({
      aircraft_name: this.aircraft.aircraft_name,
      remarks: this.aircraft.remarks,
    });
  }


  onSubmit() {
    const updateaircraft = {
      aircraft: {
        aircraft_name: this.editaircraftForm.value.aircraft_name,
        remarks: this.editaircraftForm.value.remarks,
        created_by:"tama",
      },
    };
    // console.log(updateaircraft)
    this.onUpdateaircraft.emit({
      aircraft: updateaircraft,
      id: this.aircraft.material_aircraft_id,
    });
  }
}