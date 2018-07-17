import { TestBed, inject } from '@angular/core/testing';

import { ResolveEventsService } from './resolve-events.service';

describe('ResolveEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveEventsService]
    });
  });

  it('should be created', inject([ResolveEventsService], (service: ResolveEventsService) => {
    expect(service).toBeTruthy();
  }));
});
