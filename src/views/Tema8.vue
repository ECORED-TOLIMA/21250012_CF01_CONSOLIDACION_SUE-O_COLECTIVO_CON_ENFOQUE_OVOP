<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 8
      h1 Cartografía social
    
    .row.justify-content-center.mb-4
      .col-lg-2.col-sm-4.col-6.mb-lg-0.mb-4.px-0(data-aos="fade-right")
        .BG09.p-2.h-100
          img(src='@/assets/curso/tema8/img01.svg' alt="Imagen decorativa")
      .col-lg-10.px-0(data-aos="fade-left")
        .BG01.p-4.h-100
          p.mb-0 La cartografía social es una herramienta participativa que permite construir conocimiento colectivo sobre un territorio. Facilita que una comunidad se acerque a su espacio geográfico, social, económico, histórico y cultural a través de la elaboración colaborativa de mapas. Este proceso promueve el diálogo, evidencia distintos saberes y permite construir una visión compartida del territorio, integrando perspectivas diversas para fortalecer la reflexión y la acción colectiva.

    separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.1 Concepto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La cartografía social es un ejercicio que permite comprender la realidad, los conflictos, las capacidades y las oportunidades de un territorio. A partir de la reflexión compartida, facilita construir visiones comunes sobre un espacio y un tiempo determinados, promover acuerdos y proyectar futuros posibles en los cuales cada participante tiene un papel activo. Es una herramienta que combina análisis, participación y creación colectiva con el propósito de fortalecer la conciencia territorial y el beneficio común.
        img(src='@/assets/curso/tema8/img02.png' alt="Imagen decorativa")
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema8/img03.png' alt="Imagen decorativa")

    separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.2 Pasos para la elaboración

    p.mb-5 La cartografía social puede representar cualquier relación o dinámica presente en el territorio y permitir la construcción de mapas del pasado, del presente y del futuro, así como mapas temáticos (ecológicos, económicos, de redes, de conflictos, de infraestructura, de sitios sagrados, de usos del espacio, entre otros). A continuación, se presentan los pasos generales para su elaboración:

    .BGIMG04.p-4.mb-4(data-aos="zoom-in")
      SlyderA.color-acento-botones(tipo="b")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Definir el tipo de mapa según las necesidades identificadas.
            p.mb-0 La cartografía debe atender una intencionalidad concreta. Es necesario concertar previamente el propósito del mapa: diagnóstico, profundización temática, identificación de conflictos, reconocimiento de potencialidades o apoyo a procesos organizativos.
          .col-lg-5.col-sm-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img04.jpg' alt="Imagen decorativa")
        .row.justify-content-center 
          .col-lg-6.order-lg-1.order-2
            .h4 Formular las preguntas que se quieren resolver.
            p.mb-0 La preparación de preguntas claras orienta el trabajo colectivo. Estas deben ajustarse a la información mínima requerida, al tiempo disponible y a las características del grupo participante. Quienes orientan la actividad se encargan de guiar la reflexión mediante intervenciones cortas y facilitar la creación de símbolos representativos.
          .col-lg-5.col-sm-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img05.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Elaborar el mapa de manera colectiva.
            p.mb-0 La cantidad de participantes dependerá de la dinámica del grupo y del contexto. Se recomienda trabajar alrededor de una superficie amplia (mesa o suelo) que facilite el diálogo horizontal y la interacción entre los participantes.
          .col-lg-5.col-sm-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img06.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Registrar las conversaciones y reflexiones generadas durante el proceso.
            p.mb-0 Cada grupo debe contar con un moderador y un relator responsables de recoger la memoria de la actividad. Las discusiones y acuerdos reflejan la diversidad de percepciones presentes en el territorio, por lo que su registro es fundamental.
          .col-lg-5.col-sm-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img07.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h4 Socializar el mapa y las memorias.
            p.mb-0 En una plenaria final se presentan, discuten y afinan los mapas elaborados. Este espacio permite integrar las perspectivas individuales y colectivas, validar los hallazgos y fortalecer la construcción de conocimiento comunitario.
          .col-lg-5.col-sm-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img08.jpg' alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4.px-0(data-aos="fade-right")
        .BG09.p-2.h-100
          img(src='@/assets/curso/tema8/img09.svg' alt="Imagen decorativa")
      .col-lg-8.px-0(data-aos="fade-left")
        .BG11.p-4.h-100
          .h5.mb-0 La cartografía social es una propuesta conceptual y metodológica que permite aproximarse al territorio y construir un conocimiento integral de este mediante el uso de instrumentos técnicos y vivenciales. Se trata de una herramienta de planificación y transformación social que promueve la participación activa y el compromiso comunitario, facilitando la elaboración colectiva de conocimiento y posibilitando la transformación del territorio a partir de la reflexión compartida y la acción organizada.

</template>

<script>
export default {
  name: 'Tema8',
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
