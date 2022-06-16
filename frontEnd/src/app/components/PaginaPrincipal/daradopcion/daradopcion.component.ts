import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-daradopcion',
  templateUrl: './daradopcion.component.html',
  styleUrls: ['./daradopcion.component.css']
})
export class DaradopcionComponent implements OnInit {

  constructor(public Servicio:ServiceService) { }

  ngOnInit(): void {
  }
  daradopcion(datos:NgForm){
    this.Servicio.daradopcion(datos.value).subscribe({
      next:(res)=>{
        Swal.fire({
        position: 'center',
        icon: 'success',
        titleText: 'Post creado correctamente',
        showConfirmButton: false,
        width:450,
        timer: 1500
      }),datos.reset()},
      error:(err)=>{console.log(err)}
    })
  }
  // guardarArchivo(dato:NgForm){
  //   this.Servicio.informaciondar(dato.value).subscribe({
  //     next:(res)=>{console.log(res)},
  //     error:(err)=>{console.log(err)}
  //   })
  // }

}
