import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['../manejo-usuarios/manejo-usuarios.component.css','../../../../../fontAwesome/css/all.min.css']
})
export class SolicitudesComponent implements OnInit {

  constructor(public servicioanimales:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.obtenersolicitudes()
  }
  obtenersolicitudes(){
    this.servicioanimales.obtenersolicitudes().subscribe({
      next:(res)=>{this.servicioanimales.solici = res},
      error:(err)=>{console.log(err)}
    })
  }
  aceptarsolicitud(id:any){
    this.servicioanimales.aceptarsolicitud(id).subscribe({
      next:(res)=>{console.log(res),this.obtenersolicitudes()},
      error:(err)=>{console.log(err)}
    })
  }
  denegarsolici(id:any){
    this.servicioanimales.denegarsolicitud(id).subscribe({
      next:(res)=>{console.log(res),this.obtenersolicitudes()},
      error:(err)=>{console.log(err)}
    })
  }

}
