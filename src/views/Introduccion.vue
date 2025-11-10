<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bg-1
      .col-12 
        .p-5
          p.mb-4 En el componente formativo Territorialidades campesinas se promueve la comprensión de la Declaración de los Derechos Campesinos, con especial énfasis en el derecho a la asociación y a la participación. Se profundiza en los artículos 9 y 10, que se relacionan con el ordenamiento territorial y con la posibilidad de que las comunidades campesinas incidan en la planificación y gestión de sus territorios. Asimismo, se reconocen los mecanismos de participación vinculados al ordenamiento territorial, como las juntas de acción comunal, los consejos comunitarios, los cabildos y los resguardos, espacios que garantizan la intervención activa de los campesinos en las decisiones públicas que impactan su entorno.

          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/intro/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 De igual manera, se promueve el análisis de las leyes que orientan el desarrollo económico, social y ambiental del país, con el fin de fortalecer la capacidad de los estudiantes para comprender cómo la normativa vigente incide en la gestión del territorio y en la garantía de los derechos campesinos. Este conocimiento permite contextualizar las dinámicas rurales dentro del marco jurídico nacional, fomentando una visión crítica y propositiva frente a las políticas públicas que afectan el campo colombiano.

          .row.align-items-center.justify-content-center
            .col-lg-12
              .row.align-items-center.bg-13.p-3.r8
                .col-lg-11
                  p Finalmente, el componente incorpora los enfoques de género y étnico como dimensiones esenciales para la comprensión integral de las territorialidades. A partir de estos enfoques, se busca construir perspectivas inclusivas que reconozcan la diversidad cultural y social del campesinado. El proceso formativo concluye con la aplicación de técnicas y metodologías participativas orientadas a gestionar y consolidar las territorialidades campesinas, en coherencia con el ordenamiento territorial ambiental, la reforma agraria y el reconocimiento pleno de los derechos campesinos.
                .col-lg-1.d-lg-block.d-none 
                  figure
                    img(src="@/assets/curso/intro/img2.svg", alt="", style="width: 100px").m-auto
          



</template>

<script>
export default {
  name: 'Introduccion',
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
