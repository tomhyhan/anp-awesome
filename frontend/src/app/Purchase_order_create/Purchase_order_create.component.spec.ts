import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Purchase_order_create } from './Purchase_order_create.component';

describe('SecondComponent', () => {
  let component: Purchase_order_create;
  let fixture: ComponentFixture<Purchase_order_create>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Purchase_order_create ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Purchase_order_create);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
