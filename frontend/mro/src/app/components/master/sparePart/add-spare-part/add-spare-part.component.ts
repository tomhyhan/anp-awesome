import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-spare-part',
  templateUrl: './add-spare-part.component.html',
  styleUrls: ['./add-spare-part.component.css'],
})
export class AddSparePartComponent implements OnInit {
  // sparePartCode: any;
  // hsnCode: any;
  // rate: any;
  // uom: any;
  @Input() uom: any;
  @Output() onCreateSparePart = new EventEmitter();
  addSparePartForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

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
      frn_uom: [''],
      active_id: ['1'],
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
          )["uom_id"]
        ),
        remarks: 'remark',
        created_by: 'tom',
      },
    };
    console.log(sparePart);
    this.onCreateSparePart.emit(sparePart);
  }
}
