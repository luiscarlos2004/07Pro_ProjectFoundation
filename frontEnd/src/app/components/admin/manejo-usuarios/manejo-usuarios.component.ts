import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Users } from 'src/app/models/users';
@Component({
  selector: 'app-manejo-usuarios',
  templateUrl: './manejo-usuarios.component.html',
  styleUrls: ['./manejo-usuarios.component.css']
})
export class ManejoUsuariosComponent implements OnInit {

  constructor(public ServicioService:ServiceService) { }

  ngOnInit(): void {
    this.cargarUsuarios()
  }
  cargarUsuarios(){
    this.ServicioService.getUsuariosDashbord().subscribe({
      next:(res)=>{this.ServicioService.user = res},
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
