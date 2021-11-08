import { TestBed } from '@angular/core/testing';

import { fileattachService } from './fileattach.service';

describe('SparePartService', () => {
  let service: fileattachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(fileattachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
