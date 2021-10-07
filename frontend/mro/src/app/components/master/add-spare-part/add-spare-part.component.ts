import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-spare-part',
  templateUrl: './add-spare-part.component.html',
  styleUrls: ['./add-spare-part.component.css'],
})
export class AddSparePartComponent implements OnInit {
  sparePartCode: any;
  hsnCode: any;
  rate: any;
  uom: any;
  @Output() onCreateSparePart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const sparePart = {
      spare_part: {
        spare_part_code: this.sparePartCode,
        spare_part_desc: 'changed oil',
        hsn_code: this.hsnCode,
        spare_part_group: 'Lubricant & fuel',
        rate: parseInt(this.rate),
        frn_uom: 1,
        remarks: 'remark',
        active_id: 1,
        created_by: 'tom',
        photo: '',
      },
    };

    this.onCreateSparePart.emit(sparePart);
  }
}
