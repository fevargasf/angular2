import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public isLinear = false;
  public isEditable1 = false;
  public completo1 = false;
  public formulario1: FormGroup;
  public isEditable2 = false;
  public completo2 = false;
  constructor() { }

  ngOnInit(): void {

  }

  public siguientePrimero(estado: any): void{
    this.completo1 = estado;
    this.isEditable1 = !estado;
  }

  public atrasPrimero(estado: any): void {
    this.completo1 = !estado;
    this.isEditable1 = estado;
  }

  public expedienteData(data: any): void{
    console.log(data);
  }

}
