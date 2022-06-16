import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from '../models/users';
import { tap } from 'rxjs/operators';
import { Register } from '../models/registerusers';
import { RegistrarAnimal } from '../models/registrarAnimal';
import { Adop } from '../models/adoptame';
import { Solicitudes } from '../models/solicitudesmodel';
import { Buscar } from '../models/buscar';
import { Archivos } from '../models/archivo';
import { Experiencias_modelo } from '../models/experiencias';
import { Balance } from '../models/balance';
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
  user:Register[]=[];
  archi:Archivos[]=[];
  animales:any=[];
  solici:Solicitudes[]=[];
  procesoSoli:Solicitudes[]=[];
  busca:any=[];
  buscarUser:any=[];
  infoactu:Register[] = [];
  archiv:Archivos = {
    archivo:''
  }
  balan:Balance[]=[];
  balance:Balance = {
    usuarios:0,
    animales:0,
    solicitudes:0
  }
  buscar:Buscar = {
    busqueda:'',
    nombre:'',
    edad:0,
    raza:'',
    imagen:'',
    tamano:'',
    vacunas:'',
  }
  users:Users = {
    correo : '',
    password : ''
  }
  // userss:Users[]=[];
  usersRegis:any = {
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
  
  animalesRegistra:RegistrarAnimal = {
    nombre:'',
    edad:0,
    raza:'',
    imagen:'',
    tamano:'',
    vacunas:'',
  }
  datosInputExperiencias: Experiencias_modelo = {
    nombre: '',
    mascota: '',
    foto: '',
    comentario: '',
  }
experiencias:Experiencias_modelo[] = [];
  
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
  paginador(numero:any){
    let peticion = this.http.get<Register[]>(this.URL + '/api/users/paginador/' + numero);
    return peticion;
  }
  agregarAnimaldos(datos:RegistrarAnimal){
    let peticion = this.http.post(this.URL + '/api/users/registraranimal', datos);
    return peticion;
  }
  // mostrarAnimal(){
  //   let peticion = this.http.get<RegistrarAnimal[]>(this.URL + '/api/users/mostraranimal');
  //   return peticion;
  // }
  buscarAnimal(numero:any){
    let peticion = this.http.get<RegistrarAnimal[]>(this.URL + '/api/users/consultar/animales/' + numero);
    return peticion;
  }
  eliminarmascota(id:string){
    let peticion = this.http.delete(this.URL + '/api/users/eliminaranimal/' + id);
    return peticion;
  }
  editarMascota(datos:RegistrarAnimal){
    console.log(datos)
    let peticion = this.http.put(this.URL + '/api/users/editar/editaranimal/'+datos._id,datos);
    return peticion;
  }
  buscaraniamalesfront(){
    let peticion = this.http.get<RegistrarAnimal[]>(this.URL + '/api/users/sacaranimal/animales');
    return peticion;
  }
  solicitudadopcion(dato:Adop){
    let peticion = this.http.post(this.URL + '/api/users/colocando/solicitudes',dato)
    return peticion
  }
  obtenersolicitudes(){
    let peticion = this.http.get<Solicitudes[]>(this.URL + '/api/users/solicitud/solicitudesanimales')
    return peticion
  }
  aceptarsolicitud(id:any){
    let peticion = this.http.get(this.URL + '/api/users/solicituda/solicitudanimal/' + id )
    return peticion
  }
  busquedaanimal(datos:Buscar){
    let peticion = this.http.post(this.URL + '/api/users/buscan/buscaranimal',datos)
    return peticion
  }
  denegarsolicitud(id:any){
    let peticion = this.http.get(this.URL + '/api/users/solicitude/denegarsolicitud/'+ id)
    return peticion
  }
  seguimientoSolici(id:any){
    console.log(id)
    let peticion = this.http.get<Solicitudes[]>(this.URL + '/api/users/solicitudes/seguimientosoli/' + id)
    return peticion
  }
  informaciondar(dato:Archivos){
    let peticion = this.http.post(this.URL + '/api/users/cargar/cargararchivos',dato)
    return peticion
  }
  eliminarpersona(id:any){
    let peticion = this.http.delete(this.URL + '/api/users/users/eliminaruser/' + id)
    return peticion
  }
  editarol(datos:any){
    let peticion = this.http.put(this.URL + '/api/users/users/editarol',datos)
    return peticion
  }
  buscarusers(datos:Register){
    let peticion = this.http.post(this.URL + '/api/users/users/buscaruser',datos)
    return peticion
  }
  actualizarusers(datos:Register){
    console.log(datos._id)
    let peticion = this.http.put(this.URL + '/api/users/userspage/actualizar/'+datos._id,datos);
    return peticion
  }
  traerdatos(){
    let id = this.auth._id
    let peticion = this.http.get<Register[]>(this.URL + '/api/users/userspage/traerinfoactu/'+id)
    return peticion
  }
  obtenerExperiencias(){
    let peticion = this.http.get<Experiencias_modelo[]>(this.URL + '/api/users/experiencias/get_experiencia')
    return peticion;
  }
  
    createExperincias (datos: Experiencias_modelo){
    let peticion = this.http.post(this.URL + '/api/users/experiencias/crear_experiencia', datos);
    return peticion;
  }
  mostrarbalance(){
    let peticion = this.http.get<Balance[]>(this.URL + '/api/users/balance/datos');
    return peticion;
  }
  daradopcion(datos:RegistrarAnimal){
    let peticion = this.http.post(this.URL + '/api/users/dar/daradopcion', datos)
    return peticion;
  }
}
