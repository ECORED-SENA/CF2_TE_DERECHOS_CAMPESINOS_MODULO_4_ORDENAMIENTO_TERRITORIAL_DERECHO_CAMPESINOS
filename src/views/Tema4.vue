<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Enfoques diferenciales en el ordenamiento territorial y la participación ciudadana

    .row.align-items-center
      .col-lg-8.bg-3.p-4
        p El ordenamiento territorial, entendido como la organización del uso del suelo y la distribución equitativa de los recursos, debe integrar enfoques diferenciales que #[b reconozcan las desigualdades históricas, culturales y sociales] presentes en las comunidades. En este sentido, el enfoque de género y el enfoque étnico son fundamentales para garantizar #[b la inclusión, la equidad y la justicia territorial]. A continuación, se desarrollan ambos enfoques y se comparan sus principales principios y estrategias de aplicación:

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img1.png', alt='', style="width: 400px").m-auto

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Enfoque de género

    p El #[b enfoque de género] busca #[b visibilizar y reducir las desigualdades entre mujeres y hombres] en el acceso, uso y control de los recursos del territorio, así como en la participación en los procesos de toma de decisiones públicas. Según ONU Mujeres (2019), es fundamental reconocer las #[b diferencias estructurales] que afectan especialmente a las mujeres en contextos tanto rurales como urbanos.

    p
      b En los planes de ordenamiento territorial, este enfoque se traduce en medidas que buscan garantizar:

    .row.justify-content-center
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img2.svg' alt='AvatarTop')

          .tarjeta.bg-2.shadow
            .p-4
              .row.justify-content-center
                .col-auto
                  .py-2.px-3
              p.text-center.mb-0 El #[b acceso equitativo] a la tierra, la vivienda y los servicios públicos. 
      .col-10.col-md-6.col-lg-3(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img3.svg' alt='AvatarTop')
          .tarjeta.bg-2.shadow
            .p-4
              .row.justify-content-center
                .col-auto
                  .py-2.px-3
              p.text-center.mb-0 Una #[b movilidad segura y accesible para las mujeres], teniendo en cuenta sus necesidades cotidianas y roles de cuidado. 

      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img4.svg' alt='AvatarTop')

          .tarjeta.bg-2.shadow
            .p-4
              .row.justify-content-center
                .col-auto
                  .py-2.px-3
              p.text-center.mb-0 La creación y preservación de #[b espacios públicos seguros y libres de violencias de género]. 
      .col-10.col-md-6.col-lg-3(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img5.svg' alt='AvatarTop')
          .tarjeta.bg-2.shadow
            .p-4
              .row.justify-content-center
                .col-auto
                  .py-2.px-3
              p.text-center.mb-0 La #[b participación activa de mujeres rurales y urbanas] en la gestión del territorio y en la toma de decisiones sobre su desarrollo. 


    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2. Enfoque étnico

    .row
      .col-lg-7
        p Por su parte, el #[b enfoque étnico] reconoce la diversidad cultural y territorial de los #[b pueblos indígenas], #[b afrodescendientes y otras comunidades étnicas]. Este enfoque defiende que la planificación del territorio debe #[b respetar las formas de vida, las prácticas culturales, el uso tradicional del suelo y las autoridades propias]. Además, promueve una participación ciudadana efectiva de las comunidades étnicas en decisiones que afectan directamente su territorio, identidad y proyectos de vida. También reconoce el territorio no solo como un recurso físico o económico, sino como un #[b espacio de vida, espiritualidad y cultura].

        p A continuación, se presenta un pódcast que aborda los principios y aplicaciones de los enfoques de género y étnico en el ordenamiento territorial, destacando su papel clave en la construcción de territorios inclusivos, sostenibles y culturalmente diversos.

        .row.align-items-center.bg-12.p-4.r8
          .col-lg-5.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema4/img6.png', alt='', style="width: 270px").m-auto
          .col-lg-7
            p(style="color:black")
              b Podcast


            TarjetaAudio.color-acento-botones.mb-3.bg-3.p-3(
              texto="La contribución de las mujeres a la economía campesina "
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img7.png', alt='', style="width: 500px").m-auto  

</template>

<script>
export default {
  name: 'Tema4',
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
