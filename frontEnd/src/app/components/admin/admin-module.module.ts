import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManejoUsuariosComponent } from './manejo-usuarios/manejo-usuarios.component';
import { RecepcionDonacionesComponent } from './recepcion-donaciones/recepcion-donaciones.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SolicitudesDarAdopcionComponent } from './solicitudes-dar-adopcion/solicitudes-dar-adopcion.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    DashbordComponent,
    ManejoUsuariosComponent,
    RecepcionDonacionesComponent,
    SolicitudesComponent,
    SolicitudesDarAdopcionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModuleModule { }
