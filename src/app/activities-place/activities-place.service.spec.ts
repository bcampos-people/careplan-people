import { TestBed, inject } from '@angular/core/testing';

import { ActivitiesPlaceService } from './activities-place.service';

describe('ActivitiesPlaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivitiesPlaceService]
    });
  });

  it('should be created', inject([ActivitiesPlaceService], (service: ActivitiesPlaceService) => {
    expect(service).toBeTruthy();
  }));
});
