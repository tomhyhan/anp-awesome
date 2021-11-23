import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAndTaxComponent } from './material-and-tax.component';

describe('MaterialAndTaxComponent', () => {
  let component: MaterialAndTaxComponent;
  let fixture: ComponentFixture<MaterialAndTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAndTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAndTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
