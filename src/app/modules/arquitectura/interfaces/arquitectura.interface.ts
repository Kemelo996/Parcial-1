/** Representa un registro de arquitectura con datos identificables y de clasificación. */
export interface ArquitecturaInterface {
  /** Identificador numérico del registro. */
  id: number;
  /** Nombre visible del registro. */
  name: string;
  /** Categoría a la que pertenece el registro. */
  category: string;
  /** Valor numérico asociado al registro. */
  price: number;
}

/** Categorías disponibles para clasificar un registro de arquitectura. */
export type ArquitecturaCategory = 'Lacteos' | 'Carnes' | 'Frutas' | 'Verduras';
