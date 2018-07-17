import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ FormControl,Validators,FormGroup} from '@angular/forms'
import { Isession } from '../../event-list';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  @Output() saveNewSession= new EventEmitter()

  constructor() { }

  ngOnInit() {



    this.name=new FormControl('',Validators.required);
    this.presenter=new FormControl('',Validators.required);
    this.duration=new FormControl('',Validators.required);
    this.level=new FormControl('',Validators.required);
    this.abstract=new FormControl('',[ Validators.required,
      Validators.maxLength(400),
    this.restrictedWordss]);

    this.newSessionForm=new FormGroup({
      name:this.name,
      presenter:this.presenter,
      duration:this.duration,
      level:this.level,
      abstract:this.abstract
})

    
  }

  name:FormControl;
  presenter:FormControl;
  duration:FormControl;
  level:FormControl;
  abstract:FormControl;
  newSessionForm:FormGroup;
  session:Isession;
  restrictedWordsi:any=['sri','foo','sha']

  containswords:String;
   private restrictedWordss(control:FormControl):any {

   var invalidwords=
    ['sri ','foo','sha'].map(words=>
control.value.includes(words)?words:null  
    
    ).filter(w=>w!=null)
    console.log(invalidwords)

  return {'restrictedWordings':invalidwords.join(', ')}
 

}


returning(words:any){

  console.log(words)
}

  SaveSession(newSessionForm)
{
  console.log(newSessionForm);
  this.session={
    name:newSessionForm.name,
    duration:newSessionForm.duration,
    level:newSessionForm.level,
    abstract:newSessionForm.abstract,
    presenter:newSessionForm.presenter,
    voters:[],
    id:undefined


  }
  this.saveNewSession.emit(this.session)
}

}
