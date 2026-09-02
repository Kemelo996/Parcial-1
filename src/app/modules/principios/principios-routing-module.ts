import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Rutas internas del módulo de principios.
 *
 * La lista está vacía actualmente; el enrutador principal solo carga el
 * módulo mediante `/principios` hasta que se definan rutas hijas.
 */
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipiosRoutingModule { }
