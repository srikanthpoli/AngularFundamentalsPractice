import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventServiceService } from '../event-list/shared/event-service.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteGaurdService   implements CanActivate{

  constructor( private eventsrvc: EventServiceService,private router:Router) { }

  canActivate(  route:ActivatedRouteSnapshot):any{

   const eventExists= (this.eventsrvc.getEvent(route.params['id']))
   if(!eventExists){
this.router.navigate(['/404'])
   }
   return true;;
  }
  

}


