import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
@Input() modalI: any;
@Output() optenerExpedienteOut = new EventEmitter<any>();
public expediente: any;
  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
    this.getDataLocalStorage();
  }


  public closeModal(modal: any): void{
    this.modal.dismissAll();
  }

  public optenerExpediente(expediente: any): void{
      this.optenerExpedienteOut.emit(expediente);
  }

  public getDataLocalStorage(): void{
    const data = JSON.parse(localStorage.getItem('datosUsuario'));
    this.expediente = data.expediente;
    console.log(data.expediente);
  }

}
