import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { EventsAppComponent } from './app.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import  { EventDetailComponent,EventListComponent,EventListThumbNailComponent} from './event-detail/index'


import { NavbarComponent } from './navbar/navbar.component';
import{BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr'
import { MyToastrService } from './common/toastr.service';
import { HttpModule } from '@angular/http';

import { EventServiceService } from './event-list/shared/event-service.service';

  import { appRoutes } from '../routes';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { CreateeventComponent } from './createevent/createevent.component';
import { Error404Component } from './errors/404.component';
import { EventRouteGaurdService } from './common/event-route-gaurd.service';
import { ResolveEventsService } from './event-list/shared/resolve-events.service';
import { AuthService } from './user/login/auth.service';
import { CreateSessionComponent } from './createSession/create-session/create-session.component';
import { SessionlistComponent } from './event-detail/sessionlist.component';
import { CollpsableWellComponent } from './common/commonComponents/collpsable-well.component';



 


@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,EventListThumbNailComponent, NavbarComponent, EventDetailComponent, CreateeventComponent
 ,Error404Component, CreateSessionComponent, SessionlistComponent, CollpsableWellComponent
  ],
  imports: [ RouterModule.forRoot(appRoutes),FormsModule,ReactiveFormsModule,
    BrowserModule,BsDropdownModule.forRoot(),CollapseModule.forRoot(),
    BrowserAnimationsModule,ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [MyToastrService,EventServiceService,EventRouteGaurdService,
  {provide:'canDeactivateCreateEvent',useValue: checkDirtyState},
  ResolveEventsService,
  AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }


export function checkDirtyState(componenet:CreateeventComponent){

  if(componenet.isDirty==true){
    return window.confirm('you have not saved , do you wish to continue?, then please click save')
     
  }

     if(componenet.isDirty==false){
      return true; 
    }


}
