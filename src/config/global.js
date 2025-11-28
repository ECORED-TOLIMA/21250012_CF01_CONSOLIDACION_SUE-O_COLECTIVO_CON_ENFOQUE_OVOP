export default {
  global: {
    componenteFormativo:
      'Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo - OVOP Colombia',
    descripcionCurso:
      'Este componente formativo tiene como propósito fortalecer las habilidades y conocimientos necesarios para comprender las particularidades del territorio y reconocer su importancia dentro del enfoque “Mi Pueblo, Mi Producto, Mi Orgullo”. Su contenido promueve una mirada integral del territorio como base para procesos de desarrollo local incluyente y apropiación comunitaria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Desarrollo endógeno',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Factores que lo impulsan',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Principios de la inclusión social',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Autogestión',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Participación',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Enfoque One Village, One Product (OVOP)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Antecedentes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Principios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Enfoque Mi Pueblo, Mi Producto, Mi Orgullo (OVOP Colombia)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Antecedentes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Pilares',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Fases',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Territorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Enfoques',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elementos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Contexto',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fuentes de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Definición',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Criterios de uso',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Herramientas de levantamiento',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Mapa de actores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Rol',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Funciones',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Relación',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Liderazgo colectivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tipos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Características del líder',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Cartografía social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Concepto',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Pasos de elaboración',
            hash: 't_8_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_21250012_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción OVOP',
      referencia:
        'SENA, JICA. 2022. Estrategia de desarrollo local incluyente OVOP Colombia. Documento Estratégico OVOP Colombia, estrategia de desarrollo local incluyente.',
      tipo: 'Documento PDF',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DE_Estrategia_de_Desarrollo_Local_Incluyente_OVOP_Colombia.pdf',
    },
    {
      tema: 'OVOP Colombia',
      referencia: 'Fase 1 Metodología OVOP',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vtpHyKUBG2E',
    },
    {
      tema: 'Desarrollo Endógeno',
      referencia: 'Fase 2 Metodología OVOP',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PW97mCafwkM',
    },
    {
      tema: 'Principios OVOP',
      referencia: 'OVOP Colombia',
      tipo: 'Página Web',
      link: 'https://ovopcolombia.info/ ',
    },
    {
      tema: 'Iniciativas OVOP Colombia',
      referencia: 'Movimiento OVOP en Colombia',
      tipo: 'Documento PDF',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/eventos-y-publicaciones/memorias-eventos-institucionales/2012/iii-encuentro-nacional-de-turismo-comunitario-en-s/ovop-y-turismo-comunitario/ovop-y-turismo-comunitario.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actores sociales',
      significado:
        'personas, grupos u organizaciones que influyen o participan en las dinámicas del territorio mediante acciones, decisiones o intereses.',
    },
    {
      termino: 'Autogestión',
      significado:
        'capacidad de una comunidad para organizarse, tomar decisiones y ejecutar acciones orientadas a resolver sus necesidades sin depender de agentes externos.',
    },
    {
      termino: 'Cartografía social',
      significado:
        'metodología participativa para construir conocimiento colectivo del territorio mediante la elaboración conjunta de mapas y la integración de saberes locales.',
    },
    {
      termino: 'Contexto',
      significado:
        'conjunto de elementos y dinámicas —ambientales, sociales, económicas y políticas— que configuran la identidad de un territorio.',
    },
    {
      termino: 'Desarrollo endógeno',
      significado:
        'modelo de desarrollo que surge desde dentro del territorio, aprovechando sus recursos, capacidades y cultura local.',
    },
    {
      termino: 'Dimensión ambiental',
      significado:
        'componente del territorio relacionado con el entorno natural, ecológico y físico, y con las interacciones humanas que inciden en él.',
    },
    {
      termino: 'Dimensión económica',
      significado:
        'aspecto del territorio vinculado a la producción, distribución y consumo de bienes y servicios y a la generación de ingresos.',
    },
    {
      termino: 'Dimensión política',
      significado:
        'conjunto de normas, instituciones, procesos y relaciones de poder que orientan la toma de decisiones y la participación ciudadana.',
    },
    {
      termino: 'Dimensión social',
      significado:
        'elementos culturales, educativos, relacionales y comunitarios que influyen en cómo las personas conviven, se organizan y construyen identidad.',
    },
    {
      termino: 'Enfoque OVOP',
      significado:
        'movimiento de desarrollo local que impulsa a las comunidades a identificar y fortalecer productos únicos representativos de su identidad.',
    },
    {
      termino: 'Fuentes de información',
      significado:
        'documentos o recursos que brindan datos para investigar, analizar o profundizar en un tema.',
    },
    {
      termino: 'Método CRAAP',
      significado:
        'criterio para evaluar la calidad de las fuentes según actualidad, relevancia, autoridad, exactitud y propósito.',
    },
    {
      termino: 'Mapa de actores',
      significado:
        'herramienta que identifica actores clave del territorio, sus roles, intereses, relaciones y niveles de influencia.',
    },
    {
      termino: 'Mi Orgullo',
      significado:
        'componente del enfoque OVOP que expresa el sentido de pertenencia, identidad y valoración de la comunidad hacia su territorio y productos.',
    },
    {
      termino: 'Mi Producto',
      significado:
        'producto, servicio o experiencia única que caracteriza al territorio y refleja su cultura y recursos.',
    },
    {
      termino: 'Mi Pueblo',
      significado:
        'territorio donde la comunidad vive y construye su proyecto colectivo, integrando aspectos físicos, sociales, culturales y productivos.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'proceso mediante el cual las personas intervienen activamente en decisiones y acciones que afectan su territorio.',
    },
    {
      termino: 'Pilares OVOP',
      significado:
        'principios que orientan el movimiento OVOP: desarrollo de capacidades humanas, actuación local con visión global y autogestión comunitaria.',
    },
    {
      termino: 'Producto representativo',
      significado:
        'bien, servicio o experiencia que refleja las tradiciones, habilidades y singularidad de un territorio.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de asegurar beneficios económicos, sociales y ambientales sin comprometer los recursos futuros.',
    },
    {
      termino: 'Territorio',
      significado:
        'espacio geográfico, social, cultural y político donde se construyen relaciones, dinámicas e identidades comunitarias.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Tierras. (s.f.). Elementos del territorio colombiano. ANT.',
    },
    {
      referencia:
        'Ceballos, M. (2004). Mapa de actores: guía conceptual para la planificación participativa.',
    },
    {
      referencia:
        'Del Castillo, M. (2014). Gestión de proyectos y análisis de interesados. En Miisterio del Trabajo (2016), Mapeo de actores clave (MAC) (pp. 9–10).',
    },
    {
      referencia:
        'Gambarota, D. M., & Lorda, M. A. (2017). Desarrollo endógeno: bases conceptuales y aplicaciones comunitarias.',
    },
    {
      referencia:
        'Gómez-Ibagón, et al. (2014). Desarrollo comunitario y participación local.',
    },
    {
      referencia:
        'JICA & SENA. (2020). Mi Pueblo, Mi Producto, Mi Orgullo. Estrategia de desarrollo local incluyente OVOP Colombia (Versión 02).',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2016). Mapeo de Actores Clave (MAC): metodología para procesos de incidencia político-institucional.',
    },
    {
      referencia:
        'Pozo-Solis, C. (2007). Relaciones comunitarias y análisis de actores para la gestión territorial.',
    },
    {
      referencia:
        'Universidad Británica en Egipto. (s.f.). Método CRAAP para evaluación de fuentes. BUE Library.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leidi Paola Mulcué Vitopía',
          cargo: 'Instructora',
          centro: 'Centro Nacional de Hotelería, Turismo y Alimentos',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Nacional de Hotelería, Turismo y Alimentos',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Daniel Polanco',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Junior Rodriguez Rodriguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
