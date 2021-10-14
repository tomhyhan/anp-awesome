import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSparePartComponent } from './search-spare-part.component';

describe('SearchSparePartComponent', () => {
  let component: SearchSparePartComponent;
  let fixture: ComponentFixture<SearchSparePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSparePartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSparePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
