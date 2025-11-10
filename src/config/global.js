export default {
  global: {
    Name: 'Territorialidades campesinas',
    Description:
      'En este componente se abordará aspectos a partir de las territorialidades campesinas, propiciando conocimiento a partir de la declaración de los derechos de los campesinos, los mecanismos de participación en el ordenamiento territorial, las leyes planteadas alrededor del desarrollo económico, social y ambiental en el país y las técnicas y metodologías de participación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Declaración de los derechos campesinos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Mecanismos de participación ciudadana en el ordenamiento territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Valor estratégico de la participación',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Marco normativo de la planeación y el ordenamiento territorial en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Complementariedad entre ambas leye',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Enfoques diferenciales en el ordenamiento territorial y la participación ciudadana',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Enfoque de género',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Enfoque étnico',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Técnicas y metodologías de participación ciudadana',
        desarrolloContenidos: true,
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
        download: 'downloads/212500_CF01_DU.pdf',
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
      tema: 'La asociatividad rural',
      referencia:
        'UPRAColombia. (2023). La unión hace la fuerza: La importancia de la asociatividad para el campo colombiano. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ugjeKgs75mQ',
    },
    {
      tema: 'Capacidades empresariales',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2019). Agricultura al día: ¿En qué consiste el proyecto de capacidades empresariales? [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ocHskEVyhk8',
    },
    {
      tema: 'Extensión agropecuaria',
      referencia:
        'Agencia de Desarrollo Rural. (2022). La extensión agropecuaria y la asociatividad. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vIJg8fuNEMs',
    },
  ],
  glosario: [
    {
      termino: 'Alianza productiva',
      significado:
        'acuerdo entre productores, el sector privado y el Estado para fortalecer la producción y comercialización conjunta.',
    },
    {
      termino: 'Asociación',
      significado:
        'grupo organizado de personas que se unen voluntariamente con fines comunes, con o sin ánimo de lucro.',
    },
    {
      termino: 'Asociatividad rural',
      significado:
        'forma de organización de pequeños productores rurales para alcanzar objetivos comunes.',
    },
    {
      termino: 'Cadenas productivas',
      significado:
        'conjunto organizado y secuencial de actividades económicas que transforman insumos o materias primas en productos finales, con valor agregado, listos para el consumo o comercialización. Estas actividades incluyen desde la producción primaria hasta la distribución final, e involucran a múltiples actores interrelacionados.',
    },
    {
      termino: 'Canales de comercialización',
      significado:
        'rutas o medios por los cuales los productos llegan del productor al consumidor, directa o indirectamente.',
    },
    {
      termino: 'Matriz asociativa',
      significado:
        'herramienta que permite analizar, planificar o evaluar los elementos clave en los procesos de asociatividad rural. Se utiliza para organizar la información relacionada con los actores, recursos, funciones y relaciones dentro de una asociación o red de productores rurales.',
    },
    {
      termino: 'Productores',
      significado:
        'los productores rurales son personas, familias o comunidades que viven y trabajan en el campo.',
    },
    {
      termino: 'Redes empresariales',
      significado:
        'sistemas de colaboración voluntaria entre varias empresas, organizaciones o productores que deciden trabajar en conjunto para alcanzar objetivos comunes, sin perder su independencia jurídica. A través de estas redes, los participantes comparten información, recursos, conocimientos, mercados y estrategias para mejorar su competitividad y sostenibilidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Red Nacional de Agencias de Desarrollo Local de Colombia - Red Adelco. (2023). <em>Ruta nacional de asociatividad rural productiva.</em>',
      link: '',
    },
    {
      referencia:
        'Centro Internacional de Negocios (CIN), Cámara de Comercio de Bogotá. (s.f.). <em>Asociatividad: Estrategia para la internacionalización de su negocio.</em>',
      link: '',
    },
    {
      referencia:
        'Universidad de Antioquia, Facultad de Ciencias Agrarias. (2022). <em>Gestión de la asociatividad rural agroempresarial.</em>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Alexander Díaz López',
          cargo: 'Experto Temático',
          centro: 'Centro Agroturistico - Regional Santander ',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo	Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
