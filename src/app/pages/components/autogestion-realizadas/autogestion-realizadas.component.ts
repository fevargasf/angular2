import { Component, OnInit } from '@angular/core';
import { BreakpointObserver  } from '@angular/cdk/layout';
@Component({
  selector: 'app-autogestion-realizadas',
  templateUrl: './autogestion-realizadas.component.html',
  styleUrls: ['./autogestion-realizadas.component.scss']
})


export class AutogestionRealizadasComponent implements OnInit {
  public estado: any;
  public expediente: any;
  public fechaExpediente: any;
  constructor() { }

  ngOnInit(): void {
    this.getdataLocalStorage();
 
  }

 public getdataLocalStorage(): void{
    const data = JSON.parse(localStorage.getItem('datosUsuario'));
    this.expediente = data.expediente;
    this.estado = data.estado;
    this.fechaExpediente = new Date();
  }

public responsive(event): void{
  console.log(event.target.innerWidth);
}

}
