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
    password : '',
    
  }
  postUsers(datos:Users){
    let peticion = this.http.post(this.URL + '/api/users', datos);
    return peticion;
  }
  consultarActivo(){
    let peticion = this.http.get(this.URL + '/api/users');
    return peticion
  }
}
