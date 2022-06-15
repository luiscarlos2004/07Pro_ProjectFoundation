import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManejoUsuariosComponent } from './manejo-usuarios/manejo-usuarios.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { RecepcionDonacionesComponent } from './recepcion-donaciones/recepcion-donaciones.component';
import { SolicitudesDarAdopcionComponent } from './solicitudes-dar-adopcion/solicitudes-dar-adopcion.component';
import { AgregarMascotasComponent } from './agregar-mascotas/agregar-mascotas.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { BalancesComponent } from './balances/balances.component';
const rutas:Routes = [
  {
    path:'',
    component:DashbordComponent,
    children:[
      {
        path:'usuarios',
        component:ManejoUsuariosComponent
      },
      {
        path:'solicitudesusers',
        component:SolicitudesComponent
      },
      {
        path:'donaciones',
        component:RecepcionDonacionesComponent
      },
      {
        path:'daradopcion',
        component:SolicitudesDarAdopcionComponent
      },
      {
        path:'balance',
        component:BalancesComponent
      },
      {
        path:'agregarmascota',
        component:AgregarMascotasComponent
      },
      {
        path:'mascotas',
        component:MascotasComponent
      },
      {
        path:'**',
        redirectTo:''
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }