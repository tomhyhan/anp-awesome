import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSparePartComponent } from './edit-spare-part.component';

describe('EditSparePartComponent', () => {
  let component: EditSparePartComponent;
  let fixture: ComponentFixture<EditSparePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSparePartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSparePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
