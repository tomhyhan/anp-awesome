import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Purchase_order } from './Purchase_order.component';

describe('FirstComponent', () => {
  let component: Purchase_order;
  let fixture: ComponentFixture<Purchase_order>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Purchase_order ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Purchase_order);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
