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
      tema: 'Declaración de los derechos campesinos',
      referencia:
        'Via Campesina. (2020). Declaración de las Naciones Unidas sobre los Derechos de los Campesinos y de Otras. Personas que Trabajan en las Zonas Rurales.',
      tipo: 'Documento ',
      link:
        'https://viacampesina.org/wp-content/uploads/2020/04/UNDROP-Book-of-Illustrations-l-ES-l-Web.pdf',
    },
    {
      tema: 'Enfoque de género',
      referencia:
        'Fundación YPF. (2021). 3 ENFOQUE DE GENERO. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=W7eoSlw70OM',
    },
    {
      tema:
        'Enfoques diferenciales en el ordenamiento territorial y la participación ciudadana',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). ¿Qué es el enfoque diferencial?  [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qfUwkGkNtXs',
    },
  ],
  glosario: [
    {
      termino: 'Asociación',
      significado:
        'es una organización conformada por un grupo de personas que se unen de manera voluntaria y libre con el fin de alcanzar objetivos comunes, generalmente de carácter social, cultural, económico, comunitario o profesional, sin ánimo de lucro.',
    },
    {
      termino: 'Audiencias',
      significado:
        'son mecanismos de participación ciudadana en los cuales las autoridades del Estado escuchan y reciben directamente las opiniones, propuestas, inquietudes o denuncias de la ciudadanía sobre asuntos de interés general, antes de tomar decisiones o durante la ejecución de políticas, proyectos o normas.',
    },
    {
      termino: 'Cabildos',
      significado:
        'son autoridades tradicionales y formas de gobierno propio de las comunidades indígenas en Colombia.',
    },
    {
      termino: 'Consejos',
      significado:
        'son espacios de participación, concertación y planeación conformados por representantes de diferentes sectores sociales, económicos, comunitarios y étnicos, junto con autoridades del Estado. Su función principal es asesorar, concertar, coordinar y hacer seguimiento a las políticas, planes y programas de desarrollo en los distintos niveles del territorio.',
    },
    {
      termino: 'Consultas',
      significado:
        'son mecanismos de participación ciudadana mediante los cuales el Estado somete a consideración del pueblo una decisión de interés general, con el fin de conocer su opinión, aprobación o rechazo sobre un tema determinado.',
    },
    {
      termino: 'Étnico',
      significado:
        'se refiere a todo lo relacionado con un grupo humano que comparte una identidad común, basada en características culturales, históricas, lingüísticas, sociales o territoriales que lo distinguen de otros grupos dentro de una sociedad.',
    },
    {
      termino: 'Género',
      significado:
        'es una construcción social, cultural e histórica que define los roles, comportamientos, valores y expectativas asignados a las personas según su sexo (masculino o femenino) en una determinada sociedad.',
    },
    {
      termino: 'Juntas',
      significado:
        'son organizaciones comunitarias de base que reúnen a los habitantes de un territorio (como un barrio, vereda o comunidad rural) para promover el desarrollo local, gestionar proyectos colectivos y representar los intereses de la comunidad ante las autoridades públicas.',
    },
    {
      termino: 'Ordenamiento territorial',
      significado:
        'es un proceso de planificación, gestión y regulación del uso del territorio, que busca organizar de manera equilibrada las actividades humanas, los recursos naturales y el desarrollo económico, social y ambiental de un país, región o municipio.',
    },
    {
      termino: 'Participación:',
      significado:
        'es el proceso mediante el cual las personas, grupos o comunidades intervienen activamente en la toma de decisiones que afectan su vida, su entorno y su desarrollo.',
    },
    {
      termino: 'Referendos',
      significado:
        'es un mecanismo de participación ciudadana mediante el cual los ciudadanos aprueban o rechazan directamente una norma jurídica o una decisión política propuesta por el gobierno o por iniciativa popular.',
    },
    {
      termino: 'Resguardos',
      significado:
        'los resguardos son entidades territoriales colectivas de los pueblos indígenas, reconocidas legal y constitucionalmente, que les pertenecen de manera inalienable, imprescriptible e inembargable.',
    },
    {
      termino: 'Veedurías',
      significado:
        'son mecanismos democráticos de participación mediante los cuales los ciudadanos y las organizaciones sociales ejercen vigilancia sobre la gestión pública, la ejecución de proyectos, programas o contratos y el cumplimiento de políticas y planes desarrollados por las autoridades del Estado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1890). <em>Ley 89 de 1890: Por la cual se determina la manera como deben ser gobernados los salvajes que vayan reduciéndose a la vida civilizada.</em>',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993). <em>Ley 70 de 1993: Por la cual se desarrolla el artículo transitorio 55 de la Constitución Política.</em>',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993). <em>Ley 99 de 1993: Por la cual se crea el Ministerio del Medio Ambiente y se organiza el Sistema Nacional Ambiental (SINA).</em>',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1994). <em>Ley 134 de 1994: Mecanismos de participación ciudadana.</em>',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1994). <em>Ley 152 de 1994: Ley Orgánica del Plan de Desarrollo.</em> <em>Diario Oficial</em> No. 41.450 del 15 de julio de 1994.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1994). <em>Ley 160 de 1994: Por la cual se crea el Sistema Nacional de Reforma Agraria y Desarrollo Rural Campesino.</em>',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1995). <em>Decreto 1745 de 1995: Por el cual se reglamenta el Capítulo III de la Ley 70 de 1993.</em>',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1995). <em>Decreto 2164 de 1995: Por el cual se reglamenta parcialmente la Ley 160 de 1994.</em>',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1997). <em>Ley 388 de 1997: Por la cual se modifica la Ley 9ª de 1989 y la Ley 2ª de 1991, y se dictan otras disposiciones sobre ordenamiento territorial.</em> <em>Diario Oficial</em> No. 43.091 del 24 de julio de 1997.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2002). <em>Ley 731 de 2002: Ley de las Mujeres Rurales.</em>',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2002). <em>Ley 743 de 2002: Por la cual se desarrolla el artículo 38 de la Constitución Política sobre asociaciones de usuarios y juntas de acción comunal.</em>',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2003). <em>Ley 850 de 2003: Por la cual se reglamentan las veedurías ciudadanas.</em>',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2015). <em>Ley 1757 de 2015: Por la cual se dictan disposiciones en materia de promoción y protección del derecho a la participación democrática.</em>',
      link: '',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). <em>Artículos 63, 103, 246, 329 y 330.</em>',
      link: '',
    },
    {
      referencia:
        'Declaración de las Naciones Unidas sobre los derechos de los campesinos y de otras personas que trabajan en las zonas rurales. (2018). <em>La Vía Campesina.</em>',
      link:
        'https://viacampesina.org/wp-content/uploads/2020/04/UNDROP-Book-of-Illustrations-l-ES-l-Web.pdf"',
    },
    {
      referencia:
        'Freire, P. (1970). <em>Pedagogía del oprimido.</em> Siglo XXI Editores.',
      link: '',
    },
    {
      referencia:
        'Habermas, J. (1998). <em>Teoría de la acción comunicativa.</em> Taurus.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Cultura de Colombia. (2023). <em>Política Nacional de Cultura 2023–2030.</em>',
      link: '',
    },
    {
      referencia:
        'ONU Mujeres. (2019). <em>Guía para incorporar el enfoque de género en los planes de ordenamiento territorial y la gestión urbana.</em>',
      link: '',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Desarrollo – PNUD Colombia. (2019). <em>Metodologías participativas para el desarrollo local y comunitario.</em>',
      link: '',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Desarrollo – PNUD Colombia. (2019). <em>Metodologías participativas para el fortalecimiento de la gobernanza local.</em>',
      link: '',
    },
    {
      referencia:
        'Urna de Cristal. (2022). <em>Plataforma de participación ciudadana digital en Colombia.</em>',
      link: 'https://www.urnadecristal.gov.co"',
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
