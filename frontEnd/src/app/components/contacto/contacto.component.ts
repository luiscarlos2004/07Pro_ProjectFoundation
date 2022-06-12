import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public servicio: ServiceService) { }

  ngOnInit(): void {
    this.listadoContactos();
  }


  listadoContactos(){
    this.servicio.obtenerContactos().subscribe({
      next: (res) => {
        console.log('------ Obteniendo contactos - READ ------');
        this.servicio.contactos = res;
      },
      error: (err) => console.log(err),
    })
  }

  agregarContacto(form: NgForm){
    console.log(form.value);
    this.servicio.createContactos(form.value).subscribe(
      (res) => {
        console.log('------ Agregando un nuevo video - CREATE ------');
        this.listadoContactos();
        form.reset();
      },
      (err) => console.log(err)
    )
  }

}
