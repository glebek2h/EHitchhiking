import { TestBed } from '@angular/core/testing';

import { MenuRatePassangersService } from './menu-rate-passangers.service';

describe('MenuRatePassangersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuRatePassangersService = TestBed.get(MenuRatePassangersService);
    expect(service).toBeTruthy();
  });
});
