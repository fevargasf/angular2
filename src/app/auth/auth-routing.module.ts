import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuridicoNaturalComponent } from './components/juridico-natural/juridico-natural.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RepresentanteLegalComponent } from './components/representante-legal/representante-legal.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
