import {TestBed} from '@angular/core/testing';

import {DialogListService} from './dialog-list.service';

describe('DialogListService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: DialogListService = TestBed.get(DialogListService);
		expect(service).toBeTruthy();
	});
});
