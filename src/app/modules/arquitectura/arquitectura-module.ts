import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArquitecturaRoutingModule } from './arquitectura-routing-module';
import { ArquitecturaComponent } from './arquitectura.component';
import { ListArquitecturaComponent } from './pages/list-arquitectura/list-arquitectura.component';
import { TableArquitecturaComponent } from './components/table-arquitectura/table-arquitectura-component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    ArquitecturaComponent,
    ListArquitecturaComponent,
    TableArquitecturaComponent
  ],
  imports: [
    CommonModule,
    ArquitecturaRoutingModule,
    SharedModule
  ]
})
export class ArquitecturaModule { }
