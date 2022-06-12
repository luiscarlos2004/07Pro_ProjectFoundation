import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from '../models/users';
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


  obtenerDonaciones(){
    let peticion = this.http.get(this.URL_API + '/obtener_donaciones')
   return 


  }
}
