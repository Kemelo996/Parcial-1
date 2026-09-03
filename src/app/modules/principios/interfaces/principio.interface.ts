/** Representa un principio de arquitectura de software. */
export interface PrincipioArquitectura {
  /** Nombre del principio. */
  nombre: string;
  /** Nivel objetivo que se busca en la arquitectura. */
  objetivo: 'Alta' | 'Baja';
  /** Explicación del principio. */
  descripcion: string;
  /** Ventajas de aplicar el principio. */
  beneficios: string[];
  /** Ejemplo de una implementación adecuada. */
  ejemploCorrecto?: string;
  /** Ejemplo de una implementación inadecuada. */
  ejemploIncorrecto?: string;
}

/** Representa un ejercicio para clasificar funcionalidades por módulo. */
export interface EjercicioClasificacion {
  /** Nombre del módulo analizado. */
  modulo: string;
  /** Funcionalidades que pertenecen al módulo. */
  funcionalidades: string[];
}

/** Representa un problema arquitectónico para analizar. */
export interface EjercicioProblema {
  /** Identificador del problema. */
  id: number;
  /** Situación que se debe evaluar. */
  situacion: string;
  /** Tipo de problema arquitectónico identificado. */
  tipoProblema: string;
}

/**
 * Contenido didáctico del módulo de principios de arquitectura.
 *
 * Incluye la introducción, los principios explicados y dos ejercicios
 * prácticos: clasificación de funcionalidades y análisis de problemas.
 */
export const PRINCIPIOS_ARQUITECTURA_DATA = {
  docente: 'Jesus David Mejia',

  introduccion: {
    titulo: 'Principios de una Buena Arquitectura',
    concepto:
      'Son guías que permiten crear sistemas organizados, fáciles de entender y que puedan evolucionar con el tiempo. Ayudan a reducir la complejidad, mejorar el mantenimiento y asegurar que el software pueda adaptarse a nuevas necesidades sin generar problemas a futuro.'
  },

  principios: [
    {
      nombre: 'Modularidad',
      objetivo: 'Alta',
      descripcion:
        'Consiste en dividir el sistema en partes más pequeñas llamadas módulos, donde cada uno cumple una función clara y específica para desarrollarse, evaluarse y modificarse de forma independiente.',
      beneficios: [
        'Facilita el trabajo en equipo',
        'Reduce la complejidad',
        'Permite reemplazar o mejorar módulos sin afectar todo el sistema'
      ],
      ejemploCorrecto:
        'Dividir una tienda en línea en módulos independientes como Carrito, Inventario, Usuarios y Pagos.'
    },
    {
      nombre: 'Cohesión',
      objetivo: 'Alta',
      descripcion:
        'Indica qué tan relacionadas están las tareas dentro de un mismo módulo. Con alta cohesión, el módulo cumple una sola responsabilidad clara y enfocada.',
      beneficios: [
        'Facilita la comprensión del código',
        'Hace más simple el mantenimiento',
        'Cada módulo tiene un propósito único y claro'
      ],
      ejemploCorrecto:
        "Un módulo de 'Gestión de Productos' que únicamente crea, actualiza, busca y elimina productos.",
      ejemploIncorrecto:
        'Un módulo que maneja productos y además envía correos y procesa pagos.'
    },
    {
      nombre: 'Acoplamiento',
      objetivo: 'Baja',
      descripcion:
        'Mide el nivel de dependencia entre módulos. Con bajo acoplamiento, los módulos funcionan de forma independiente y los cambios en uno no afectan a los demás.',
      beneficios: [
        'Permite modificar o reemplazar módulos sin afectar a otros',
        'Aumenta la flexibilidad del sistema',
        'Facilita la evolución del sistema'
      ],
      ejemploCorrecto:
        'La Calculadora solo devuelve un resultado numérico y el módulo Pantalla decide cómo mostrarlo (color, formato).',
      ejemploIncorrecto:
        'La Calculadora conoce cómo debe mostrarse el resultado en pantalla y llama directamente a la función de interfaz.'
    },
    {
      nombre: 'Separación de Responsabilidades',
      objetivo: 'Alta',
      descripcion:
        'Consiste en dividir el sistema según distintos tipos de tareas, evitando mezclar lógica de negocio, presentación, acceso a datos u otros aspectos.',
      beneficios: [
        'Reduce errores al evitar que cambios en una parte afecten a otra innecesariamente',
        'Facilita la organización en capas o componentes',
        'Mejora la legibilidad y escalabilidad del sistema'
      ],
      ejemploCorrecto:
        'Organizar la app en capa de presentación (UI), capa de negocio (reglas) y capa de datos (base de datos).',
      ejemploIncorrecto:
        'Un archivo HTML que contiene directamente código SQL y reglas de negocio sobre saldo del usuario.'
    }
  ] as PrincipioArquitectura[],

  ejerciciosPracticos: {
    clasificacionModulos: [
      {
        modulo: 'Usuarios',
        funcionalidades: [
          'Registrar usuario',
          'Iniciar sesión',
          'Recuperar contraseña',
          'Editar perfil'
        ]
      },
      {
        modulo: 'Carrito',
        funcionalidades: [
          'Agregar producto',
          'Eliminar producto',
          'Calcular total de compra',
          'Aplicar descuentos'
        ]
      },
      {
        modulo: 'Pagos',
        funcionalidades: ['Procesar pago', 'Generar factura']
      },
      {
        modulo: 'Catálogo',
        funcionalidades: ['Agregar producto al catálogo', 'Actualizar precio']
      },
      {
        modulo: 'Inventario',
        funcionalidades: ['Gestionar inventario']
      },
      {
        modulo: 'Notificaciones',
        funcionalidades: ['Enviar notificación por correo']
      }
    ] as EjercicioClasificacion[],

    analisisProblemas: [
      {
        id: 1,
        situacion:
          'El sistema completo está implementado en un solo archivo de 20,000 líneas que maneja usuarios, pagos, reportes y notificaciones.',
        tipoProblema: 'Falta de Modularidad'
      },
      {
        id: 2,
        situacion:
          "El módulo llamado 'Gestión General' contiene lógica de autenticación, cálculos financieros, generación de reportes y acceso a base de datos.",
        tipoProblema: 'Baja Cohesión'
      },
      {
        id: 3,
        situacion:
          'Cuando se cambia el formato de exportación de reportes, también es necesario modificar el módulo de usuarios y el módulo de pagos.',
        tipoProblema: 'Alto Acoplamiento'
      },
      {
        id: 4,
        situacion:
          'Para poder probar el módulo de pedidos es obligatorio tener activos los módulos de inventario y facturación.',
        tipoProblema: 'Alto Acoplamiento'
      },
      {
        id: 5,
        situacion:
          'El módulo de autenticación también gestiona estadísticas de ventas y genera reportes administrativos.',
        tipoProblema: 'Baja Cohesión'
      }
    ] as EjercicioProblema[]
  }
};
