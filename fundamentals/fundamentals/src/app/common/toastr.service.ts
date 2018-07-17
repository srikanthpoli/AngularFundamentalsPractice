import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { config } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MyToastrService {

  constructor( private toastr:ToastrService) { }

  onSucess(message:string,Title:string,config:any){
    this.toastr.success(message,Title,config)
  }


  onInfo(message:string,Title:string){
    this.toastr.info(message,Title)
  }

  onError(message:string,Title:string){
    this.toastr.error(message,Title)
  }

  onWarning(message:string,Title:string){
    this.toastr.warning(message,Title)
  }
}
