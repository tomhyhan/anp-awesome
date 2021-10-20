import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.css']
})
export class SearchProjectComponent implements OnInit {
  
  
  @Output() onSearchproject = new EventEmitter();
  searchprojectForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.searchprojectForm = this.formBuilder.group({
      project_name:[''],
      project_code:[''],
      remarks:[''],
      active_id:[''],
    });
  }

  onSubmit() {
    const project_name =
      this.searchprojectForm.value.project_name || null;
    const project_code =
      this.searchprojectForm.value.project_code || null;
    const remarks = this.searchprojectForm.value.remarks || null;
    const active_id = this.searchprojectForm.value.active_id || null;
 

    const filter = {
      project_name,
      project_code,
      remarks,
      active_id,
    };

    this.onSearchproject.emit(JSON.stringify(filter));
  }
}
