<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Territorialidades campesinas.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Comprender los fundamentos prácticos relacionados con la declaración de los derechos campesinos, mecanismos de participación ciudadana, enfoque de género, enfoque étnico  en el ordenamiento territorial y las técnicas y metodologías de participación ciudadana. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué derecho garantiza el Artículo 9 de la Declaración de los Derechos Campesinos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La libertad de asociación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El derecho a la salud.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El acceso al crédito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La protección del medio ambiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una función principal de las juntas de acción comunal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Representar comunidades indígenas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promover el desarrollo comunitario local.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Gestionar proyectos agroindustriales privados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir leyes nacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué ley establece el Sistema Nacional de Planeación en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 388 de 1997.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 70 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley 152 de 1994.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ley 850 de 2003.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué son los resguardos según el documento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asociaciones de productores rurales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Territorios colectivos de comunidades indígenas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sindicatos rurales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Concejos municipales de desarrollo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué busca el enfoque de género en el ordenamiento territorial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el uso del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Visibilizar desigualdades entre hombres y mujeres.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar el concepto de familia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promover industrias culturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es el objetivo principal de las veedurías ciudadanas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir presupuestos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vigilar la gestión pública.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear asociaciones civiles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar territorios étnicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué ley regula el ordenamiento del territorio en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 388 de 1997.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ley 850 de 2003.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley 70 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley 134 de 1994.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué tipo de actividad representa un foro comunitario?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Espacio de diálogo entre comunidad y autoridades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Campaña publicitaria local.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reunión de líderes sindicales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clase magistral de urbanismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué reconoce el enfoque étnico en la planeación territorial?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La necesidad de urbanización masiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La diversidad cultural y territorial de pueblos indígenas y afrodescendientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La expansión agroindustrial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La industrialización rural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es el propósito de los consejos ciudadanos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Apoyar el diseño y seguimiento de políticas públicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reformar leyes nacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Administrar presupuestos municipales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar barreras de acceso a servicios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La Declaración de los Derechos Campesinos fue aprobada por la ONU en 2018.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Las juntas de acción comunal son organizaciones con ánimo de lucro.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'Opción a)\tFalso.\tX',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Las audiencias públicas permiten que las autoridades escuchen a la comunidad antes de decidir.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El teatro comunitario es una técnica de participación que fomenta la expresión y la reflexión social.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
