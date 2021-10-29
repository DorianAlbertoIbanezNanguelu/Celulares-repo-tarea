import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    
  },
  {
    path: 'tables',
    loadChildren: () => import('./tables/tables.module').then( m => m.TablesPageModule)
  },
  {
    path: 'generar-cliente',
    loadChildren: () => import('./generar-cliente/generar-cliente.module').then( m => m.GenerarClientePageModule)
  },
  {
    path: 'generar-tecnico',
    loadChildren: () => import('./generar-tecnico/generar-tecnico.module').then( m => m.GenerarTecnicoPageModule)
  },
  {
    path: 'generar-celular',
    loadChildren: () => import('./generar-celular/generar-celular.module').then( m => m.GenerarCelularPageModule)
  },
  {
    path: 'editar-cliente',
    loadChildren: () => import('./editar-cliente/editar-cliente.module').then( m => m.EditarClientePageModule)
  },  {
    path: 'editar-tecnico',
    loadChildren: () => import('./editar-tecnico/editar-tecnico.module').then( m => m.EditarTecnicoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
