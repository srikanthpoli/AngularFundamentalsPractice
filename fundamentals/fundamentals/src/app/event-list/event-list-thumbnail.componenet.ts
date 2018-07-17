import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { IEvent } from './shared/event.model';



@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-list.component.thumbnail.child.html',
  styleUrls: ['./event-list.component.child.css']
})
export class EventListThumbNailComponent implements OnInit {

 @Input() event:IEvent;
 @Output() evnetClick:any = new EventEmitter()
  
   

  constructor() { }

  ngOnInit() {
   
  }
  HandleClick(){
      console.log("from child")
    this.evnetClick.emit(this.event);
  }

  logtest(){
    console.log("test variable template")
  }
  getStyleClassForTime(){
     if(this.event.time=== '8:00 am'){

return ['green','bold']
     }
     if(this.event.time=== '10:00 am'){

        return ['red','bold']
             }
  }

  getngStyleForTime(){

    if(this.event.time=== '8:00 am'){

        return {color:'green','font-weight':'bold'}
             }
             if(this.event.time=== '10:00 am'){
        
                return {color:'red','font-weight':'bold'}
                     }
  }

}


