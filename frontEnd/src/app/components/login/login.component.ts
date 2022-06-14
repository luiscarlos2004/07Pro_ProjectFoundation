
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { NgForm } from '@angular/forms';
import { Users } from 'src/app/models/users';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public servicioComponent:ServiceService) { }

  ngOnInit(): void {
    this.getUsers2()
  }
  enviardatos(datos:NgForm){
    this.servicioComponent.postUsers(datos.value).subscribe({
      next:(res)=>{
        console.log(res)
        if(res == true){
          console.log('si es valido')
        }
      },
      error:(err)=>{console.log(err)}
    })
   
  }
  getUsers2(){
    this.servicioComponent.getUsers().subscribe({
      next:(res)=>{console.log(res)},
      error:(err)=>{console.log(err)}
    })
  }

}
