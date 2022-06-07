import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL= 'http://localhost:4000'
  constructor(private http:HttpClient) { }
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
    let peticion = this.http.get(this.URL + '/get_Mascotas')
    return peticion
  }


  getExperiencias(){ 
    let peticion = this.http.get(this.URL + '/get_experiencias')
    return peticion
  }
}
