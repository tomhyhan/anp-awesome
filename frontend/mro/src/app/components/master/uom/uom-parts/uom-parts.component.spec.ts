import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UomPartsComponent } from './uom-parts.component';

describe('UomsComponent', () => {
  let component: UomPartsComponent;
  let fixture: ComponentFixture<UomPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UomPartsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UomPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
