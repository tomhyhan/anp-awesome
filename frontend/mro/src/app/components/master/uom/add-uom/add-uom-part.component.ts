import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void { 
    this.addUomPartForm = this.formBuilder.group({
    uom: ['', Validators.required],
    remarks: ['', Validators.required],
  });}

  onSubmit() {
    const uomPart = {
      unit_of_measure: {
        uom: this.addUomPartForm.value.uom,
        remarks: this.addUomPartForm.value.remarks,
        created_by: 'dcheng',
      },
    };
    console.log(uomPart)

    this.onCreateUomPart.emit(uomPart);
  }
}
