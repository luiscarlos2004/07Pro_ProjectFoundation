import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';
import { Adop } from 'src/app/models/adoptame';
@Component({
  selector: 'app-adoptame',
  templateUrl: './adoptame.component.html',
  styleUrls: ['./adoptame.component.css']
})
export class AdoptameComponent implements OnInit {

  constructor(public servicio:ServiceService) { }
  get auth(){
    return this.servicio.auth
  }
  ngOnInit(): void {
    this.sacaranimales()
  }
  pasarpersona(){}
  sacaranimales(){
    this.servicio.buscaraniamalesfront().subscribe({
      next:(res)=>{this.servicio.animales = res},
      error:(err)=>{console.log(err)}
    })
  }
  adoptame(ida:any){
    const idu = this.auth._id;
    let obj:Adop = {
      ida,
      idu
    }
    Swal.fire({
      title: 'Quieres adoptarme',
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancel`,
      showConfirmButton:true
    }).then((result) => {
      if(result.isConfirmed){
        this.servicio.solicitudadopcion(obj).subscribe({
          next:(res)=>{console.log(res)},
          error:(err)=>{console.log(err)}
        });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'solicitud recibida',
          showConfirmButton: false,
          timer: 2000,
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("https://www.gifsanimados.org/data/media/202/perro-imagen-animada-0811.gif")
            left top
            no-repeat
          `
        })
        
      }else if(result.isDenied){
        Swal.fire('Cancelado con exito', '', 'error')
      }
    })
    console.log(obj)
  }

  

}
