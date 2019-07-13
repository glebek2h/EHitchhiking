import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePassengersModalComponent } from './rate-passengers-modal.component';

describe('RatePassengersModalComponent', () => {
  let component: RatePassengersModalComponent;
  let fixture: ComponentFixture<RatePassengersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatePassengersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatePassengersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
