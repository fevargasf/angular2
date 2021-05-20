import { Component, Input, OnInit } from '@angular/core';
import { Resolucion } from 'src/app/auth/interfaces/resolucion.interface';


@Component({
  selector: 'app-table-resolucion',
  templateUrl: './table-resolucion.component.html',
  styleUrls: ['./table-resolucion.component.scss']
})
export class TableResolucionComponent implements OnInit {
@Input() resoluciones: Resolucion[] = [];
@Input() isLoading: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
