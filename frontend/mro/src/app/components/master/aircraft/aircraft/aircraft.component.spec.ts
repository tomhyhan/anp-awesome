import { ComponentFixture, TestBed } from '@angular/core/testing';

import { aircraftComponent } from './aircraft.component';

describe('aircraftComponent', () => {
  let component: aircraftComponent;
  let fixture: ComponentFixture<aircraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ aircraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(aircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
