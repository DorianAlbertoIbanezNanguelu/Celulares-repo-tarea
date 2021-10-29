import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarTecnicoPageRoutingModule } from './editar-tecnico-routing.module';

import { EditarTecnicoPage } from './editar-tecnico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarTecnicoPageRoutingModule
  ],
  declarations: [EditarTecnicoPage]
})
export class EditarTecnicoPageModule {}
