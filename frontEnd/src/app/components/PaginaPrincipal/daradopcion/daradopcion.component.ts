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
  }

  // guardarArchivo(dato:NgForm){
  //   this.Servicio.informaciondar(dato.value).subscribe({
  //     next:(res)=>{console.log(res)},
  //     error:(err)=>{console.log(err)}
  //   })
  // }

}
