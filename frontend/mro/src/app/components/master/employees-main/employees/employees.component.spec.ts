import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeesComponent } from './employees.component';

<<<<<<< HEAD
<<<<<<< HEAD:frontend/mro/src/app/components/master/employees-main/employees/employees.component.spec.ts
=======
>>>>>>> e05ff3ec5eac9ec76e9344a81f065e7883a75261
describe('Employees component', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesComponent ]
<<<<<<< HEAD
=======
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ]
>>>>>>> e05ff3ec5eac9ec76e9344a81f065e7883a75261:frontend/mro/src/app/components/master/project/projects/projects.component.spec.ts
=======
>>>>>>> e05ff3ec5eac9ec76e9344a81f065e7883a75261
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD
<<<<<<< HEAD:frontend/mro/src/app/components/master/employees-main/employees/employees.component.spec.ts
    fixture = TestBed.createComponent(EmployeesComponent);
=======
    fixture = TestBed.createComponent(ProjectsComponent);
>>>>>>> e05ff3ec5eac9ec76e9344a81f065e7883a75261:frontend/mro/src/app/components/master/project/projects/projects.component.spec.ts
=======
    fixture = TestBed.createComponent(EmployeesComponent);
>>>>>>> e05ff3ec5eac9ec76e9344a81f065e7883a75261
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
