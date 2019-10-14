import { TestBed } from '@angular/core/testing';

import { BeerDataService } from './beer-data.service';

describe('BeerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerDataService = TestBed.get(BeerDataService);
    expect(service).toBeTruthy();
  });
});
