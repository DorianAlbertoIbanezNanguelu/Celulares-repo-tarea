import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarCelularPage } from './generar-celular.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarCelularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarCelularPageRoutingModule {}
