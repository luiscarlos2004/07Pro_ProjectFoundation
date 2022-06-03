import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdoptameComponent} from './components/adoptame/adoptame.component'
import {InicioComponent} from './components/inicio/inicio.component'
import{AcercaDeComponent} from './components/acerca-de/acerca-de.component'
import {DaradopcionComponent} from './components/daradopcion/daradopcion.component'
import {DonacionesComponent} from './components/donaciones/donaciones.component'
import {RegistroComponent} from './components/registro/registro.component'
import {ContactoComponent} from './components/contacto/contacto.component'

const routes: Routes = [{

path: "adoptame",
component: AdoptameComponent,

},
{
path: "inicio",
component: InicioComponent

},
{
path:"acerca",
component: AcercaDeComponent

},
{
path:"daradopcion",
component: DaradopcionComponent

},
{
path: "donaciones",
component:DonacionesComponent


},
{
path: 'registro',
component: RegistroComponent

},
{
  path: 'contacto',
  component: ContactoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
