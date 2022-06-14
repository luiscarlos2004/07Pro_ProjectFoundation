import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { NgForm } from '@angular/forms';;

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['../../app.component.css', '../../app.component.animate.css']
})
export class ExperienciasComponent implements OnInit {

  constructor(public servicio: ServiceService) { }

  ngOnInit(): void {
    this.listadoExperiencias();
  }

  listadoExperiencias(){
    this.servicio.obtenerExperiencias().subscribe({
      next: (res) => {
        console.log('------ Obteniendo experiencias - READ ------');
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
