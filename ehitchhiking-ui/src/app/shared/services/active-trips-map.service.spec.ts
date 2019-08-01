import {TestBed} from '@angular/core/testing';

import {ActiveTripsMapService} from './active-trips-map.service';

describe('ActiveTripsMapService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: ActiveTripsMapService = TestBed.get(ActiveTripsMapService);
		expect(service).toBeTruthy();
	});
});
