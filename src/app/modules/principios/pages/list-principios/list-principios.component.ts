import { Component } from '@angular/core';
import { PRINCIPIOS_ARQUITECTURA_DATA } from '../../interfaces/principio.interface';

/**
 * Página contenedora del listado de principios.
 *
 * Su responsabilidad es componer la vista usando `TablePrincipios`; la carga
 * y transformación de datos se incorporará aquí cuando el servicio tenga API.
 */
@Component({
  selector: 'app-list-principios.component',
  standalone: false,
  templateUrl: './list-principios.component.html',
  styleUrl: './list-principios.component.scss',
})
export class ListPrincipiosComponent {
  /** Contenido didáctico que se presenta en esta página. */
  principiosData = PRINCIPIOS_ARQUITECTURA_DATA;
}
