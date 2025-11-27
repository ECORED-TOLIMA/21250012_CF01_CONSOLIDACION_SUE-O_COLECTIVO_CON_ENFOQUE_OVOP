<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Territorio
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img01.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        p El territorio, para las comunidades rurales, se concibe como un #[strong espacio de vida] que integra identidad, memoria, recursos y prácticas culturales. Es un entorno que abarca tanto los elementos naturales como las actividades productivas, las relaciones sociales y la cosmovisión que las comunidades construyen a lo largo del tiempo. Desde esta perspectiva, el territorio es un referente de arraigo y significado, así como el escenario donde se desarrollan las dinámicas económicas, sociales y culturales propias de cada comunidad.
        p De acuerdo con la Agencia Nacional de Tierras, los territorios rurales se comprenden como un espacio histórico y social que, a partir de una delimitación geográfica, integra al menos cuatro componentes esenciales:
        .BG02.p-4
          .row.justify-content-center.align-items-center
            .col-lg-9.order-lg-1.order-2
              ul.lista-ul--color.mb-0
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Un territorio con actividades económicas diversas e interrelacionadas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Una población vinculada al uso y manejo de los recursos naturales, con una cultura propia.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Asentamientos conectados mediante una red de relaciones internas y externas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Instituciones gubernamentales y no gubernamentales que interactúan entre sí.
            .col-lg-3.col-sm-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema4/img02.svg' alt="Imagen decorativa")

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Enfoques
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Los enfoques desde los cuales se puede comprender el territorio son los siguientes:
        .row.justify-content-center
          .col-lg-4.mb-lg-0.mb-4
            .BG01.p-3
              .row.justify-content-center.align-items-center
                .col-4
                  img(src='@/assets/curso/tema4/img03.svg' alt="Imagen decorativa")
                .col
                  .h5.mb-0 Espacial
          .col-lg-4.mb-lg-0.mb-4
            .BG01.p-3
              .row.justify-content-center.align-items-center
                .col-4
                  img(src='@/assets/curso/tema4/img04.svg' alt="Imagen decorativa")
                .col
                  .h5.mb-0 Materialista
          .col-lg-4.mb-lg-0.mb-4
            .BG01.p-3
              .row.justify-content-center.align-items-center
                .col-4
                  img(src='@/assets/curso/tema4/img05.svg' alt="Imagen decorativa")
                .col
                  .h5.mb-0 Idealista
      .col-lg-3.col-sm-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img06.png' alt="Imagen decorativa")

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Elementos
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Los elementos del territorio colombiano se consideran #[strong bienes de uso público], es decir, bienes cuyo disfrute pertenece a toda la colectividad. Su uso implica responsabilidades y restricciones jurídicas relacionadas con la soberanía y con las competencias del Estado. Algunos de estos elementos son:
        .BG02.p-4
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2
              ul.lista-ul--color.mb-0
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Espacio aéreo.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Zona económica.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Mar territorial.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Plataforma continental.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Subsuelo.
            .col-lg-5.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema4/img07.png' alt="Imagen decorativa")
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img08.png' alt="Imagen decorativa")
    
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Contexto
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img09.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El contexto se entiende como el conjunto de elementos que definen las dinámicas y la identidad de un territorio, influyendo directamente en la vida de sus habitantes. Comprender el contexto implica reconocer las dimensiones sociales, económicas, culturales, ambientales e institucionales que configuran un lugar y que determinan la manera en que sus comunidades se relacionan con su entorno.
      
    .BGIMG04.p-4(data-aos="zoom-in")
      SlyderA.color-acento-botones(tipo="b")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Dimensión ambiental
            p.mb-0 La dimensión ambiental se refiere al entorno físico, ecológico, social y cultural que influye directamente en la vida de los individuos y las comunidades. Esta dimensión desempeña un papel fundamental en la configuración del comportamiento humano, las dinámicas territoriales y las interacciones entre las personas y los ecosistemas. Comprender el contexto ambiental es esencial para abordar desafíos como el cambio climático, la conservación de la biodiversidad y la gestión sostenible de los recursos naturales, ya que permite identificar cómo los distintos factores ambientales inciden en el bienestar colectivo y en la sostenibilidad del territorio.
          .col-lg-5.col-sm-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img10.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Dimensión social
            p.mb-0 La dimensión social abarca las condiciones, relaciones y entornos en los que las personas viven, interactúan y se desarrollan. Incluye factores como la cultura, las normas sociales, los sistemas educativos, las redes de apoyo y las relaciones interpersonales que conforman el tejido social de una comunidad. Entender esta dimensión permite analizar cómo los individuos se adaptan a su entorno, cómo se construyen identidades colectivas y cómo las dinámicas sociales influyen en la participación, la cohesión y el desarrollo territorial.
          .col-lg-5.col-sm-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img11.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Dimensión económica 
            p.mb-0 La dimensión económica comprende las formas en que un territorio organiza la apropiación, producción, distribución y consumo de bienes y servicios, tanto materiales como inmateriales. Esta dimensión depende del equilibrio entre las condiciones competitivas y la capacidad colectiva para generar ingresos y oportunidades económicas. Entre los elementos que la integran se encuentran el acceso a transporte, la promoción del empleo, el uso de tecnologías de la información y las comunicaciones (TIC) y el desarrollo agropecuario. Su análisis permite entender la dinámica productiva y el potencial económico del territorio.
          .col-lg-5.col-sm-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img12.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            .h4 Dimensión política
            p.mb-0 La dimensión política se relaciona con los procesos de organización, poder, gobernanza y participación que orientan la toma de decisiones en un territorio. Incluye aspectos como la estructura institucional del Estado, el funcionamiento de los gobiernos locales, la interacción entre actores políticos y sociales, la participación ciudadana y los comportamientos individuales y colectivos en torno a lo público. Esta dimensión permite evaluar cómo se diseñan, ejecutan y evalúan las políticas públicas, así como su impacto en la vida comunitaria y en el desarrollo territorial. 
          .col-lg-5.col-sm-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img13.jpg' alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema4',
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
