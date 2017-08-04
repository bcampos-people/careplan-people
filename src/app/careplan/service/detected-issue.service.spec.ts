import { TestBed, inject } from '@angular/core/testing';

import { DetectedIssueService } from './detected-issue.service';

describe('DetectedIssueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetectedIssueService]
    });
  });

  it('should be created', inject([DetectedIssueService], (service: DetectedIssueService) => {
    expect(service).toBeTruthy();
  }));
});
