import { TestBed } from '@angular/core/testing';

import { MaterialTaxService } from './material-tax.service';

describe('MaterialTaxService', () => {
  let service: MaterialTaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialTaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
