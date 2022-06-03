import { FormsModule } from '@angular/forms';
import { Component, OnInit, Input,Output } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { NgForm } from '@angular/forms';
import { Users } from 'src/app/models/users';
import { BrowserModule } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { EventEmitter } from 'stream';
// declare var JQuery:any;
// declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(public servicioComponent:ServiceService, private router:Router) { }
  nuevo:Users={
    correo:'',
    password:''
  }
  ngOnInit(): void {
  }
  
  enviardatos(datos:NgForm){
    
    this.servicioComponent.postUsers(datos.value).subscribe({
      next:(res)=>{
        console.log(res);
        @Output() valueResponse: EventEmitter<string> = new EventEmitter();
        Swal.fire({
          position: 'center',
          icon: 'success',
          titleText: 'Iniciado seccion correctamente',
          showConfirmButton: false,
          width:450,
          timer: 1500
        })
        this.router.navigate(['inicio'])
      },
      error:(err)=>{
        // alert('Correo o contraseña no son validas')
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar seción',
          text: 'La contraseña o el correo no son validos',
          width:500,
          // showConfirmButton: false boton ok
          confirmButtonColor: '#3085d5',
          
        })
        datos.reset();
      }
    })
   
  }

}
