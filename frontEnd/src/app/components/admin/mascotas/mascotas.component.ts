import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistrarAnimal } from 'src/app/models/registrarAnimal';
import Swal from 'sweetalert2';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['../manejo-usuarios/manejo-usuarios.component.css','../../../../../fontAwesome/css/all.min.css']
})
export class MascotasComponent implements OnInit {
  public page:number = 0
  constructor(public Servicio:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.paginador(0)
  }
  paginador(numero:any){
    this.Servicio.buscarAnimal(numero).subscribe({
      next:(res)=>{this.Servicio.animales = res},
      error:(err)=>{console.log(err)}
    })
  }
  prevp(){
    if(this.page > 0){
      this.page -= 5; 
    }
    this.paginador(this.page);
  }
  nextp(){
    this.page += 5;
    this.paginador(this.page);
  }
  eliminarmascota(id:any){
    Swal.fire({
      title: 'Quieres eliminar el elemento #: ' + id,
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancel`,
    }).then((result)=>{
      if(result.isConfirmed){
        this.Servicio.eliminarmascota(id).subscribe({
          next:(res)=>{
            console.log('hola')
            this.paginador(this.page);
          },
          error:(err)=>{
            console.log(err)
            // this.paginador(this.page);
          }
        })
      }else if(result.isDenied){
        Swal.fire('Cancelado con exito', '', 'info')
      }
    })
    
  }
  mandarEditar(datos:any){
    this.Servicio.animalesRegistra._id = datos._id;
    this.Servicio.animalesRegistra = datos
  }
  editaranimal(datos:NgForm){
    console.log(datos)
    this.Servicio.editarMascota(datos.value).subscribe({
      next:(res)=>{console.log(res)},
      error:(err)=>{console.log(err)}
    })
  }
  buscaranimal(datos:NgForm){
    this.Servicio.busquedaanimal(datos.value).subscribe({
      next:(res)=>{this.Servicio.animales = res},
      error:(err)=>{console.log(err)}
    })
    // this.paginador(datos)
  }
}
