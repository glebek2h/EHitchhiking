import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TripRegistrationComponent} from './trip-registration.component';

describe('TripRegistrationComponent', () => {
	let component: TripRegistrationComponent;
	let fixture: ComponentFixture<TripRegistrationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TripRegistrationComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TripRegistrationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
