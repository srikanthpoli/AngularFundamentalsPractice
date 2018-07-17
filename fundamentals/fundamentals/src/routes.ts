import { EventDetailComponent } from "src/app/event-detail/event-detail.component";
import { EventListComponent } from "./app/event-list/event-list.component.parent";
import{Routes} from '@angular/router'
import { CreateeventComponent } from "./app/createevent/createevent.component";
import { Error404Component } from "./app/errors/404.component";
import { EventRouteGaurdService } from "./app/common/event-route-gaurd.service";
import { ResolveEventsService } from "./app/event-list/shared/resolve-events.service";
import { CreateSessionComponent } from "./app/createSession/create-session/create-session.component";




export const appRoutes:Routes=[
    {path:'events/new',component:CreateeventComponent,canDeactivate:['canDeactivateCreateEvent']},
    {path:'events',component:EventListComponent,resolve:{events:ResolveEventsService}},
    {path:'events/:id',component:EventDetailComponent,canActivate:[EventRouteGaurdService]},
    {path:'events/session/new',component:CreateSessionComponent},
    {path:'404',component:Error404Component},
    {path:'user',loadChildren:'./user/user.module#UserModule'}

]
