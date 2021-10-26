import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SparePartFilter } from 'src/app/model/sparePart';
@Component({
  selector: 'app-search-spare-part',
  templateUrl: './search-spare-part.component.html',
  styleUrls: ['./search-spare-part.component.css'],
})
export class SearchSparePartComponent implements OnInit {
  @Input() uom: any;
  @Output() onSearchSparePart = new EventEmitter();
  searchSparePartForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchSparePartForm = this.formBuilder.group({
      spare_part_code: [''],
      spare_part_desc: [''],
      hsn_code: [''],
      spare_part_group: [''],
      rate: ['', [Validators.pattern(`[+]?([0-9]+([.][0-9]*)?|[.][0-9]+)`)]],
      frn_uom: '',
      active_id: '',
    });
  }

  onSubmit() {
    const spare_part_code =
      this.searchSparePartForm.value.spare_part_code || null;
    const spare_part_desc =
      this.searchSparePartForm.value.spare_part_desc || null;
    const hsn_code = this.searchSparePartForm.value.hsn_code || null;
    const spare_part_group =
      this.searchSparePartForm.value.spare_part_group || null;
    const rate = this.searchSparePartForm.value.rate || null;
    const active_id =
      this.isFalse(this.searchSparePartForm.value.active_id) || null;
    const frn_uom =
      this.isFalse(this.searchSparePartForm.value.frn_uom) || null;

    const filter: SparePartFilter = {
      spare_part_code,
      spare_part_desc,
      hsn_code,
      spare_part_group,
      rate,
      active_id,
      frn_uom,
    };

    this.onSearchSparePart.emit(JSON.stringify(filter));
  }

  isFalse(value: string) {
    return value === 'false' ? null : value;
  }
}
