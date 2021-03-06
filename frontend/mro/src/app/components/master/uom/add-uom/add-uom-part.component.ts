import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { ErrorHandlers } from 'src/app/utils/error-handler';

@Component({
  selector: 'app-add-uom-part',
  templateUrl: './add-uom-part.component.html',
  styleUrls: ['./add-uom-part.component.css'],
})
export class AddUomComponent implements OnInit {
  uom: any;
  remarks: any;
  created_by: any;
  @Output() onCreateUomPart = new EventEmitter();
  addUomPartForm: FormGroup | any;
  errorhandlers: ErrorHandlers;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void { 
    this.addUomPartForm = this.formBuilder.group({
    uom: ['', Validators.required],
    remarks: [''],
  });
  this.errorhandlers = new ErrorHandlers(this.addUomPartForm);

}

  onSubmit() {
    if (this.addUomPartForm.valid) {
      const uomPart = {
        unit_of_measure: {
          uom: this.addUomPartForm.value.uom,
          remarks: this.addUomPartForm.value.remarks,
          created_by: 'dcheng',
        },
    };
    console.log(uomPart)

    this.onCreateUomPart.emit(uomPart);
    this.addUomPartForm.reset();

  } else {
    this.errorhandlers.showErrors();
  }
  }

}
