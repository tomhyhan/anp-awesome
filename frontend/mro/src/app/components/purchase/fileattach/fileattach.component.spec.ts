import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileattachComponent } from './fileattach.component';

describe('FileattachComponent', () => {
  let component: FileattachComponent;
  let fixture: ComponentFixture<FileattachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileattachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileattachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
