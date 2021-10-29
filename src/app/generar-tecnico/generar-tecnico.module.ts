import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarTecnicoPageRoutingModule } from './generar-tecnico-routing.module';

import { GenerarTecnicoPage } from './generar-tecnico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GenerarTecnicoPageRoutingModule
  ],
  declarations: [GenerarTecnicoPage]
})
export class GenerarTecnicoPageModule {}
