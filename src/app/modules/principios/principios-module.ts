import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipiosRoutingModule } from './principios-routing-module';
import { PrincipiosComponent } from './principios.component';
import { ListPrincipiosComponent } from './pages/list-principios/list-principios.component';
import { TablePrincipios } from './components/table-principios/table-principios';

/**
 * Módulo funcional de principios.
 *
 * Agrupa el componente raíz, la página del listado y su tabla. Se carga de
 * forma diferida desde el enrutador principal de la aplicación.
 */
@NgModule({
  declarations: [
    PrincipiosComponent,
    ListPrincipiosComponent,
    TablePrincipios
  ],
  imports: [
    CommonModule,
    PrincipiosRoutingModule
  ]
})
export class PrincipiosModule { }
