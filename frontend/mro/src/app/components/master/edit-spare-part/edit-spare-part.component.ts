import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SparePartService } from 'src/app/services/master/spare-part.service';

@Component({
  selector: 'app-edit-spare-part',
  templateUrl: './edit-spare-part.component.html',
  styleUrls: ['./edit-spare-part.component.css'],
})
export class EditSparePartComponent implements OnInit {
  @Output() onUpdateSparePart = new EventEmitter();
  @Input() sparePart: any;
  sparePartCode: any;
  hsnCode: any;
  sparePartDesc: any;

  constructor(private sparePartService: SparePartService) {}

  ngOnInit(): void {}

  // probably better use router
  onSubmit() {
    const updateSparePart = {
      spare_part: {
        spare_part_code: this.sparePartCode,
        spare_part_desc: this.sparePartDesc,
        hsn_code: this.hsnCode,
        spare_part_group: 'Lubricant & fuel',
        rate: 11.11,
        remarks: 'remark',
        active_id: 1,
        photo: '',
      },
    };

    this.onUpdateSparePart.emit(updateSparePart);
  }
}
