import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service'
import { NgForm } from '@angular/forms';
import{AdoptameComponent} from '../adoptame/adoptame.component'
@Component({
  selector: 'app-agregar-mascotas',
  templateUrl: './agregar-mascotas.component.html',
  styleUrls: ['./agregar-mascotas.component.css']
})
export class AgregarMascotasComponent implements OnInit {

  constructor(public serviceServ: ServiceService) { }

  ngOnInit(): void {
   this.mascotasListado()
  }

  mascotasListado(){
    this.serviceServ.getAdoptame().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
 
     });

  }

  agregarMascota(form: NgForm){
  // console.log(form.value)
   this.serviceServ.create(form.value).subscribe(
     (res) => {
       console.log('Agregando una nueva mascota');
       this.mascotasListado();
       form.reset();
     },
     (err) => console.log(err)
   );

  }

}
