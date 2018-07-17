import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../event-list/shared/event-service.service';
import { IEvent } from '../event-list';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {

  constructor( private route:Router,private eventServc:EventServiceService) { }
  newEvent:IEvent;
  isDirty:boolean=true;
  

  ngOnInit() {
    this.newEvent=
    { id: null,
      name: '',
      date: '',
      time: '',
      price: null,
      imageUrl: '',
      location: {
        address: '',
        city: '',
        country: '',
        
      }
      ,sessions:[],
      onlineUrl:''
    }
  }


  Cancel()
  {

this.route.navigate(['/events'])

  }

  onSubmit(){
    console.log("srikanthsave")
    this.isDirty=false;
  }

  saveEvent(formValues){
this.eventServc.setEvents(formValues);
this.isDirty=false;
this.route.navigate(['/events'])


console.log(formValues)
  }
}
