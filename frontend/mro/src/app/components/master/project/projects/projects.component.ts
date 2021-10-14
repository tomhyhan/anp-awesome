import { Component, OnInit,ViewChild } from '@angular/core';
import { projectService } from 'src/app/services/master/project/project.service';
import { MatPaginator } from '@angular/material/paginator';
import { startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any = [];
  projectCount: any;
  filter = JSON.stringify('');

  displayedColumns: string[] = [
    'project_name',
    'project_code',
    'remarks',
    'active_id',
    'created_date',
    'end_date',
    'view',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private projectService: projectService) { }

  ngOnInit(): void {
    this.projectService.getprojectCount().subscribe((count) => {
      console.log(count);
      this.projectCount = count;
    });
  }


  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() =>
          this.projectService
            .getproject(
              this.filter,
              this.paginator.pageIndex,
              this.paginator.pageSize
            )
            .subscribe((projects) => {
              this.projects = projects;
            })
        )
      )
      .subscribe(() => {});
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
        const newProjects = this.projects.map((project: any) => {
          if (project.project_master_id === updated[0].project_master_id) {
            return updated[0];
          }
          return project;
        });
        this.projects = newProjects;
      });
  }

  searchproject(filter: any) {
    this.projectService.getprojectFilterCount(filter).subscribe((count) => {
      this.projectCount = count;
    });
    this.filter = filter;
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() =>
          this.projectService
            .getproject(
              this.filter,
              this.paginator.pageIndex,
              this.paginator.pageSize
            )
            .subscribe((projects) => {
              this.projects = projects;
            })
        )
      )
      .subscribe(() => {});
  }

}
