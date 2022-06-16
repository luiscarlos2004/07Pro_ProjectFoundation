import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css','../../../../../fontAwesome/css/all.min.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(private ServiceService:ServiceService) { }

  ngOnInit(): void {
    // this.confirmarLogin();
  }

}
