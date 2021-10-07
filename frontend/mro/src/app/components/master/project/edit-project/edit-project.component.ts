import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  @Output() onUpdateproject = new EventEmitter();
  @Input() project: any;
  projectForm!: FormGroup;
  id: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      ProjectName: '',
      ProjectCode: '',
    });
    this.updateValues();
  }

  updateValues() {
    this.projectForm.patchValue({
      ProjectName: this.project.project_name,
      ProjectCode: this.project.project_code,
    });
  }

  // probably better use router
  onSubmit() {
    console.log(this.project.project_master_id);
    console.log(this.projectForm.value.ProjectName);
    const updateproject = {
      project_user: {
        project_name: this.projectForm.value.ProjectName,
        project_code: this.projectForm.value.ProjectCode,
        remarks:"new",
        active_id:1,
        created_by:"benny"
      },
    };
    
    this.onUpdateproject.emit({
      project: updateproject,
      id: this.project.project_master_id,
    });
  }

}
