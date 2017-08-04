import { TestBed, inject } from '@angular/core/testing';

import { AlertsScopeService } from './alerts-scope.service';

describe('AlertsScopeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertsScopeService]
    });
  });

  it('should be created', inject([AlertsScopeService], (service: AlertsScopeService) => {
    expect(service).toBeTruthy();
  }));
});
