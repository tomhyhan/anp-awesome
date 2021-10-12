import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  ProjectCode: any;
  ProjectName: any;
  Enddate:any;
  @Output() onCreateproject = new EventEmitter();
  addprojectForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addprojectForm = this.formBuilder.group({
      project_code: ['', Validators.required],
      project_name: [''],
      active_id: ['', Validators.required],
      end_date: ['',Validators.required],
    });
    
  }
  onSubmit() {
    
    const project = {
      project_user: {
        project_name: this.addprojectForm.value.project_name,
        project_code: this.addprojectForm.value.project_code,
        remarks:"new",
        active_id:parseInt(this.addprojectForm.value.active_id),
        created_by:"benny",
        end_date:"2021/09/10"
      },
    };
    console.log(project)
    this.onCreateproject.emit(project);
  }
}
