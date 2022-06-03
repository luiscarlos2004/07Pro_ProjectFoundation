import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['../../app.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public mascotasServ: ServiceService) { }

  ngOnInit(): void {
    this.mascotasServ.getAdoptame().subscribe({
      next: (res)=> console.log('obteniendo Mascotas'),
      error: (err) => console.log(err),

    });
  }

}
