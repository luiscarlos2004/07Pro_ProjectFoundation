import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styles: [
  ]
})
export class SeguimientoComponent implements OnInit {

  constructor(public servicio:ServiceService) { }

  ngOnInit(): void {
    let id = this.servicio.auth._id
    this.consultarsolicitudes(id)
  }
  
  consultarsolicitudes(id:any){
    this.servicio.seguimientoSolici(id).subscribe({
      next:(res)=>{this.servicio.procesoSoli = res},
      error:(err)=>{console.log(err)}
    })
  }

}
