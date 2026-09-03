import { Component } from '@angular/core';

/**
 * Componente raíz de la funcionalidad de principios.
 *
 * Pertenece a `PrincipiosModule` y sirve como punto de entrada visual del
 * módulo cuando Angular carga su ruta lazy.
 */
@Component({
  selector: 'app-principios.component',
  standalone: false,
  templateUrl: './principios.component.html',
  styleUrl: './principios.component.scss',
})
export class PrincipiosComponent {
}
