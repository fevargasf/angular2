import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpedienteService } from 'src/app/core/services/expediente.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public formulario: FormGroup;
public loading = false;
  constructor(
    private fb: FormBuilder,
    private expedienteService: ExpedienteService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formBuilderData();
  }


  public cargarSecuencia(sec): void{

   const secuencia = {
      sequenceThirdParty: sec.secuencia
    };
   this.loading = true;
   this.expedienteService.postExpediente(secuencia).subscribe((data: any) => {
     const newObject = {
        expediente: data[0],
        cap: data[1],
        asunto:  data[2],
        estado:  data[3],
        oficina:  data[4],
        id:  data[5],
        tipo_identificacion:  data[6],
        cedula:  data[7],
        nombre:  data[8],
        direccion:  data[9],
        ciudad:  data[10],
        departamento:  data[11],
        celular:  data[13],
        telefono:  data[14],
     };
     console.log(newObject);
     this.guardarLocalStorageNombre(newObject);
     this.router.navigate(['/home']);
    });
  }

  public formBuilderData(): void{
    this.formulario = this.fb.group({
      secuencia: ['', [Validators.required]]
    });
  }

  public guardarLocalStorageNombre(data): void{
        localStorage.setItem('datosUsuario', JSON.stringify(data));
  }

}
