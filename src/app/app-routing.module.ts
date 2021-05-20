import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'inicio',
        loadChildren: () => import('../app/pages/pages.module').then(m => m.PagesModule),
      },
      {
        path: 'inicio/:expediente',
        loadChildren: () => import('../app/pages/pages.module').then(m => m.PagesModule),
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
