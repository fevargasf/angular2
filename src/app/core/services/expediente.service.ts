import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_EXPEDIENTE = environment.API_EXPEDIENTE;
@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {

  constructor(private http: HttpClient) { }

 public postExpediente(sec): Observable<object>{
   return this.http.post(`${API_EXPEDIENTE}expediente`, sec);
 }

 public postResolucion$(res): Observable<object>{
   return this.http.post(`${API_EXPEDIENTE}resolucion`, res);
 }
}
