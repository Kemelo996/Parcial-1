export const DATIS_ARQUITECTURA = {
  docente: 'Jesus David Mejia',
  parte1: {
    concepto: 'Conjunto de decisiones estructurales que definen cómo está organizado un sistema y cómo colaboran sus componentes para cumplir objetivos funcionales y no funcionales. Comprende los elementos, sus propiedades visibles externamente y sus relaciones.',
    objetivosYPropositos: [
      { objetivo: 'Alinear el sistema con las necesidades', detalle: 'Permite que la arquitectura responda al negocio y facilite los cambios de requerimientos.' },
      { objetivo: 'Permitir que el software evolucione', detalle: 'Evita que el sistema envejezca o se vuelva rígido ante nuevas funcionalidades o tecnologías.' },
      { objetivo: 'Asegurar atributos de calidad', detalle: 'Define cómo va a comportarse el sistema bajo presión, en crecimiento y ante fallos.' },
      { objetivo: 'Servir como guía para el equipo', detalle: 'Establece límites, responsabilidades, interfaces y estándares técnicos.' },
      { objetivo: 'Reducir riesgos desde el inicio', detalle: 'Identifica puntos críticos, dependencias y decisiones irreversibles tempranamente.' },
      { objetivo: 'Acelerar el desarrollo e impactar costos', detalle: 'Define patrones reutilizables y evita la acumulación de deuda técnica costosa.' }
    ],
    atributosDeCalidad: [
      { nombre: 'Rendimiento (Performance)', descripcion: 'Capacidad del sistema para responder rápido y usar eficientemente los recursos (CPU, memoria, tiempo de respuesta).' },
      { nombre: 'Escalabilidad', descripcion: 'Capacidad de manejar mayor cantidad de usuarios o carga sin colapsar. Puede ser vertical, aumentando la capacidad del servidor, u horizontal, agregando servidores con un balanceador de carga.' },
      { nombre: 'Disponibilidad', descripcion: 'Porcentaje de tiempo en el que el sistema se mantiene operativo y accesible para los usuarios.' },
      { nombre: 'Seguridad', descripcion: 'Protección de la información y prevención de ataques mediante autenticación, cifrado y tokens.' },
      { nombre: 'Mantenibilidad', descripcion: 'Facilidad para modificar el código, corregir errores o agregar funcionalidades sin romper lo existente.' },
      { nombre: 'Usabilidad', descripcion: 'Facilidad con la que un usuario puede aprender, entender y operar la interfaz.' },
      { nombre: 'Interoperabilidad', descripcion: 'Capacidad del sistema para integrarse e intercambiar información con otros sistemas mediante APIs o microservicios.' }
    ]
  },
  parte2: {
    relacionConNegocio: 'La arquitectura es un medio para habilitar los objetivos del negocio. Debe acelerar la entrega de valor, permitir competir mejor y alinearse a la estrategia del producto.',
    businessDrivers: {
      concepto: 'Factores y motivaciones del negocio que impulsan las decisiones arquitectónicas.',
      tipos: [
        { tipo: 'Crecimiento', detalle: 'Soportar más usuarios, regiones o carga masiva.' },
        { tipo: 'Velocidad de entrega', detalle: 'Optimizar el time-to-market e innovar con despliegues rápidos.' },
        { tipo: 'Costos', detalle: 'Reducir gastos en infraestructura y mantenimiento.' },
        { tipo: 'Experiencia del usuario', detalle: 'Garantizar rapidez, disponibilidad y simplicidad.' },
        { tipo: 'Escalabilidad del negocio', detalle: 'Habilidad para expandir el producto comercialmente.' }
      ]
    },
    modelosDeNegocio: [
      { modelo: 'Producto Tradicional (SaaP)', detalle: 'Instalado en el cliente; requiere ser estable, predecible y fácil de mantener con actualizaciones largas.' },
      { modelo: 'SaaS (Software as a Service)', detalle: 'Corre totalmente en la nube; exige alta disponibilidad, seguridad, observabilidad y escalabilidad continua.' },
      { modelo: 'PaaS (Platform as a Service)', detalle: 'Plataforma para desarrolladores; exige alta confiabilidad, autoescalado y aislamiento de fallos (ej. AWS, Firebase).' },
      { modelo: 'Otros modelos', detalle: 'Freemium, Publicidad, Open Source con soporte, Marketplace, Suscripción por contenido y Pay-per-use.' }
    ]
  },
  parte3: {
    rolArquitecto: {
      definicion: 'Profesional responsable del diseño estructural del software que conecta las necesidades del negocio, la tecnología y el equipo.',
      responsabilidades: [
        'Definir la arquitectura y garantizar atributos de calidad',
        'Identificar riesgos técnicos y documentar decisiones',
        'Seleccionar tecnologías, patrones y plataformas',
        'Guiar al equipo de desarrollo y alinear la solución con el negocio'
      ]
    },
    procesoDecisionArquitectonica: [
      { paso: '1. Identificar el problema', detalle: 'Entender qué necesita resolver el sistema antes de elegir tecnologías.' },
      { paso: '2. Generar alternativas técnicas', detalle: 'Proponer siempre más de una opción (ej. Monolito vs Microservicios).' },
      { paso: '3. Evaluar consecuencias', detalle: 'Analizar el impacto de cada opción sobre los atributos de calidad y costos.' },
      { paso: '4. Documentar', detalle: 'Registrar contexto, alternativas, decisión, justificación y consecuencias.' },
      { paso: '5. Validar con prototipos', detalle: 'Realizar pruebas de carga y simular fallos antes de construir todo el sistema.' },
      { paso: '6. Ajustar con retroalimentación', detalle: 'Acatar el contexto organizacional y la experiencia técnica del equipo.' }
    ]
  }
};
