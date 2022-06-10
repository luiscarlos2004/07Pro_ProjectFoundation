import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
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
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    InicioComponent,
    AcercaDeComponent,
    AdoptameComponent,
    AdoptameFormComponent,
    // AgregarMascotasComponent,
    ContactoComponent,
    DaradopcionComponent,
    DonacionesComponent,
    DonacionesFormComponent,
    OpinionesComponent,
    Inicio2Component,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class ModulePrincipalModule { }
