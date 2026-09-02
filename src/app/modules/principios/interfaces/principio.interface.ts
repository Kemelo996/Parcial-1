/**
 * Representa un principio que puede mostrarse en el listado del módulo.
 *
 * La interfaz define la forma mínima de cada registro: un título visible
 * y una descripción asociada.
 */
export interface PrincipioInterface {
    /** Nombre o encabezado del principio. */
  titulo: string;

  /** Explicación del principio. */
  descripcion: string;
}
