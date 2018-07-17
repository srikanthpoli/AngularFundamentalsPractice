import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventServiceService } from './event-service.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ResolveEventsService implements Resolve<any>{

  constructor(private eventsrvc:EventServiceService) { }

  resolve(){
    return this.eventsrvc.getEvents().pipe(map(events=>events))

  }
}
