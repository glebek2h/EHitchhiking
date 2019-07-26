import {TestBed} from '@angular/core/testing';

import {BlackListApiService} from './black-list-api.service';

describe('BlackListApiService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: BlackListApiService = TestBed.get(BlackListApiService);
		expect(service).toBeTruthy();
	});
});
