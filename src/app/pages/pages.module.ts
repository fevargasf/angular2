import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AdjuntarComponent } from './components/adjuntar/adjuntar.component';
import { AutogestionRealizadasComponent } from './components/autogestion-realizadas/autogestion-realizadas.component';
import { ConfirmacionEnvioComponent } from './components/confirmacion-envio/confirmacion-envio.component';
import { ExpedienteProcesoComponent } from './components/expediente-proceso/expediente-proceso.component';
import { ExpedientesComponent } from './components/expedientes/expedientes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NuevoExpedienteComponent } from './components/nuevo-expediente/nuevo-expediente.component';
import { ResumenDatosComponent } from './components/resumen-datos/resumen-datos.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AdjuntarComponent,
    AutogestionRealizadasComponent,
    ConfirmacionEnvioComponent,
    ExpedienteProcesoComponent,
    ExpedientesComponent,
    InicioComponent,
    NuevoExpedienteComponent,
    ResumenDatosComponent,
 

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PdfViewerModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MaterialModule
  ]
})
export class PagesModule { }
