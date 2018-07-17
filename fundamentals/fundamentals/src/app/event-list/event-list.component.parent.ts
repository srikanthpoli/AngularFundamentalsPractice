import { Component, OnInit, Injectable, Input } from '@angular/core';
import { EventServiceService } from './shared/event-service.service';
import { ToastrService } from 'ngx-toastr';
import { MyToastrService } from '../common/toastr.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';







@Component({
  selector: 'app-event-list',
  templateUrl:'event-list.component.parent.html',
  styleUrls: ['./event-list.component.parent.css']
})
export class EventListComponent implements OnInit {
@Input() searchValue:string;
  
events: IEvent[];

ngOnChanges(){
  console.log(this.searchValue+"aSAS")
}
  constructor( private eventService: EventServiceService,
    private toastr: MyToastrService,
  private route:ActivatedRoute) { 
   
  }


  ngOnInit() {
   
  //return this.eventService.getEvents().pipe(map(events=>events))

   //this.eventService.getEvents().subscribe(events=>{this.events=events});
   this.events=this.route.snapshot.data['events']
 
  }

  hanleEventfromChild(value:any)
{
  console.log("From parent")
  console.log(value)
}

handleClick(value:string){
 
  console.log("srikanth")
  this.toastr.onSucess(value,value,{ positionClass:'toast-top-right', timeOut:5000, progressBar:true
  
  })


}
}
