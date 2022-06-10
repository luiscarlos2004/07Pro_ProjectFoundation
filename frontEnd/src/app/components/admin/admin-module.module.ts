
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManejoUsuariosComponent } from './manejo-usuarios/manejo-usuarios.component';
import { RecepcionDonacionesComponent } from './recepcion-donaciones/recepcion-donaciones.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SolicitudesDarAdopcionComponent } from './solicitudes-dar-adopcion/solicitudes-dar-adopcion.component';
import { AgregarMascotasComponent } from './agregar-mascotas/agregar-mascotas.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MascotasComponent } from './mascotas/mascotas.component';

@NgModule({
  declarations: [
    DashbordComponent,
    ManejoUsuariosComponent,
    RecepcionDonacionesComponent,
    SolicitudesComponent,
    SolicitudesDarAdopcionComponent,
    AgregarMascotasComponent,
    MascotasComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModuleModule { }
