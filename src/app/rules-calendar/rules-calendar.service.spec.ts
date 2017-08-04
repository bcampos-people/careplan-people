import { TestBed, inject } from '@angular/core/testing';

import { RulesCalendarService } from './rules-calendar.service';

describe('RulesCalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RulesCalendarService]
    });
  });

  it('should be created', inject([RulesCalendarService], (service: RulesCalendarService) => {
    expect(service).toBeTruthy();
  }));
});
