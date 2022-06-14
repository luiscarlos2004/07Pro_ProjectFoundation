import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from '../models/users';
import {Donaciones_modelo} from '../models/donaciones';
import {Contactos_modelo } from '../models/contactos';
import {Experiencias_modelo} from '../models/experiencias';

import { Mascota_modelo } from '../models/mascotas';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL_API= 'http://localhost:4000'
  constructor(private http:HttpClient) { }

  documentos: Mascota_modelo[] =[];


  datosMascota: Mascota_modelo = {
  nombre: '',
  raza: '',
  edad:'',
  tamano: '',
  imagen: '',
  historial: '',
  vacunas: ''
  }

  users:Users = {
    correo : '',
    password : ''
  }

  donaciones:Donaciones_modelo[] = [];

  contactos:Contactos_modelo[] = [];

  experiencias:Experiencias_modelo[] = [];

  datosInputDonaciones: Donaciones_modelo = {
    nombre:'',
    cc:'',
    cuenta:'',
    valor: 0 ,
    cuotas: 0,
    banco:'',
  }

  datosInputContactos: Contactos_modelo = {
    nombre: '',
    tel:'',
    correo:'',
    asunto:'',
    descripcion: '',
  }

  datosInputExperiencias: Experiencias_modelo = {
    nombre: '',
    mascota: '',
    foto: '',
    comentario: '',
  }



  getUsers(){
    let peticion = this.http.get<Users>(this.URL_API + '/api/users');
    return peticion;
  }
  postUsers(datos:Users){
    let peticion = this.http.post(this.URL_API + '/api/users', datos);
    return peticion;
  }

  getAdoptame(){
    let peticion = this.http.get<Mascota_modelo[]>(this.URL_API + '/api/users/get_Mascotas')
    return peticion
    console.log("esta retornando la mascota")
  }

  create(datos: Mascota_modelo){
  let peticion = this.http.post(this.URL_API + '/api/users/crear_mascota', datos);
  return peticion
  

  }


 

  /*getExperiencias(){ 
    let peticion = this.http.get(this.URL + '/get_experiencias')
    return peticion
  }*/


  obtenerDonaciones(){
    //Crear petición al servidor (http) --> GET
    let peticion = this.http.get<Donaciones_modelo[]>(this.URL_API + '/api/users/get_donaciones')
    return peticion;
  }

  createDonaciones (datos: Donaciones_modelo){
    let peticion = this.http.post(this.URL_API + '/api/users/crear_donacion', datos);
    return peticion;
 }

  obtenerContactos() {
    let peticion = this.http.get<Contactos_modelo[]>(this.URL_API + '/api/users/get_contacto')
    return peticion;
 }
 
  createContactos (datos: Contactos_modelo){
  let peticion = this.http.post(this.URL_API + '/api/users/crear_contacto', datos);
  return peticion;
}

  obtenerExperiencias(){
  let peticion = this.http.get<Experiencias_modelo[]>(this.URL_API + '/api/users/get_experiencia')
  return peticion;
}

  createExperincias (datos: Experiencias_modelo){
  let peticion = this.http.post(this.URL_API+ '/api/users/crear_experiencia', datos);
  return peticion;
}

}
