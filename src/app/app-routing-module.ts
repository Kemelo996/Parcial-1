import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'arquitectura',
    loadChildren: () => import('./modules/arquitectura/arquitectura-module').then(m => m.ArquitecturaModule)
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
