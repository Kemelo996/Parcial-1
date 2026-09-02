import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasDeDisenoRoutingModule } from './sistemas-de-diseno-routing-module';
import { TableSistemasDeDiseno } from './components/table-sistemas-de-diseno/table-sistemas-de-diseno';
import { TableSistemasDeDisenoComponent } from './components/table-sistemas-de-diseno.component/table-sistemas-de-diseno.component';
import { ListSistemasDeDisenoComponent } from './pages/list-sistemas-de-diseno/list-sistemas-de-diseno.component';


@NgModule({
  declarations: [
    TableSistemasDeDiseno,
    TableSistemasDeDisenoComponent,
    ListSistemasDeDisenoComponent
  ],
  imports: [
    CommonModule,
    SistemasDeDisenoRoutingModule
  ]
})
export class SistemasDeDisenoModule { }
