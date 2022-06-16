import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { AdoptameComponent } from './adoptame/adoptame.component';
import { AdoptameFormComponent } from './adoptame-form/adoptame-form.component';
// import { AgregarMascotasComponent } from '../admin/agregar-mascotas/agregar-mascotas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DaradopcionComponent } from './daradopcion/daradopcion.component';
import { DonacionesComponent } from './donaciones/donaciones.component';
import { DonacionesFormComponent } from './donaciones-form/donaciones-form.component';
import { InicioComponent } from './inicio/inicio.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { Inicio2Component } from './inicio2/inicio2.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { FormupdateusersComponent } from './formupdateusers/formupdateusers.component';
const rutas:Routes = [
  {
    path:'',
    component:InicioComponent,
    children:[
      {
        path:'acercade',
        component:AcercaDeComponent
      },
      {
        path:'inicioprincipal',
        component:Inicio2Component
      },
      {
        path:'adoptame',
        component:AdoptameComponent
      },
      {
        path:'adoptameform',
        component:AdoptameFormComponent
      },
      {
        path:'daradopcion',
        component:DaradopcionComponent
      },
      {
        path:'contacto',
        component:ContactoComponent
      },
      {
        path:'dardonacion',
        component:DonacionesFormComponent
      },
      {
        path:'donaciones',
        component:DonacionesComponent
      },
      {
        path:'donacionesform',
        component:DonacionesFormComponent
      },
      {
        path:'opiniones',
        component:OpinionesComponent
      },
      {
        path:'actualizaruser',
        component:FormupdateusersComponent
      },
      {
        path:'seguimiento',
        component:SeguimientoComponent
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
export class PrincipalRoutingModule { }
