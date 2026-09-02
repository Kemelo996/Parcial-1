import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipiosRoutingModule } from './principios-routing-module';
import { PrincipiosComponent } from './principios.component';
import { Inicio } from './pages/inicio/inicio';
import { ListPrincipiosComponent } from './pages/list-principios/list-principios.component';


@NgModule({
  declarations: [
    PrincipiosComponent,
    Inicio,
    ListPrincipiosComponent
  ],
  imports: [
    CommonModule,
    PrincipiosRoutingModule
  ]
})
export class PrincipiosModule { }
