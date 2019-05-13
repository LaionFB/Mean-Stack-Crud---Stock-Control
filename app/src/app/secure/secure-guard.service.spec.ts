import { TestBed } from '@angular/core/testing';

import { SecureGuardService } from './secure-guard.service';

describe('SecureGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecureGuardService = TestBed.get(SecureGuardService);
    expect(service).toBeTruthy();
  });
});
