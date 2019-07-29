import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TripsModalComponent} from './trips-modal.component';

describe('TripsModalComponent', () => {
	let component: TripsModalComponent;
	let fixture: ComponentFixture<TripsModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TripsModalComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TripsModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
