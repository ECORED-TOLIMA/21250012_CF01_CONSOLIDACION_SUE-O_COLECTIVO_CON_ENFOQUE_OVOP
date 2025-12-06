<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 6
      h1 Mapa de actores
    
    .row.justify-content-center.mb-4
      .col-lg-3.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        .BG11.p-2.h-100
          .row.justify-content-center
            .col-xxl-6.col-xl-8.col-10
              img(src='@/assets/curso/tema6/img01.svg' alt="Imagen decorativa").m-auto
      .col-lg-9(data-aos="fade-left")
        .BG01.p-4.h-100
          p.mb-0 El mapa de actores es una herramienta que permite identificar a los actores presentes en un territorio, reconocer sus acciones, comprender sus intereses y analizar los objetivos que guían su presencia en dicho espacio. Esta herramienta facilita la lectura del entorno social, pues permite reconocer alianzas, conflictos, portavoces autorizados y dinámicas de poder que influyen directamente en los procesos de intervención. (Ceballos, 2004; Pozo-Solis, 2007)

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Concepto
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 Según el Ministerio del Trabajo (2016), el Mapeo de Actores Clave (MAC) es una metodología ampliamente utilizada en el análisis social y en los procesos de incidencia político-institucional, como la formulación de políticas públicas. De acuerdo con Del Castillo (2014, citado en Ministerio del Trabajo, 2016), en la gestión de proyectos, una buena planificación debe incluir la identificación y clasificación de interesados, considerando sus necesidades, expectativas, posibilidades de interacción y potenciales alianzas. Este proceso se conoce como mapa de actores.
      .col-lg-5.col-sm-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema6/img02.png' alt="Imagen decorativa")

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Rol
    
    .row.justify-content-center.mb-4
      .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        .BG12.p-2.h-100
          .row.justify-content-center
            .col-xl-8.col-10
              img(src='@/assets/curso/tema6/img03.svg' alt="Imagen decorativa").m-auto
      .col-lg-10(data-aos="fade-left")
        .BG01.p-4.h-100
          p.mb-0 En el mapeo de actores es fundamental identificar los roles y los niveles de poder de los actores sociales más relevantes. Reconocer estas dinámicas permite comprender las relaciones de influencia, cooperación o conflicto dentro del territorio y facilita una adecuada toma de decisiones en los procesos de intervención.

    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Funciones
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img04.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img09.svg' alt="Imagen decorativa" style="max-width:75px")
          br
          | El mapa de actores permite identificar las funciones que desempeña cada actor, así como los objetivos que guían sus acciones en relación con las dinámicas del territorio. Además, facilita proyectar posibles acciones futuras, establecer redes de cooperación y perfilar alianzas interinstitucionales que fortalezcan la propuesta de intervención.

    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Relación
    
    .row.justify-content-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Se refiere a los vínculos entre actores según su grado de afinidad o desacuerdo, lo cual refleja niveles de confianza o conflicto. Estas relaciones pueden clasificarse en tres categorías:
        .row.justify-content-center
          .col-lg-4.mb-lg-0.mb-4
            .BG02.p-3
              .row.justify-content-center.align-items-center
                .col-4
                  img(src='@/assets/curso/tema6/img05.svg' alt="Imagen decorativa")
                .col
                  .h5.mb-0 A favor
          .col-lg-4.mb-lg-0.mb-4
            .BG02.p-3
              .row.justify-content-center.align-items-center
                .col-4
                  img(src='@/assets/curso/tema6/img06.svg' alt="Imagen decorativa")
                .col
                  .h5.mb-0 Indiferente
          .col-lg-4.mb-lg-0.mb-4
            .BG02.p-3
              .row.justify-content-center.align-items-center
                .col-4
                  img(src='@/assets/curso/tema6/img07.svg' alt="Imagen decorativa")
                .col
                  .h5.mb-0 En contra
      .col-lg-3.col-sm-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema6/img08.svg' alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema6',
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
