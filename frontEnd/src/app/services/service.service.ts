import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from '../models/users';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL= 'http://localhost:4000'
  constructor(private http:HttpClient) { }
  user:Users[]=[];
  private _auth:Users | any;
  get auth():Users{
    return {...this._auth!}
  }
  users:Users = {
    correo : '',
    password : ''
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
}
