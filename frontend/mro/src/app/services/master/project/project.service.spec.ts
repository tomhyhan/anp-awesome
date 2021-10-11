import { TestBed } from '@angular/core/testing';

import { projectService } from './project.service';

describe('SparePartService', () => {
  let service: projectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(projectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
