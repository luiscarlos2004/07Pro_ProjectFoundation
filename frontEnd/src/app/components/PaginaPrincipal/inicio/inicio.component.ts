import { Component, Input,OnInit } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { Users } from '../../../models/users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //!decir siempre un valor
  // auth!:Users;
  get auth(){
    return this.ServiceService.auth
  }
  
  constructor(private ServiceService:ServiceService, private router:Router) { }
  cerrar(){
    this.router.navigate(['auth/login']);
  }
  ngOnInit(): void {
  }

}
