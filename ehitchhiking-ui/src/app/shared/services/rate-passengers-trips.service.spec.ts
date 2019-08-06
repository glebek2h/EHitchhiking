import {TestBed} from '@angular/core/testing';

import {RatePassengersTripsService} from './rate-passengers-trips.service';

describe('RatePassengersTripsService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: RatePassengersTripsService = TestBed.get(RatePassengersTripsService);
		expect(service).toBeTruthy();
	});
});
