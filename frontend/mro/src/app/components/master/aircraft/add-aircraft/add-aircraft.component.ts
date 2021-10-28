import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';

@Component({
  selector: 'app-add-aircraft',
  templateUrl: './add-aircraft.component.html',
  styleUrls: ['./add-aircraft.component.css']
})
export class AddaircraftComponent implements OnInit {

  @Output() onCreateaircraft = new EventEmitter();
  addaircraftForm: FormGroup | any;
  errorhandlers:any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addaircraftForm = this.formBuilder.group({
      aircraft_name: ['', Validators.required],
      remarks: '',
    });
    this.errorhandlers = new ErrorHandlers(this.addaircraftForm)
  }
  onSubmit() {
    if(this.addaircraftForm.valid){
    const aircraft = {
      aircraft: {
        aircraft_name: this.addaircraftForm.value.aircraft_name,
        remarks: this.addaircraftForm.value.remarks,
        created_by:"tama"
      },
    };
    console.log(aircraft)
    this.onCreateaircraft.emit(aircraft);
    this.addaircraftForm.reset();
  } else{
    this.errorhandlers.showErrors();
  }
  }
  get aircraftName() {
    return this.addaircraftForm.get('aircraft_name');
  }
}
