import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {ActivatedRoute} from '@angular/router'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['../../app.component.css',"../../../../fontAwesome/css/all.min.css"]
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

}
