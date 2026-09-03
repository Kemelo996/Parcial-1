import { Component, inject } from '@angular/core';
import { ArquitecturaInterface } from '../../interfaces/arquitectura.interface';
import { ArquitecturaService } from '../../services/arquitectura.service';

/** Página que inicia la lectura informativa del módulo de arquitectura. */
@Component({
  selector: 'app-list-arquitectura.component',
  standalone: false,
  template: '<app-table-arquitectura></app-table-arquitectura>',
})
export class ListArquitecturaComponent {
  arquitecturaData!: ArquitecturaInterface;
  private moduleTestService = inject(ArquitecturaService);
  nOgOnInit(): void {
    this.moduleTestService.getDatosArquitectura().subscribe((data) => {
      this.arquitecturaData = data;
    });
  }
}
