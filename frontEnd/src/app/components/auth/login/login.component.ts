import { FormsModule } from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { NgForm } from '@angular/forms';
import { Users } from 'src/app/models/users';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
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
  forma={
    'clase1':false
  }
  enviardatos(datos:NgForm){
    
    this.servicioComponent.postUsers(datos.value).subscribe({
      next:(res)=>{
        
        this.consultarEstados(res)
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          titleText: 'Iniciado sesion correctamente',
          showConfirmButton: false,
          width:450,
          timer: 1500
        });
        datos.reset();

        const obj:any = res;
        const keys:any = Object.entries(obj)
        let v = keys[4]
        for(let i = 0; i < v.length; i++){
          let rol = v[i]
          if(rol=='ADMIN'){
            this.router.navigate(['admin/']);
          }else{
            this.router.navigate(['pagina/']);
          }
        }
        // this.router.navigate(['pagina/']);
      },
      error:(err)=>{
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
  consultarEstados(id:any){
    this.servicioComponent.consultarEstado(id._id).subscribe({
      next:(res)=>{
        if(res){
          console.log('estas activo')
          this.forma['clase1']=true;
        }
      },
      error:(err)=>{console.log(err)}
    })
  }
}
