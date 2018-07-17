import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EventServiceService } from 'src/app/event-list/shared/event-service.service';
import { ActivatedRoute } from '@angular/router';
import { MyToastrService } from '../common/toastr.service';
import { IEvent, Isession } from '../event-list/shared/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  addMode:boolean;

  constructor(private toastr:MyToastrService,
     private eventservice:EventServiceService,private activatedroute:ActivatedRoute)
      { 

      this.id=this.activatedroute.snapshot.params['id']
      this.event=this.eventservice.getEvent(this.id);
        this.handleSucess();
       
     }

  ngOnInit() {

 
 
  }

  saveNewSession(session:Isession){
    const nextId= Math.max.apply(null,this.event.sessions.map(s=>s.id))
    session.id=nextId+1;
    this.event.sessions.push(session);
    this.eventservice.updateEvent(this.event)
    this.addMode=false
  }
  addSession(){
    console.log("clicked")
    if(this.addMode==true)
    this.addMode=false
    else
    this.addMode=true
  }
  handleSucess(){
    this.toastr.onSucess(this.event.name,this.event.name,{ positionClass:'toast-top-right', timeOut:5000, progressBar:true
  
  }


)



 
    
  }

  event:IEvent;
  id: number;
 

}
