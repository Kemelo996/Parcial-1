export interface SistemaDeDisenoItem {
	titulo: string;
	detalle: string;
}

export interface SistemaDeDisenoProblema {
	problema: string;
	detalle: string;
}

export interface SistemaDeDisenoComponente {
	nombre: string;
	descripcion: string;
}

export interface SistemaDeDisenoNivel {
	nivel: string;
	descripcion: string;
	ejemplos?: string[];
}

export interface SistemaDeDisenoInterface {
	docente: string;
	concepto: {
		titulo: string;
		descripcion: string;
	};
	utilidad: {
		titulo: string;
		beneficios: SistemaDeDisenoItem[];
	};
	problemasSinSistema: {
		titulo: string;
		puntos: SistemaDeDisenoProblema[];
	};
	componentesClave: SistemaDeDisenoComponente[];
	disenoAtomico: {
		concepto: string;
		niveles: SistemaDeDisenoNivel[];
	};
}
