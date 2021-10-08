import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UomService } from 'src/app/services/master/Uom/uom.service';
@Component({
  selector: 'app-edit-spare-part',
  templateUrl: './edit-spare-part.component.html',
  styleUrls: ['./edit-spare-part.component.css'],
})
export class EditSparePartComponent implements OnInit {
  @Output() onUpdateSparePart = new EventEmitter();
  @Input() sparePart: any;
  editSparePartForm: FormGroup | any;
  id: any;
  uom: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private uomService: UomService
  ) {}

  ngOnInit(): void {
    this.editSparePartForm = this.formBuilder.group({
      spare_part_code: ['', Validators.required],
      spare_part_desc: [''],
      hsn_code: [''],
      spare_part_group: [''],
      rate: [
        '',
        [
          Validators.required,
          Validators.pattern(`[+]?([0-9]+([.][0-9]*)?|[.][0-9]+)`),
        ],
      ],
      remarks: [''],
      frn_uom: [''],
      active_id: [''],
      photo: [''],
    });
    this.updateValues();
  }

  updateValues() {
    this.editSparePartForm.patchValue({
      ...this.sparePart,
      frn_uom: 'm',
    });
  }

  // probably better use router
  onSubmit() {
    const updateSparePart = {
      spare_part: {
        ...this.editSparePartForm.value,
        rate: parseInt(this.editSparePartForm.value.rate),
        active_id: parseInt(this.editSparePartForm.value.active_id),
        frn_uom: parseInt(
          this.uom.find(
            (uom: any) => uom.uom === this.editSparePartForm.value.frn_uom
          ).uom_id
        ),
      },
    };
    console.log(updateSparePart);

    this.onUpdateSparePart.emit({
      sparePart: updateSparePart,
      id: this.sparePart.material_master_id,
    });
  }

  onClick() {
    this.uomService.getUomPart().subscribe((uom) => {
      this.uom = uom;
    });
  }
}
