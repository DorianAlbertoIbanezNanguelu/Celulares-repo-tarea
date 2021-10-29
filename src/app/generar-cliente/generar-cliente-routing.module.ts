import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarClientePage } from './generar-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarClientePageRoutingModule {}
