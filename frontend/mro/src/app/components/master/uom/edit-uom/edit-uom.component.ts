import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-uom',
  templateUrl: './edit-uom.component.html',
  styleUrls: ['./edit-uom.component.css'],
})
export class EditUomPartComponent implements OnInit {
  @Output() onUpdateUomPart = new EventEmitter();
  @Input() uomPart: any;
  editUomPartForm!: FormGroup | any;
  id: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.editUomPartForm = this.formBuilder.group({
      uom: '',
      remarks: '',
    });
    this.updateValues();
  }

  updateValues() {
    this.editUomPartForm.patchValue({
      uom:this.uomPart.uom,
      remarks:this.uomPart.remarks
    });
  }

  // probably better use router
  onSubmit() {
    const updateUomPart = {
      unit_of_measure: {
        uom: this.editUomPartForm.value.uom,
        remarks:this.editUomPartForm.value.remarks,
        created_by:"dcheng"
      },
    };

    console.log(updateUomPart)

    this.onUpdateUomPart.emit({
      uomPart: updateUomPart,
      id: this.uomPart.uom_id,
    });
  }
}
