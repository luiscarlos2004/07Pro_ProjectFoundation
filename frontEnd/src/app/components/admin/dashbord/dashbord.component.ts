import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css','../../../../../fontAwesome/css/all.min.css']
})
export class DashbordComponent implements OnInit {

  constructor(public servicio:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  cerrar(){
    this.router.navigate(['auth/login']);
  }

  

}
