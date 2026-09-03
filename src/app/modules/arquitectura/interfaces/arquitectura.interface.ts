/**
 * Representa un objetivo o propósito de la arquitectura.
 * Se usa para describir por qué el sistema debe estar diseñado
 * de cierta manera y qué beneficio aporta al negocio.
 */
export interface ObjetivoProposito {
  /** Nombre o enunciado del objetivo. */
  objetivo: string;
  /** Explicación breve del propósito asociado. */
  detalle: string;
}

/**
 * Representa un atributo de calidad del sistema.
 * Describle la propiedad que debe cumplir la solución para ser
 * efectiva, mantenible y confiable.
 */
export interface AtributoCalidad {
  /** Nombre del atributo de calidad. */
  nombre: string;
  /** Descripción del comportamiento o valor que aporta. */
  descripcion: string;
}

/**
 * Define un factor del negocio que influye en la decisión arquitectónica.
 */
export interface DriverTipo {
  /** Nombre del driver de negocio. */
  tipo: string;
  /** Detalle de cómo impacta en la arquitectura. */
  detalle: string;
}

/**
 * Modelo de negocio asociado a la solución.
 * Sirve para contextualizar cómo opera la propuesta en el mercado.
 */
export interface ModeloNegocio {
  /** Nombre del modelo. */
  modelo: string;
  /** Descripción del modelo y sus implicaciones. */
  detalle: string;
}

/**
 * Paso dentro del proceso de toma de decisiones arquitectónicas.
 */
export interface PasoDecision {
  /** Nombre o número del paso. */
  paso: string;
  /** Explicación del paso y su propósito. */
  detalle: string;
}

/**
 * Contiene la primera parte del contenido académico sobre arquitectura.
 * Incluye el concepto base, los objetivos y los atributos de calidad.
 */
export interface Parte1 {
  /** Definición general del concepto de arquitectura de software. */
  concepto: string;
  /** Objetivos y propósitos que guía la arquitectura. */
  objetivosYPropositos: ObjetivoProposito[];
  /** Atributos de calidad que deben cumplirse en la solución. */
  atributosDeCalidad: AtributoCalidad[];
}

/**
 * Contiene la segunda parte del contenido del módulo.
 * Relaciona la arquitectura con el negocio, drivers y modelos de negocio.
 */
export interface Parte2 {
  /** Descripción de cómo la arquitectura se conecta con el negocio. */
  relacionConNegocio: string;
  /** Factores del negocio que impulsan decisiones arquitectónicas. */
  businessDrivers: {
    /** Concepto general del grupo de drivers. */
    concepto: string;
    /** Lista de drivers específicos. */
    tipos: DriverTipo[];
  };
  /** Modelos de negocio relevantes para la solución. */
  modelosDeNegocio: ModeloNegocio[];
}

/**
 * Contiene la tercera parte del módulo.
 * Describe el rol del arquitecto y el proceso de toma de decisiones.
 */
export interface Parte3 {
  /** Información sobre la función del arquitecto dentro del proyecto. */
  rolArquitecto: {
    /** Definición del rol. */
    definicion: string;
    /** Responsabilidades principales del arquitecto. */
    responsabilidades: string[];
  };
  /** Secuencia de pasos para decidir de forma arquitectónica. */
  procesoDecisionArquitectonica: PasoDecision[];
}

/**
 * Representa el contenido completo del módulo de arquitectura.
 * Se usa para estructurar la información académica que se muestra
 * en la vista principal del componente de arquitectura.
 */
export interface ArquitecturaInterface {
  /** Nombre del docente responsable del módulo. */
  docente: string;
  /** Primera parte del contenido del módulo. */
  parte1: Parte1;
  /** Segunda parte del contenido del módulo. */
  parte2: Parte2;
  /** Tercera parte del contenido del módulo. */
  parte3: Parte3;
}
