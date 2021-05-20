import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpedienteService } from 'src/app/core/services/expediente.service';


@Component({
  selector: 'app-adjuntar',
  templateUrl: './adjuntar.component.html',
  styleUrls: ['./adjuntar.component.scss']
})
export class AdjuntarComponent implements OnInit {
  public nombreArchivo: string ;
  public ocultarObligacion = true;
  public valueArchivo: string;
  @Output() atrasPrimeroOut = new EventEmitter<any>();
  public atras = true;
  public visualizarBtn = false;
  public valueCheck = 1;
  public contador = 0;
  public cantidadObligaciones = [];
  public mostrarContenido = false;
  public expediente: any;
  public resoluciones: any[] = [];
  public isLoading = false;
  public  displayBlock = false;
  public pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  constructor(
    private activeRoute: ActivatedRoute,
    private expedienteService: ExpedienteService
    ) { }

  ngOnInit(): void {
    this.expedienteUrl();
    this.getDataLocalStorage();
  }

  public cargar(val: any): void{
    console.log(val);
    this.nombreArchivo = val.files[0].name;
    this.valueArchivo = val.value;
    if (this.valueArchivo === ''){
      console.log('no cargo nada', this.valueArchivo);
      this.visualizarBtn = false;
    }else {
      console.log('si cargo algo', this.valueArchivo);
      this.visualizarBtn = true;
    }
  }

  public visualizar(archivo): void{
    console.log(archivo);
    this.mostrarContenido = true;
  }

  public deleteAdj(checbox): void{
    if (checbox){
      this.nombreArchivo = '';
    }
  }

  public atrasPrimero(): void{
    this.atrasPrimeroOut.emit(this.atras);
  }

  public anadirObligaciones(): void{
    this.contador += 1;
    this.cantidadObligaciones.push(this.contador);
    this.ocultarObligacion = false;
  }

  public expedienteUrl(): void{
    this.activeRoute.params.subscribe((expediente: any) =>{
      console.log(expediente.expediente);
      this.expediente = expediente.expediente;
    });
  }

  public getDataLocalStorage(): void{
    const data = JSON.parse(localStorage.getItem('datosUsuario'));
    console.log(data);
    this.postExpediente(data.id);
  }

  public postExpediente(expe): void{
    const newObject = {
      sequenceThirdParty2: expe
    }
    this.isLoading = true;
    this.expedienteService.postResolucion$(newObject).subscribe((expediente) => {
      console.log(expediente);
      const objectDate = {
        id: expediente[0],
        radicado: expediente[1],
        fecha: expediente[2],
        descripcion: expediente[3],
        pdf: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'
      };
      this.resoluciones.push(objectDate);
      this.isLoading = false;
    });
  }


  public guardarObligacion(): void{
    this.ocultarObligacion = false;
  }


}
