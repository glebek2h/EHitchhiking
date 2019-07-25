import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTripsModalComponent } from './active-trips-modal.component';

describe('ActiveTripsModalComponent', () => {
  let component: ActiveTripsModalComponent;
  let fixture: ComponentFixture<ActiveTripsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTripsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTripsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
