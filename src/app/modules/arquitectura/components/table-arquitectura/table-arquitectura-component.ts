import { Component } from '@angular/core';
import { DATIS_ARQUITECTURA } from '../../../../core/config/arquitectura.config';

/**
 * Componente que presenta la información de arquitectura de software como
 * una lectura organizada por partes y temas.
 */
@Component({
  selector: 'app-table-arquitectura',
  standalone: false,
  templateUrl: './table-arquitectura-component.html',
})
export class TableArquitecturaComponent {
  /** Datos académicos que se muestran en la plantilla de lectura. */
  arquitecturaData = DATIS_ARQUITECTURA;
}
