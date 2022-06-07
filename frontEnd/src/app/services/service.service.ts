import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from '../models/users';
import { tap } from 'rxjs/operators';
import { Register } from '../models/registerusers';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL= 'http://localhost:4000'
  constructor(private http:HttpClient) { }
  
  private _auth:Users | any;
  get auth():Users{
    return {...this._auth!}
  }
  user:Users[]=[];
  users:Users = {
    correo : '',
    password : ''
  }
  usersRegis:Register = {
    nombre:'',
    cedula:0,
    celular:0,
    direccion:'',
    correo:'',
    ocupacion:'',
    ingresos:0,
    edad:0,
    usuario:'',
    password:'',
    preferencias:'',
    sexo:'',
    imagenperfil:'',
    pasatiempo:''
    // fecha:''
  }
  postUsers(datos:Users){
    let peticion = this.http.post(this.URL + '/api/users', datos)
                    .pipe(
                      //para generar efectos secundarios
                      tap(auth => this._auth = auth)
                    );
    return peticion;
  }
  consultarEstado(id:string){
    let peticion = this.http.get(this.URL + '/api/users/' + id)
    return peticion;
  }
  registrarUsers(datos:Register){
    // console.log(datos)
    let peticion = this.http.post(this.URL + '/api/users/register', datos);
    return peticion;
  }
  getUsuariosDashbord(){
    let peticion = this.http.get<Users[]>(this.URL + '/api/users')
    return peticion;
  }
}
