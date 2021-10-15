import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-uom',
  templateUrl: './search-uom.component.html',
  styleUrls: ['./search-uom.component.css'],
})
export class SearchUomComponent implements OnInit {
  @Input() uom: any;
  @Output() onSearchUomPart = new EventEmitter();
  searchUomPartForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchUomPartForm = this.formBuilder.group({
      uom: [''],
      remarks: ['']
    });
  }

  onSubmit() {

    const uom = this.searchUomPartForm.value.uom || null;
    const remarks = this.searchUomPartForm.value.remarks || null;

    const filter = {
          uom,
          remarks
        };
    
    this.onSearchUomPart.emit(JSON.stringify(filter));
  }
}