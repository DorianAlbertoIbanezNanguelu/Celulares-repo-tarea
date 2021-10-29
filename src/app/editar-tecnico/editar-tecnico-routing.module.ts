import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarTecnicoPage } from './editar-tecnico.page';

const routes: Routes = [
  {
    path: '',
    component: EditarTecnicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarTecnicoPageRoutingModule {}
