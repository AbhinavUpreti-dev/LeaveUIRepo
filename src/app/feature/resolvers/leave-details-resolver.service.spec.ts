import { TestBed } from '@angular/core/testing';

import { LeaveDetailsResolverService } from './leave-details-resolver.service';

describe('LeaveDetailsResolverService', () => {
  let service: LeaveDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveDetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
