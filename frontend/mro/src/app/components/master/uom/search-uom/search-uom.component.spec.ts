import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUomComponent } from './search-uom.component';

describe('SearchSparePartComponent', () => {
  let component: SearchUomComponent;
  let fixture: ComponentFixture<SearchUomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});