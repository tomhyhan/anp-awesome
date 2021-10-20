import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-aircraft',
  templateUrl: './search-aircraft.component.html',
  styleUrls: ['./search-aircraft.component.css'],
})
export class SearchaircraftComponent implements OnInit {
  // @Input() aircraft: any;
  aircraft_name: any;
  remarks: any;
  @Output() onSearchaircraft = new EventEmitter();
  searchaircraftForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchaircraftForm = this.formBuilder.group({
      aircraft_name: [''],
      remarks: [''],
    });
  }

  onSubmit() {
    const aircraft_name =
      this.searchaircraftForm.value.aircraft_name || null;
    const remarks = this.searchaircraftForm.value.remarks || null;

    const filter = {
      aircraft_name,
      remarks,
    };

    this.onSearchaircraft.emit(JSON.stringify(filter));
  }
}
