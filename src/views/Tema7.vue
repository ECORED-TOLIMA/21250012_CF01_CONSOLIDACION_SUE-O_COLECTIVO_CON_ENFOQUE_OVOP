<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 7
      h1 Liderazgo colectivo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2.px-0(data-aos="fade-right")
        .BG02.p-4
          .row.justify-content-center
            .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema7/img01.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 El liderazgo colectivo es un componente fundamental en los procesos de desarrollo comunitario. En un territorio pueden existir uno o varios líderes con distintos niveles de influencia; sin embargo, la estrategia OVOP Colombia promueve que el liderazgo sea compartido y que diversas personas asuman responsabilidades según sus capacidades, movilizando a la comunidad hacia una visión construida de manera conjunta.
      .col-lg-2.col-sm-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4.px-0(data-aos="fade-left")
        .BG12.p-2
          img.mx-auto(src='@/assets/curso/tema7/img02.svg' alt="Imagen decorativa")

    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Concepto
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img03.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El liderazgo colectivo implica gestionar la diversidad de la comunidad y promover una influencia positiva en el territorio. No se trata de imponer acciones, sino de fortalecer las capacidades personales y comunitarias para que surjan sinergias entre distintos liderazgos. Esta forma de liderazgo favorece la colaboración, la corresponsabilidad y la inclusión social.

    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Tipos
    
    p.mb-5 Los líderes que contribuyen al desarrollo local pueden asumir distintos roles según sus habilidades, conocimientos y experiencias en el territorio. Cada tipo de liderazgo aporta una perspectiva particular que, al integrarse con las demás, fortalece los procesos comunitarios y permite avanzar hacia objetivos colectivos. Estos liderazgos se complementan entre sí y actúan como motores de organización, innovación y articulación institucional. Entre ellos se destacan los siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.color-acento-botones(tipo="b" clase-tarjeta="tarjeta BG05" data-aos="zoom-in")
          div(titulo="Líder comunitario")
            ul.lista-ul--color.mb-0
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Entiende la dinámica social, la historia, la cultura, los recursos naturales y las necesidades de su comunidad.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Organiza y sensibiliza a las personas según sus habilidades, fomentando apoyos mutuos en coherencia con los principios de OVOP.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Se comunica de manera adecuada y retroalimenta a la comunidad.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Estimula positivamente la participación y las acciones colectivas.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Promueve actividades de integración con otras comunidades.
          div(titulo="Líder empresarial")
            ul.lista-ul--color.mb-0
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Impulsa procesos de innovación y diversificación en productos o servicios.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Tiene visión a largo plazo sobre el territorio y sus potencialidades.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Desarrolla estrategias para posicionar productos o servicios (#[i marketing] territorial).
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Diseña estrategias, administra recursos y gestiona alternativas para superar obstáculos.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Actúa con transparencia y credibilidad.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Cuenta con conocimientos especializados en sectores específicos, como turismo o producción agropecuaria.
          div(titulo="Líder institucional")
            ul.lista-ul--color.mb-0
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Posee credibilidad ante entidades públicas y privadas, y conoce los procedimientos institucionales.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Facilita acuerdos y negociaciones que beneficien a la comunidad.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Genera empatía y confianza con instituciones.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Asume responsabilidades institucionales, como la corresponsabilidad en los procesos de desarrollo.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Reconoce el valor de la institucionalidad para el fortalecimiento territorial.
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema7/img04.jpg' alt="Imagen decorativa")

    separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Características del líder
    
    .row.justify-content-center.mb-4
      .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        .BG12.p-2
          img(src='@/assets/curso/tema7/img05.svg' alt="Imagen decorativa")
      .col-lg-10(data-aos="fade-left")
        .BG01.p-4
          p.mb-0 El liderazgo dentro del enfoque OVOP no se limita a ejercer influencia, sino que implica encarnar una serie de cualidades que permiten movilizar a la comunidad hacia una visión compartida. Estas características orientan el actuar de quienes asumen responsabilidades en los procesos territoriales y garantizan que el liderazgo se ejerza de manera ética, participativa y coherente con los principios del desarrollo incluyente. A continuación, se presentan las principales características que distinguen a un líder OVOP:
    
    .row
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema7/img06.svg' alt="Imagen decorativa")
        p.text-center.mb-0 #[strong Entiende y cree en OVOP]: una persona carismática no puede liderar el proceso si no comprende y comparte la filosofía del enfoque.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema7/img07.svg' alt="Imagen decorativa")
        p.text-center.mb-0 #[strong Amplía la visión de la comunidad]: ayuda a que las personas reconozcan sus posibilidades individuales y colectivas dentro del territorio.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema7/img08.svg' alt="Imagen decorativa")
        p.text-center.mb-0 #[strong Conoce su comunidad]: el enfoque OVOP no se limita a mejorar productos, sino a promover un desarrollo incluyente; por eso es esencial conocer profundamente al territorio y a sus habitantes.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema7/img09.svg' alt="Imagen decorativa")
        p.text-center.mb-0 #[strong Actúa por iniciativa propia]: busca apoyo para fortalecer los conocimientos comunitarios y promueve actividades como ferias, eventos y espacios formativos.


</template>

<script>
export default {
  name: 'Tema7',
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
