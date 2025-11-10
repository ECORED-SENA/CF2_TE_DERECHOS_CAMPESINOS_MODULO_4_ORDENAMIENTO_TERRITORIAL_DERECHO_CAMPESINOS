<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Marco normativo de la planeación y el ordenamiento territorial en Colombia

    .row.align-items-center
      .col-lg-8.bg-3.p-4
        p La planificación del desarrollo y el ordenamiento territorial en Colombia se rige por un conjunto de leyes que establecen los fundamentos técnicos, políticos y sociales de la gestión pública en todos los niveles del Estado. Entre ellas, se destacan dos leyes orgánicas fundamentales: la Ley 152 de 1994 y la Ley 388 de 1997, las cuales estructuran el sistema de planeación y orientan el uso racional del territorio, respectivamente. Ambas normas proporcionan las herramientas legales e institucionales para promover un desarrollo sostenible, participativo y equitativo en el país.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img1.png', alt='', style="width: 400px").m-auto


    .row.justify-content-centet.mt-4
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img2.png', alt='', style="width: 400px").m-auto
      
      .col-lg-8
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Ley 152 de 1994")
            .col-md-12.mb-4.mb-md-0
              p.text-small Ley Orgánica del Plan de Desarrollo. “Por la cual se establece la Ley Orgánica del Plan de Desarrollo.” Expedida el 15 de julio de 1994 por el Congreso de la República de Colombia. Su objetivo principal es organizar el Sistema Nacional de Planeación, definiendo los principios, procedimientos e instrumentos para la formulación, ejecución, seguimiento y evaluación de los planes de desarrollo en los niveles nacional, departamental, distrital y municipal. Fortalece la participación ciudadana en los procesos de planeación e impulsa la articulación de objetivos entre los diferentes niveles del Estado.
          

          .row(numero="2" titulo="Ley 388 de 199")
            .col-md-12.mb-4.mb-md-0
              p.text-small Ley de Ordenamiento Territorial. “Por la cual se modifica la Ley 9ª de 1989 y la Ley 2ª de 1991, y se dictan otras disposiciones sobre ordenamiento territorial.” Expedida el 18 de julio de 1997 por el Congreso de la República de Colombia. Busca promover el ordenamiento del territorio municipal y distrital, fomentando un uso del suelo equitativo, eficiente y sostenible mediante procesos de planificación participativa. Su propósito es orientar el desarrollo físico del territorio, mejorar la calidad de vida de los habitantes y garantizar la función social y ecológica de la propiedad. Es la norma base para la formulación de los Planes de Ordenamiento Territorial (POT). 

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Complementariedad entre ambas leye

    p Estas dos leyes se complementan para construir un sistema integral de planificación y ordenamiento territorial en Colombia. Mientras la Ley 152 define el qué y el cómo de la planeación en términos generales, la Ley 388 regula el dónde y el para qué, centrándose en el espacio físico y su organización racional.

    .row.justify-content-center.mt-4
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-11(data-aos="fade-right")
          .col-lg
            ul.lista-ul--color.mt-2.px-4
              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0 La Ley 152 de 1994 permite a las entidades territoriales estructurar sus planes de desarrollo con una visión estratégica, coherente y participativa. 

              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0 La Ley 388 de 1997 garantiza que dicho desarrollo se realice respetando las capacidades del territorio, su vocación de uso, los derechos colectivos y el equilibrio ecológico. 


              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0 Ambas promueven una participación activa de la ciudadanía en la toma de decisiones, el fortalecimiento de la gobernanza local y la construcción de territorios más justos y sostenibles.


          .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema3/img3.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
