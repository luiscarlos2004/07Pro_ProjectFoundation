import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-mascotas',
  templateUrl: './agregar-mascotas.component.html',
  styleUrls: ['../manejo-usuarios/manejo-usuarios.component.css']
})
export class AgregarMascotasComponent implements OnInit {
  
  constructor(public ServicioAdmin:ServiceService) { }

  ngOnInit(): void {
    // this.paginador();
  }
  agregarAnimal(datos:NgForm){
    this.ServicioAdmin.agregarAnimaldos(datos.value).subscribe({
      next:(res)=>{
        console.log(res)
        // this.ServicioAdmin.animales = res
        console.log(res)
        Swal.fire({
          position: 'center',
          icon: 'success',
          titleText: 'Datos guardados con exito',
          showConfirmButton: false,
          width:450,
          timer: 1500
        });
        datos.reset();
      },
      error:(err)=>{
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Error al guardar los datos',
          text: 'Datos invalidos',
          width:500,
          confirmButtonColor: '#3085d5', 
        })
      }
    })
  }
  // public page:number = 0;
  // paginador(){
  //   this.ServicioAdmin.mostrarAnimal().subscribe({
  //     next:(res)=>{this.ServicioAdmin.animales = res},
  //     error:(err)=>{console.log(err)}
  //   })
  // }
  // prevp(){
  //   if(this.page > 0){
  //     this.page -= 5;
  //   }
  //   this.paginador(this.page)
  // }
  // nextp(){
  //   this.page += 5;
  //   this.paginador(this.page)
  // }
}

