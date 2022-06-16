import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { NgForm } from '@angular/forms';;

@Component({
  selector: 'app-experiencias',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit {

  constructor(public servicio: ServiceService) { }

  ngOnInit(): void {
    this.listadoExperiencias();
  }

  listadoExperiencias(){
    this.servicio.obtenerExperiencias().subscribe({
      next: (res) => {
        // console.log('------ Obteniendo experiencias - READ ------');
        this.servicio.experiencias = res;
      },
      error: (err) => console.log(err),
    });
  }

  agregarExperiencia(form: NgForm){
    console.log(form.value);
    this.servicio.createExperincias(form.value).subscribe(
      (res) => {
      console.log('------ Agregando una nueva experiencia - CREATE ------');
      this.listadoExperiencias();
      form.reset();
      },
      (err) => console.log(err)
      );

  }

}

