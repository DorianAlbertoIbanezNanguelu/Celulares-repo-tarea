import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarCelularPageRoutingModule } from './generar-celular-routing.module';

import { GenerarCelularPage } from './generar-celular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GenerarCelularPageRoutingModule
  ],
  declarations: [GenerarCelularPage]
})
export class GenerarCelularPageModule {}
