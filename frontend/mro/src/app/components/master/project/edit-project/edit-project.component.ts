import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  @Output() onUpdateproject = new EventEmitter();
  @Input() project: any;
  minDate = new Date().toLocaleDateString().replace('/','-').replace('/','-');
  editprojectForm!: FormGroup | any;
  id: any;
  errorhandlers: any;
  user:any;

  constructor(private formBuilder: FormBuilder,private authService: AuthService) { 
    this.authService.employee.subscribe(
      (employee) => (this.user = employee)
    );
  }

  ngOnInit(): void {
    this.editprojectForm = this.formBuilder.group({
      ProjectName: ['', Validators.required],
      ProjectCode: ['', Validators.required],
      Status:'',
      remarks:[''],
      StartDate:new Date(),
      EndDate:new Date(),
    });
    this.updateValues();
    this.errorhandlers = new ErrorHandlers(this.editprojectForm);
  }

  updateValues() {
    
    this.editprojectForm.patchValue({
      ProjectName: this.project.project_name,
      ProjectCode: this.project.project_code,
      Status:this.project.active_id,
      remarks:this.project.remarks,
      StartDate:this.project.star_date.split('T')[0],
      EndDate:this.project.end_date.split('T')[0],
    });
  }

  // probably better use router
  onSubmit() {
    // console.log(this.project.project_master_id);
    // console.log(this.projectForm.value.ProjectName);
    if (this.editprojectForm.valid) {
    const updateproject = {
      project_user: {
        project_name: this.editprojectForm.value.ProjectName,
        project_code: this.editprojectForm.value.ProjectCode,
        remarks:this.editprojectForm.value.remarks,
        active_id:this.editprojectForm.value.Status,
        star_date:this.editprojectForm.value.StartDate,
        end_date:this.editprojectForm.value.EndDate,
        modified_by:this.user.emp_id,
      },
    };
    console.log(updateproject)
    
    this.onUpdateproject.emit({
      project: updateproject,
      id: this.project.project_master_id,
    });
  } else{
    this.errorhandlers.showErrors();
  } 
}

}
