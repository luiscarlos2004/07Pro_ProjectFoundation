import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../../services/service.service';
import { Register } from 'src/app/models/registerusers';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  nuevo:String = ''
  constructor(public ServiceService:ServiceService) { }

  ngOnInit(): void {
  }
  registrarUsers(datos:NgForm){
    // console.log(datos)
    this.ServiceService.registrarUsers(datos.value).subscribe({
      next:(res)=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          titleText: 'Usuario creado con exito',
          showConfirmButton: false,
          width:450,
          timer: 1500
        });
        datos.reset();
      },
      error:(err)=>{
        Swal.fire({
          icon: 'error',
          title: 'Error al guardar los datos',
          text: 'Este correo ya esta en uso',
          width:500,
          confirmButtonColor: '#3085d5', 
        })
      }
    })
  }

}
