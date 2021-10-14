import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UomService } from 'src/app/services/master/Uom/uom.service';
@Component({
  selector: 'app-add-spare-part',
  templateUrl: './add-spare-part.component.html',
  styleUrls: ['./add-spare-part.component.css'],
})
export class AddSparePartComponent implements OnInit {
  @Output() onCreateSparePart = new EventEmitter();
  addSparePartForm: FormGroup | any;
  uom: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private uomService: UomService
  ) {}

  ngOnInit(): void {
    this.addSparePartForm = this.formBuilder.group({
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
  }

  onSubmit() {
    const sparePart = {
      spare_part: {
        ...this.addSparePartForm.value,
        rate: parseInt(this.addSparePartForm.value.rate),
        active_id: parseInt(this.addSparePartForm.value.active_id),
        frn_uom: parseInt(
          this.uom.find(
            (uom: any) => uom.uom === this.addSparePartForm.value.frn_uom
          ).uom_id
        ),
        created_by: 'tom',
      },
    };
    console.log('asdf');
    console.log(sparePart);
    this.onCreateSparePart.emit(sparePart);
  }

  onClick() {
    this.uomService.getUomPart().subscribe((uom) => {
      this.uom = uom;
    });
  }
}
