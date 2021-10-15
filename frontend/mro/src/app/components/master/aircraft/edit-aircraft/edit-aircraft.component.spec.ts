import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaircraftComponent } from './edit-aircraft.component';

describe('EditaircraftComponent', () => {
  let component: EditaircraftComponent;
  let fixture: ComponentFixture<EditaircraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaircraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
