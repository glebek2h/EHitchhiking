import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePassangersModalComponent } from './rate-passangers-modal.component';

describe('RatePassangersModalComponent', () => {
  let component: RatePassangersModalComponent;
  let fixture: ComponentFixture<RatePassangersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatePassangersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatePassangersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
