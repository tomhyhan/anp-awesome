import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-spare-part',
  templateUrl: './edit-spare-part.component.html',
  styleUrls: ['./edit-spare-part.component.css'],
})
export class EditSparePartComponent implements OnInit {
  @Output() onUpdateSparePart = new EventEmitter();
  @Input() sparePart: any;
  sparePartForm: FormGroup | any;
  id: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.sparePartForm = this.formBuilder.group({
      sparePartCode: '',
      hsnCode: '',
      sparePartDesc: '',
    });
    this.updateValues();
  }

  updateValues() {
    this.sparePartForm.patchValue({
      sparePartCode: this.sparePart.spare_part_code,
      hsnCode: this.sparePart.hsn_code,
      sparePartDesc: this.sparePart.spare_part_desc,
    });
  }

  // probably better use router
  onSubmit() {
    const updateSparePart = {
      spare_part: {
        spare_part_code: this.sparePartForm.value.sparePartCode,
        spare_part_desc: this.sparePartForm.value.sparePartDesc,
        hsn_code: this.sparePartForm.value.hsnCode,
        spare_part_group: 'Lubricant & fuel',
        rate: 11.11,
        remarks: 'remark',
        active_id: 1,
        photo: '',
      },
    };
    this.onUpdateSparePart.emit({
      sparePart: updateSparePart,
      id: this.sparePart.material_master_id,
    });
  }
}
