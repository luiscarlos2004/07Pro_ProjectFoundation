import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';
  constructor(private ServiceService:ServiceService){}
  consultarActivo(){
    this.ServiceService.consultarActivo().subscribe({
      next:(req)=>{console.log(req)},
      error:(res)=>{console.log(res)}
    })
  }
  
}
