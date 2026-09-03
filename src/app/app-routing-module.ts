import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'arquitectura',
    loadChildren: () => import('./modules/arquitectura/arquitectura-module').then(m => m.ArquitecturaModule)
  },
  {
    path: 'principios',
    loadChildren: () => import('./modules/principios/principios-module').then(m => m.PrincipiosModule)
  },
  {
    path: '**',
    redirectTo: 'arquitectura'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
