import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';

@Component({
  selector: 'app-edit-uom',
  templateUrl: './edit-uom.component.html',
  styleUrls: ['./edit-uom.component.css'],
})
export class EditUomPartComponent implements OnInit {
  @Output() onUpdateUomPart = new EventEmitter();
  @Input() uoms: any;
  editUomPartForm!: FormGroup | any;
  id: any;
  errorhandlers: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.editUomPartForm = this.formBuilder.group({
      uom: ['', Validators.required],

      remarks: [''],

    });
    this.updateValues();
    this.errorhandlers = new ErrorHandlers(this.editUomPartForm);
  }

  updateValues() {
    this.editUomPartForm.patchValue({

      ...this.uoms,

    });
  }

  // probably better use router
  onSubmit() {

    if (this.editUomPartForm.valid) {

    const updateUomPart = {
      unit_of_measure: {
        ...this.editUomPartForm.value,
        created_by:"dcheng"
      },
    };

    console.log(updateUomPart)

    this.onUpdateUomPart.emit({
      uoms: updateUomPart,
      id: this.uoms.uom_id,
    });

  } else {
    this.errorhandlers.showErrors();

    }
  }
}