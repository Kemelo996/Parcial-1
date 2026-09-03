import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrincipiosComponent } from './pages/list-principios/list-principios.component';

/**
 * Rutas internas del módulo de principios.
 *
 * El enrutador principal carga este módulo mediante `/principios`. Al entrar
 * a esa ruta, se redirige al listado para mostrar su contenido.
 */
const routes: Routes = [
  {
    path: 'list-principios',
    component: ListPrincipiosComponent
  },
  {
    path: '**',
    redirectTo: 'list-principios'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipiosRoutingModule { }
