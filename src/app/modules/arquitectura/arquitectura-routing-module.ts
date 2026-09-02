import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquitecturaComponent } from './arquitectura.component';
import { ListArquitecturaComponent } from './pages/list-arquitectura/list-arquitectura.component';

const routes: Routes = [
  {
    path: '',
    component: ArquitecturaComponent,
    children: [
      {
        path: '',
        component: ListArquitecturaComponent
      }
    ]
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
