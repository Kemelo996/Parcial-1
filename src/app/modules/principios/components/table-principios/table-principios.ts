import { Component } from '@angular/core';

/**
 * Presenta la tabla de principios dentro de la página del listado.
 *
 * El componente está declarado en `PrincipiosModule` y utiliza una plantilla
 * separada para facilitar la evolución de la vista y sus estilos.
 */
@Component({
  selector: 'app-table-principios',
  standalone: false,
  templateUrl: './table-principios.html',
  styleUrl: './table-principios.scss',
})
export class TablePrincipios {
}
