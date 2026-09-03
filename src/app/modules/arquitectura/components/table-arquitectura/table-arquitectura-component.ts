import { Component } from '@angular/core';
import { DATOS_ARQUITECTURA } from '../../../../core/config/arquitectura.config';
import { ArquitecturaInterface } from '../../interfaces/arquitectura.interface';

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
  arquitecturaData: ArquitecturaInterface = DATOS_ARQUITECTURA;
}
