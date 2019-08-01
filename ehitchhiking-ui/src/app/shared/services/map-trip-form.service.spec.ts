import { TestBed } from '@angular/core/testing';

import { MapTripFormService } from './map-trip-form.service';

describe('MapTripFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapTripFormService = TestBed.get(MapTripFormService);
    expect(service).toBeTruthy();
  });
});
