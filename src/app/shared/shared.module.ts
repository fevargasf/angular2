import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableResolucionComponent } from './components/table-resolucion/table-resolucion.component';



@NgModule({
  declarations: [
    ModalComponent,
    NavbarComponent,
    TableResolucionComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [NavbarComponent, ModalComponent,TableResolucionComponent]
})
export class SharedModule { }
