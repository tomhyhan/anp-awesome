import { TestBed } from '@angular/core/testing';

import { aircraftService } from './aircraft.service';

describe('aircraftService', () => {
  let service: aircraftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(aircraftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
