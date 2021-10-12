import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUomPartComponent } from './edit-uom.component';

describe('EditUomPartComponent', () => {
  let component: EditUomPartComponent;
  let fixture: ComponentFixture<EditUomPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUomPartComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUomPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
