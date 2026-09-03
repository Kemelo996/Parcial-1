export interface ObjetivoProposito {
  objetivo: string;
  detalle: string;
}

export interface AtributoCalidad {
  nombre: string;
  descripcion: string;
}

export interface DriverTipo {
  tipo: string;
  detalle: string;
}

export interface ModeloNegocio {
  modelo: string;
  detalle: string;
}

export interface PasoDecision {
  paso: string;
  detalle: string;
}

export interface Parte1 {
  concepto: string;
  objetivosYPropositos: ObjetivoProposito[];
  atributosDeCalidad: AtributoCalidad[];
}

export interface Parte2 {
  relacionConNegocio: string;
  businessDrivers: {
    concepto: string;
    tipos: DriverTipo[];
  };
  modelosDeNegocio: ModeloNegocio[];
}

export interface Parte3 {
  rolArquitecto: {
    definicion: string;
    responsabilidades: string[];
  };
  procesoDecisionArquitectonica: PasoDecision[];
}

export interface ArquitecturaInterface {
  docente: string;
  parte1: Parte1;
  parte2: Parte2;
  parte3: Parte3;
}
