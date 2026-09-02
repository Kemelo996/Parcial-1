import { Component, Input } from '@angular/core';
import { PrincipioArquitectura } from '../../interfaces/principio.interface';

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
  /** Principios que se muestran en las filas de la tabla. */
  @Input() principios: PrincipioArquitectura[] = [];
}
