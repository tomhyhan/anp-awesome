import { Component, OnInit } from '@angular/core';
import { projectService } from 'src/app/services/master/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any = [];

  constructor(private projectService: projectService) { }

  ngOnInit(): void {
    this.projectService.getproject().subscribe((projects) => {
      console.log(projects);
      this.projects = projects;
    });
  }
  createTask(project: any) {
    this.projectService
      .addproject(project)
      .subscribe((project: any) => {
        this.projects = [...this.projects, project[0]];
      });
  }

  updateproject(project: any) {
    this.projectService
      .updateproject(project.project, project.id)
      .subscribe((updated: any) => {
        const newSpareParts = this.projects.map((project: any) => {
          if (project.id === updated[0].id) {
            return updated[0];
          }
          return project;
        });
        this.projects = newSpareParts;
      });
  }

}
