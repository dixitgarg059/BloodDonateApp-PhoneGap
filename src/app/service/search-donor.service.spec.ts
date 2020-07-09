import { TestBed } from '@angular/core/testing';

import { SearchDonorService } from './search-donor.service';

describe('SearchDonorService', () => {
  let service: SearchDonorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchDonorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
