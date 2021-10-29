import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarClientePageRoutingModule } from './generar-cliente-routing.module';

import { GenerarClientePage } from './generar-cliente.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GenerarClientePageRoutingModule
  ],
  declarations: [GenerarClientePage]
})
export class GenerarClientePageModule {}
