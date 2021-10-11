import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-aircraft',
  templateUrl: './add-aircraft.component.html',
  styleUrls: ['./add-aircraft.component.css'],
})
export class AddaircraftComponent implements OnInit {
  aircraftname: any;
  materialaircraftid: any;
  created_date: any;
  @Output() onCreateaircraft = new EventEmitter();
  addaircraftForm : FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addaircraftForm = this.formBuilder.group({
      aircraft_name: [''],
      remarks: [''],
      created_by:[''],
      created_date: [''],
    });
  }

  onSubmit() {
    const aircraft = {
      aircraft: {
        aircraft_name: this.addaircraftForm.value.aircraft_name,
        remarks: 'remark',
        created_by: 'tom',
        created_date: '',
      },
    };
    console.log(aircraft)
    this.onCreateaircraft.emit(aircraft);
  }
}
