import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTripAdditionalInfoComponent } from './active-trip-additional-info.component';

describe('ActiveTripAdditionalInfoComponent', () => {
  let component: ActiveTripAdditionalInfoComponent;
  let fixture: ComponentFixture<ActiveTripAdditionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTripAdditionalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTripAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
