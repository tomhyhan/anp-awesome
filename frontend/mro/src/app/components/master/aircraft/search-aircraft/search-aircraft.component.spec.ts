import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchaircraftComponent } from './search-aircraft.component';

describe('SearchaircraftComponent', () => {
  let component: SearchaircraftComponent;
  let fixture: ComponentFixture<SearchaircraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchaircraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchaircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
