import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
public nombreUsuario: string;
public dialogRef: any;
public horizontalPosition: MatSnackBarHorizontalPosition = 'start' ;
public verticalPosition: MatSnackBarVerticalPosition  = 'top' ;
  constructor(
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getDataLocalStorage();
    this.openSnackBar();
  }

  public getDataLocalStorage(): void{
    const data = JSON.parse(localStorage.getItem('datosUsuario'));
    console.log(data);
    this.nombreUsuario = data.nombre;
  }


  public siguientePrimero(estado: any): void{

  }


  public expedienteData(data: any): void{
    console.log(data);
  }

  public cerrarSession(): void{
    localStorage.removeItem('datosUsuario');
  }

  public openSnackBar() {
    this.snackBar.open(`Bienvenido: ${this.nombreUsuario}`, 'Aceptar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  ngOnDestroy(): void{
      this.snackBar.dismiss();
  }
}
