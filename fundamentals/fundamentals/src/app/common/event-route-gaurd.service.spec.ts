import { TestBed, inject } from '@angular/core/testing';

import { EventRouteGaurdService } from './event-route-gaurd.service';

describe('EventRouteGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRouteGaurdService]
    });
  });

  it('should be created', inject([EventRouteGaurdService], (service: EventRouteGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
