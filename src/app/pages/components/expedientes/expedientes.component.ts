import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.component.html',
  styleUrls: ['./expedientes.component.scss']
})
export class ExpedientesComponent implements OnInit {
  @Input() formulario: FormGroup;
  @Output() expedienteDataOut = new EventEmitter<any>();
  public siguiente = true;
  public expediente: string;
  public estado: string;
  public asunto: string;
  public oficina: string;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getDataForm();
    this.selectsDisabled();

  }

  public getDataForm(): void{
    this.formulario = this.fb.group({
      expediente : new FormControl('',  Validators.required) ,
      estado: new FormControl('', Validators.required) ,
      asunto: new FormControl('', Validators.required) ,
      territorial: new FormControl('', Validators.required) ,
      comunicacion: new FormControl(false, Validators.requiredTrue)
    });
  }

  public expedientesData(data: any): void{
    this.expedienteDataOut.emit(data);
    console.log(data);
  }

  public optenerExpediente(data): void{
    if (data === ''){
      this.selectsDisabled();
    }else{
      console.log('lleno');
      this.selectsDisabled();
      this.expediente = data;
      this.getDataLocalStorage();
    }
  }



  public selectsDisabled(): void{
    this.formulario.controls['expediente'].disable();
    this.formulario.controls['estado'].disable();
    this.formulario.controls['asunto'].disable();
    this.formulario.controls['territorial'].disable();
  }

  public selectsEnabled(): void{
    this.formulario.controls['expediente'].enable();
    this.formulario.controls['estado'].enable();
    this.formulario.controls['asunto'].enable();
    this.formulario.controls['territorial'].enable();
  }

  public siguienteListaEx(expediente): void{
    this.router.navigate(['../../inicio', expediente]);
  }


  public getDataLocalStorage(): void{
    const datas = JSON.parse(localStorage.getItem('datosUsuario'));
    console.log(datas.estado);
    const newObject = {
      estado : datas.estado,
      asunto: datas.asunto,
      oficina: datas.oficina
    };
    this.estado = newObject.estado;
    this.asunto = newObject.asunto;
    this.oficina = newObject.oficina;
  }


}
