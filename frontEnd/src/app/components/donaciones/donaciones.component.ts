import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  constructor(public servicio: ServiceService) { }

  ngOnInit(): void {
    this.listadoDonaciones();
  }

  listadoDonaciones(){
    this.servicio.obtenerDonaciones().subscribe({
      next: (res) => {
      console.log('------ Obteniendo donaciones - READ ------');
      this.servicio.donaciones = res;
      },
      error: (err) => console.log(err),
    })
  }


  agregarDonacion(form: NgForm){
    this.servicio.createDonaciones(form.value).subscribe(
      (res) => {
        console.log('------ Agregando una nueva donacion - CREATE ------'),
        this.listadoDonaciones(); //llamo al metodo para obtener documentos
        form.reset();
      },
      (err) => console.log(err),
    );
  }

}
