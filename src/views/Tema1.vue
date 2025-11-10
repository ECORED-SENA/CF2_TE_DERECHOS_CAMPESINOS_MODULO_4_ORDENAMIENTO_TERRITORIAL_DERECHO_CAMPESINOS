<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Declaración de los derechos campesinos

    .row.align-items-center
      .col-lg-8.bg-3.p-5
        p #[b La Declaración Universal de los Derechos Campesinos] y de Otras Personas que Trabajan en las Zonas Rurales (aprobada por la Asamblea General de las Naciones Unidas en 2018) representa un avance histórico en el reconocimiento de los derechos de quienes, tradicionalmente, han sido excluidos de los marcos jurídicos nacionales e internacionales. Esta declaración busca corregir siglos de desigualdad, discriminación y abandono hacia las comunidades rurales.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='', style="width: 400px").m-auto

    .row.bg-1.mt-4
      .col-12 
        .p-5
          p Dos de los derechos fundamentales que recoge esta declaración son la libertad de asociación y el derecho a participar activamente en decisiones que afectan sus vidas. A continuación, se amplía el análisis de estos artículos clave:

          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-primario.p-5
              .row.justify-content-center.mb-4
                .col-10
                  figure
                    img(src='@/assets/curso/tema1/img2.png', alt='Texto que describa la imagen')
                
              h2.bg-6 Artículo 9. Libertad de asociación
              p Los campesinos y otras personas que trabajan en las zonas rurales tienen derecho a #[b fundar organizaciones, sindicatos, cooperativas u otras asociaciones] de su elección, para proteger sus intereses y #[b negociar colectivamente]. Estas organizaciones deben ser #[b independientes y voluntarias], libres de #[b injerencia, coerción o represión].

            .col-md.tarjeta.bg-5.p-5
              .row.justify-content-center.mb-4
                .col-10
                  figure
                    img(src='@/assets/curso/tema1/img3.png', alt='Texto que describa la imagen')
                
              h2.bg-6 Artículo 10. Derecho a participar
              p Se reconoce el derecho a #[b participar activa y libremente], de manera directa o mediante sus #[b organizaciones representativas], en la elaboración y aplicación de #[b políticas, programas y proyectos] que afecten su vida, su tierra y sus medios de subsistencia.
 
          p Estos derechos no son meramente formales, sino herramientas fundamentales para el empoderamiento del campesinado, la defensa de la soberanía alimentaria y la protección de los territorios rurales. Su cumplimiento efectivo requiere la creación de marcos legales adecuados, voluntad política y la eliminación de barreras estructurales como la pobreza, el analfabetismo o la discriminación. En un mundo donde millones de personas dependen de la agricultura para sobrevivir, reconocer y aplicar estos derechos es clave para construir un modelo de desarrollo rural más justo, equitativo y sostenible.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
