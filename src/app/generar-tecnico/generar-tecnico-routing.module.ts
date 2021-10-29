import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarTecnicoPage } from './generar-tecnico.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarTecnicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarTecnicoPageRoutingModule {}
