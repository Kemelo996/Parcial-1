import { Component } from '@angular/core';

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
}
