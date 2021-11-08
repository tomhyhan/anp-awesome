import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { aircraftService } from 'src/app/services/master/aircraft/aircraft.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlers } from 'src/app/utils/error-handler';
import { AuthService } from 'src/app/services/auth.service';

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
  errorhandlers: any;
  user:any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.authService.employee.subscribe(
      (employee) => (this.user = employee)
    );
   }

  ngOnInit(): void {
    // console.log(this.aircraft)
    this.editaircraftForm = this.formBuilder.group({
      aircraft_name: ['', Validators.required],
      remarks:'',
    });
    this.updateaircrafts();
    this.errorhandlers = new ErrorHandlers(this.editaircraftForm);
  }

  updateaircrafts() {
    // console.log(this.aircraft)
    this.editaircraftForm.patchValue({
      aircraft_name: this.aircraft.aircraft_name,
      remarks: this.aircraft.remarks,
    });
  }


  onSubmit() {
    if(this.editaircraftForm.valid){
    const updateaircraft = {
      aircraft: {
        aircraft_name: this.editaircraftForm.value.aircraft_name,
        remarks: this.editaircraftForm.value.remarks,
        modified_by:this.user.emp_id,
      },
    };
    // console.log(updateaircraft)
    this.onUpdateaircraft.emit({
      aircraft: updateaircraft,
      id: this.aircraft.material_aircraft_id,
    })
  } else {
    this.errorhandlers.showErrors();
  }
  }
}