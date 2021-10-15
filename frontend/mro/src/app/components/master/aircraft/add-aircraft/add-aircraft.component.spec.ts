import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaircraftComponent } from './add-aircraft.component';

describe('AddaircraftComponent', () => {
  let component: AddaircraftComponent;
  let fixture: ComponentFixture<AddaircraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaircraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});