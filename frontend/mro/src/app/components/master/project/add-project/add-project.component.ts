import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  ProjectCode: any;
  ProjectName: any;
  @Output() onCreateproject = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const project = {
      project_user: {
        project_name: this.ProjectName,
        project_code: this.ProjectCode,
        remarks:"new",
        active_id:1,
        created_by:"benny"
      },
    };

    this.onCreateproject.emit(project);
  }
}
