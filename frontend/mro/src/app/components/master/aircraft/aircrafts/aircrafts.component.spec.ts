import { ComponentFixture, TestBed } from '@angular/core/testing'
import { aircraftsComponent } from './aircrafts.component';

describe('aircraftsComponent', () => {
  let component: aircraftsComponent;
  let fixture: ComponentFixture<aircraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ aircraftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(aircraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
