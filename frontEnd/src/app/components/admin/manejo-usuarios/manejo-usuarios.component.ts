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
  public page:number = 0;
  ngOnInit(): void {
    // this.cargarUsuarios()
    this.paginador(0);
  }
  cargarUsuarios(){
    this.ServicioService.getUsuariosDashbord().subscribe({
      next:(res)=>{console.log(res),this.ServicioService.user = res},
      error:(err)=>{
        console.log(err);
      }
    })
  }
  paginador(numero:any){
    this.ServicioService.paginador(numero).subscribe({
      next:(res)=>{this.ServicioService.user = res},
      error:(err)=>{console.log(err)}
    })
  }
  prevp(){
    if(this.page > 0){
      this.page -= 5;
    }
    this.paginador(this.page)
  }
  nextp(){
    this.page += 5;
    this.paginador(this.page)
  }

}
