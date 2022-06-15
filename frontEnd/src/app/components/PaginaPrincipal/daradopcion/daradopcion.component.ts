import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-daradopcion',
  templateUrl: './daradopcion.component.html',
  styleUrls: ['./daradopcion.component.css']
})
export class DaradopcionComponent implements OnInit {

  constructor(public Servicio:ServiceService) { }

  ngOnInit(): void {
    this.listadoDaradopcion();
  }

  listadoDaradopcion() {
    this.Servicio.obtenerDarenAdpcion().subscribe({
    next: (res) => {
    console.log('------ Obteniendo documentos de dar en adopcion');
    this.Servicio.darAdopcion = res;
    },
    error: (err) => console.log(err),
    });
    }
    

    agregarDaradopcion(form: NgForm){
      console.log(form.value);
      this.Servicio.crear_DarAdopcion(form.value).subscribe(
        (res) => {
        console.log('------ Agregando un nuevo dar en adopcion');
        this.listadoDaradopcion(); 
        form.reset(); 
        },
        (err) => console.log(err)
        );
       }
    }


