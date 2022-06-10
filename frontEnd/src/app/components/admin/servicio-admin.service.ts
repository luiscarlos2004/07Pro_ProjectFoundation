import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrarAnimal } from 'src/app/models/registrarAnimal';
@Injectable({
  providedIn: 'root'
})
export class ServicioAdminService {
  URL= 'http://localhost:4000'
  constructor( private http:HttpClient) { }

  animales:RegistrarAnimal[]=[];
  animalesRegistra:RegistrarAnimal = {
    nombre:'',
    edad:'',
    raza:'',
    imagen:'',
    tamano:'',
    vacunas:'',
  }

  agregarAnimaldos(datos:RegistrarAnimal){
    let peticion = this.http.post(this.URL + '/api/users/registraranimal', datos);
    return peticion;
  }
  animalesget(){
    let peticion =  this.http.get<RegistrarAnimal[]>(this.URL + '/api/users/consultar/animales')
    return peticion;
  }
}
