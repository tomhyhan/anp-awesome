import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayErrComponent } from './display-err.component';

describe('DisplayErrComponent', () => {
  let component: DisplayErrComponent;
  let fixture: ComponentFixture<DisplayErrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayErrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayErrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
