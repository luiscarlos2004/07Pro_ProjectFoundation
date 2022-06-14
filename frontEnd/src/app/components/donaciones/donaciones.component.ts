import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { NgForm } from '@angular/forms';
import {Donaciones_modelo} from '../../models/donaciones';

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

  listadoDonaciones() {
    this.servicio.obtenerDonaciones().subscribe({
      next: (res) => {
        console.log('------ Obteniendo donaciones - READ ------');
        this.servicio.donaciones = res;
      },
      error: (err) => console.log(err),
    })
  }


  /*agregarDonacion(form: NgForm) {
    this.servicio.createDonaciones(form.value).subscribe(
      (res) => {
        console.log('------ Agregando una nueva donacion - CREATE ------'),
          this.listadoDonaciones(); //llamo al metodo para obtener documentos
        form.reset();
      },
      (err) => console.log(err),
    );
  }*/

  eliminarDonaciones(id: any) {
    let respuesta = confirm('Desea eliminar la Donacion?' + id);
    console.log(respuesta); //true o false
    if (respuesta == true) {
      //Hizo click en Aceptar
      this.servicio.deleteDonaciones(id).subscribe(
        (res) => {
          console.log('------ Eliminando un nuevo registro - DELETE ------');
          this.listadoDonaciones();
        },
        (err) => console.log(err)
      );
    }
  }

  actualizarDonaciones(donacion: Donaciones_modelo) {
    console.log(donacion);
    this.servicio.datosInputDonaciones = donacion;
  }


  agregarDonacion(form: NgForm) {
    if (form.value._id) {
      //Actualizamos un registro
      this.servicio.actualizarDonaciones(form.value).subscribe(
        (res) => {
          console.log('------ Modificando un registro - UPDATE ------');
          this.listadoDonaciones();
          form.reset();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      //Creamos uno nuevo
      this.servicio.createDonaciones(form.value).subscribe(
        (res) => {
          console.log('------ Agregando un nuevo video - CREATE ------');
          this.listadoDonaciones();
          form.reset();
          console.log(res);
        },
        (err) => console.log(err)
      );
    }
  }

  limpiarFormulario(formulario: NgForm) {
    formulario.reset();
   }


}
