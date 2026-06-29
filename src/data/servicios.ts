export interface Servicio {
  num: string;
  nombre: string;
  descripcion: string;
  incluye: string[];
  resultado: string;
}

export const servicios: Servicio[] = [
  {
    num: '01',
    nombre: 'Diagnóstico de Comunicación y Clima Laboral',
    descripcion: 'Evaluamos la calidad de la comunicación interna y el clima laboral para identificar fortalezas, áreas de oportunidad y factores que afectan el desempeño de tu equipo.',
    incluye: ['Encuestas, entrevistas y grupos focales', 'Evaluación de canales de comunicación interna', 'Análisis del estilo de liderazgo', 'Talleres de comunicación y resolución de conflictos', 'Estrategias alineadas con tus objetivos'],
    resultado: 'Mejor comunicación, mayor compromiso, ambiente colaborativo.',
  },
  {
    num: '02',
    nombre: 'Auditoría de la Experiencia del Colaborador',
    descripcion: 'Analizamos la experiencia de cada colaborador a lo largo de su ciclo laboral completo para fortalecer su compromiso, satisfacción y permanencia en la organización.',
    incluye: ['Employee Journey Map completo', 'Diagnóstico de satisfacción por etapa', 'Revisión de inducción e integración', 'Capacitación a líderes en gestión de personas', 'Plan de mejora personalizado'],
    resultado: 'Mayor retención de talento e imagen como empleador atractivo.',
  },
  {
    num: '03',
    nombre: 'Sistema de Predicción de Rotación Laboral',
    descripcion: 'Identificamos oportunamente los factores de riesgo de rotación mediante indicadores organizacionales para que puedas actuar antes de perder a tu talento clave.',
    incluye: ['Análisis de rotación, ausentismo y permanencia', 'Identificación de puestos críticos', 'Tableros de control para Recursos Humanos', 'Estrategias de retención del talento', 'Reportes periódicos de seguimiento'],
    resultado: 'Decisiones preventivas basadas en datos, no en intuición.',
  },
  {
    num: '04',
    nombre: 'Optimización de Procesos Organizacionales',
    descripcion: 'Analizamos y rediseñamos los procesos internos de tu empresa para eliminar cuellos de botella, duplicidades y tiempos muertos que frenan el rendimiento de tus equipos.',
    incluye: ['Diagnóstico y mapeo completo de procesos', 'Rediseño y estandarización de procesos', 'Manuales de procedimientos y diagramas de flujo', 'Asesoría en herramientas digitales', 'Acompañamiento en la implementación'],
    resultado: 'Mayor productividad, mejor coordinación, recursos optimizados.',
  },
  {
    num: '05',
    nombre: 'Diagnóstico de Riesgos Psicosociales y Bienestar',
    descripcion: 'Evaluamos los factores de riesgo psicosocial presentes en tu organización para diseñar estrategias que promuevan el bienestar laboral y un entorno de trabajo verdaderamente saludable.',
    incluye: ['Evaluación de factores de riesgo psicosocial', 'Diagnóstico de bienestar y satisfacción', 'Plan de acción personalizado', 'Programas de manejo del estrés y burnout', 'Evaluación del impacto de las acciones'],
    resultado: 'Menos ausentismo, mejor clima y cultura de prevención.',
  },
];
