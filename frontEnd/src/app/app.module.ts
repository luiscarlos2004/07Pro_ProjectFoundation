import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdoptameComponent } from './components/adoptame/adoptame.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AgregarMascotasComponent } from './components/agregar-mascotas/agregar-mascotas.component';
import { ManejoUsuariosComponent } from './components/manejo-usuarios/manejo-usuarios.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { AdoptameFormComponent } from './components/adoptame-form/adoptame-form.component';
import { DonacionesFormComponent } from './components/donaciones-form/donaciones-form.component';
import { RecepcionDonacionesComponent } from './components/recepcion-donaciones/recepcion-donaciones.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { DaradopcionComponent } from './components/daradopcion/daradopcion.component';
import { SolicitudesDarAdopcionComponent } from './components/solicitudes-dar-adopcion/solicitudes-dar-adopcion.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdoptameComponent,
    InicioComponent,
    DonacionesComponent,
    ContactoComponent,
    DashbordComponent,
    AgregarMascotasComponent,
    ManejoUsuariosComponent,
    SolicitudesComponent,
    AdoptameFormComponent,
    DonacionesFormComponent,
    RecepcionDonacionesComponent,
    AcercaDeComponent,
    OpinionesComponent,
    DaradopcionComponent,
    SolicitudesDarAdopcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
