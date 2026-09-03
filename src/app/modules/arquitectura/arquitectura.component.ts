import { Component } from '@angular/core';

/**
 * Componente contenedor del módulo de arquitectura.
 *
 * Renderiza el `router-outlet` donde se carga la lectura de arquitectura.
 */
@Component({
  selector: 'app-arquitectura.component',
  standalone: false,
  template: '<router-outlet></router-outlet>',
})
export class ArquitecturaComponent {
}
