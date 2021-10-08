import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  @Output() onUpdateproject = new EventEmitter();
  @Input() project: any;
  projectForm!: FormGroup | any;
  id: any;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      ProjectName: '',
      ProjectCode: '',
      Status:'',
      EndDate:'',
    });
    this.updateValues();
  }

  updateValues() {
    this.projectForm.patchValue({
      ProjectName: this.project.project_name,
      ProjectCode: this.project.project_code,
      Status:this.project.active_id,
      EndDate:this.project.end_date,
    });
  }

  // probably better use router
  onSubmit() {
    // console.log(this.project.project_master_id);
    // console.log(this.projectForm.value.ProjectName);
    const updateproject = {
      project_user: {
        project_name: this.projectForm.value.ProjectName,
        project_code: this.projectForm.value.ProjectCode,
        remarks:"new",
        active_id:this.projectForm.value.Status,
        created_by:"benny",
        end_date:"2021-10-06"
      },
    };
    
    this.onUpdateproject.emit({
      project: updateproject,
      id: this.project.project_master_id,
    });
  }

}
