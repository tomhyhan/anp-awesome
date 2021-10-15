import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UomService } from 'src/app/services/master/Uom/uom.service';
import * as $ from 'jquery';
import { ErrorHandlers } from 'src/app/utils/error-handler';
@Component({
  selector: 'app-add-spare-part',
  templateUrl: './add-spare-part.component.html',
  styleUrls: ['./add-spare-part.component.css'],
})
export class AddSparePartComponent implements OnInit {
  @Output() onCreateSparePart = new EventEmitter();
  addSparePartForm: FormGroup | any;
  uom: any = [];
  errorhandlers: any;

  constructor(
    private formBuilder: FormBuilder,
    private uomService: UomService
  ) {}

  ngOnInit(): void {
    console.log(this.uom);
    this.addSparePartForm = this.formBuilder.group({
      spare_part_code: ['', Validators.required],
      spare_part_desc: ['', Validators.required],
      hsn_code: ['', Validators.required],
      spare_part_group: ['', Validators.required],
      rate: [
        '',
        [
          Validators.required,
          Validators.pattern(`[+]?([0-9]+([.][0-9]*)?|[.][0-9]+)`),
        ],
      ],
      remarks: [''],
      frn_uom: ['', Validators.required],
      active_id: ['', Validators.required],
      photo: [''],
    });

    this.errorhandlers = new ErrorHandlers(this.addSparePartForm);
  }

  onSubmit() {
    if (this.addSparePartForm.valid) {
      const sparePart = {
        spare_part: {
          ...this.addSparePartForm.value,
          rate: parseInt(this.addSparePartForm.value.rate),
          active_id: parseInt(this.addSparePartForm.value.active_id),
          created_by: 'tom',
        },
      };
      this.onCreateSparePart.emit(sparePart);

      $('#sparePartModal12').hide();
      this.addSparePartForm.reset();
    } else {
      this.errorhandlers.showErrors();
    }
  }

  onClick() {
    this.uomService.getUomPartforservice().subscribe((uom) => {
      this.uom = uom;
    });
  }
}
