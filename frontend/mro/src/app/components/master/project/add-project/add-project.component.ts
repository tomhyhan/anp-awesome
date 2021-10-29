import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  user:any
  ProjectCode: any;
  ProjectName: any;
  Enddate:any;
  Remarks:any;
  minDate = new Date().toLocaleDateString().replace('/','-').replace('/','-');
  @Output() onCreateproject = new EventEmitter();
  addprojectForm: FormGroup | any;
  errorhandlers: any;

  constructor(private formBuilder: FormBuilder,private authService: AuthService) { 
    this.authService.employee.subscribe(
      (employee) => (this.user = employee)
    );
  }

  ngOnInit(): void {
    // console.log(new Date().toLocaleDateString().replace('/','-').replace('/','-'))
    this.addprojectForm = this.formBuilder.group({
      project_code: ['', Validators.required],
      project_name: ['', Validators.required],
      remarks:[''],
      active_id: ['', Validators.required],
      star_date: ['',Validators.required],
      end_date: ['',Validators.required],
    });

    this.errorhandlers = new ErrorHandlers(this.addprojectForm);
    
  }
  onSubmit() {
    
    if (this.addprojectForm.valid) {
    const project = {
      project_user: {
        project_name: this.addprojectForm.value.project_name,
        project_code: this.addprojectForm.value.project_code,
        remarks:this.addprojectForm.value.remarks,
        active_id:parseInt(this.addprojectForm.value.active_id),
        created_by:this.user.username,
        star_date:this.addprojectForm.value.star_date,
        end_date:this.addprojectForm.value.end_date
      },
    };
    console.log(project)
    this.onCreateproject.emit(project);
    this.addprojectForm.reset();
  } else{
    this.errorhandlers.showErrors();

  }
  }
}
