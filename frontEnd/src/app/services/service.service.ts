import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from '../models/users';
import { Mascota_modelo } from '../models/mascotas';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL= 'http://localhost:4000'
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
  getUsers(){
    let peticion = this.http.get<Users>(this.URL + '/api/users');
    return peticion;
  }
  postUsers(datos:Users){
    let peticion = this.http.post(this.URL + '/api/users', datos);
    return peticion;
  }

  getAdoptame(){
    let peticion = this.http.get<Mascota_modelo[]>(this.URL + '/api/users/get_Mascotas')
    return peticion
  }

  create(datos: Mascota_modelo){
  let peticion = this.http.post(this.URL + '/api/users/crear_mascota', datos);
  return peticion

  }
}
