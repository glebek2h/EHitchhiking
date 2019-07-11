import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePassangScreenComponent } from './rate-passang-screen.component';

describe('RatePassangScreenComponent', () => {
  let component: RatePassangScreenComponent;
  let fixture: ComponentFixture<RatePassangScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatePassangScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatePassangScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
