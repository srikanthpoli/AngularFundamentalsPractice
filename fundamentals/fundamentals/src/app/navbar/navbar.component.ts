import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AuthService } from '../user/login/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Output() outputEvent:any = new EventEmitter()
  constructor( private authSrvc:AuthService) { }
  searchValue:string;
  ngOnInit() {

  }


  
}
