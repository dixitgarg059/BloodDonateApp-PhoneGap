import { TestBed } from '@angular/core/testing';

import { FirebaseUiAuthService } from './firebase-ui-auth.service';

describe('FirebaseUiAuthService', () => {
  let service: FirebaseUiAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseUiAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
