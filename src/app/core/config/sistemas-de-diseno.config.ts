import { SistemaDeDisenoInterface } from '../../modules/sistemas-de-diseno/interfaces/sistema-de-diseno.interface';

export const SISTEMAS_DE_DISENO: SistemaDeDisenoInterface = {
  docente: '',
  concepto: {
    titulo: '',
    descripcion: '',
  },
  utilidad: {
    titulo: '',
    beneficios: [],
  },
  problemasSinSistema: {
    titulo: '',
    puntos: [],
  },
  componentesClave: [],
  disenoAtomico: {
    concepto: '',
    niveles: [],
  },
};
