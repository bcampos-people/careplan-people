import { TestBed, inject } from '@angular/core/testing';

import { ValuesetService } from './valueset.service';

describe('ValuesetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValuesetService]
    });
  });

  it('should be created', inject([ValuesetService], (service: ValuesetService) => {
    expect(service).toBeTruthy();
  }));
});
