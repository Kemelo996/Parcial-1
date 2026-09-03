import { Component, inject } from '@angular/core';
import { ArquitecturaInterface } from '../../interfaces/arquitectura.interface';
import { ArquitecturaService } from '../../services/arquitectura.service';

/**
 * Página principal del módulo de arquitectura.
 *
 * Se encarga de iniciar la lectura del contenido académico y
 * renderizar el componente de tabla que expone la información
 * organizada por partes.
 */
@Component({
  selector: 'app-list-arquitectura.component',
  standalone: false,
  template: '<app-table-arquitectura></app-table-arquitectura>',
})
export class ListArquitecturaComponent {
  /**
   * Datos del módulo de arquitectura cargados desde la configuración.
   *
   * Se almacenan en este atributo para ser consumidos por la vista
   * y presentados en el componente de contenido.
   */
  arquitecturaData!: ArquitecturaInterface;

  /**
   * Servicio responsable de entregar los datos del módulo.
   */
  private moduleTestService = inject(ArquitecturaService);

  /**
   * Inicializa la carga del contenido informativo del módulo.
   *
   * @remarks
   * Este método se encarga de suscribirse al observable del servicio
   * y asignar el objeto con la información de arquitectura.
   */
  nOgOnInit(): void {
    this.moduleTestService.getDatosArquitectura().subscribe((data) => {
      this.arquitecturaData = data;
    });
  }
}
