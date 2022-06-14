import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service'
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
import{AgregarMascotasComponent} from '../agregar-mascotas/agregar-mascotas.component'


@Component({
  selector: 'app-adoptame',
  templateUrl: './adoptame.component.html',
  styleUrls: ['../../app.component.css']
})
export class AdoptameComponent implements OnInit {

  constructor(public serviceServ: ServiceService) {}

  ngOnInit(): void {
    this.mascotasListado();
  }

  mascotasListado(){
    this.serviceServ.getAdoptame().subscribe({
      next: (res) => {
      console.log("obteniendo mascotas");
      this.serviceServ.documentos = res;
      },
      error: (err) => console.log(err),
          
     });

  }


  agregarMascota(form: NgForm){
    // console.log(form.value)
     this.serviceServ.create(form.value).subscribe(
       (res) => {
         console.log('Agregando una nueva masc');
         this.mascotasListado();
         form.reset();
       },
       (err) => console.log(err)
     );
  
    }
  
  }
  

