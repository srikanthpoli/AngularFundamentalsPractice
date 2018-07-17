import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collpsable-well',
  templateUrl: './collpsable-well.component.html',
  styleUrls: ['./collpsable-well.component.css']
})
export class CollpsableWellComponent implements OnInit {

  constructor() { }
  @Input() title:string;
  visible:boolean=false;


  toggleContent()
{ this.visible=!this.visible;}

  ngOnInit() {

  }

}
