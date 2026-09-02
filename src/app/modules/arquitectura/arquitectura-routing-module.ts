import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquitecturaComponent } from './arquitectura.component';

const routes: Routes = [
  {
    path: 'arquitectura',
    component: ArquitecturaComponent
  },
  {
    path: '**',
    redirectTo: 'arquitectura'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArquitecturaRoutingModule { }
