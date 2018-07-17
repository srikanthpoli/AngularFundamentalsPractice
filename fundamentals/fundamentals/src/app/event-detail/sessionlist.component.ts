import { Component, OnInit, Input } from '@angular/core';
import { Isession } from '.';

@Component({
  selector: 'app-sessionlist',
  templateUrl: './sessionlist.component.html',
  styleUrls: ['./sessionlist.component.css']
})
export class SessionlistComponent implements OnInit {

  
  @Input() session:Isession;
  constructor() { }

  ngOnInit() {
  }

}
