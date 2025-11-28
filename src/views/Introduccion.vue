<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p El enfoque “Mi Pueblo, Mi Producto, Mi Orgullo” (OVOP Colombia) constituye una propuesta de desarrollo local incluyente que promueve la reconstrucción de la confianza comunitaria, la valoración del territorio y el aprovechamiento sostenible de los productos y servicios únicos de cada región. Su implementación busca fortalecer la identidad colectiva, impulsar la cohesión social y generar procesos de desarrollo territorial basados en capacidades locales.
        .tarjeta.BG01.p-4
          .row.justify-content-center
            .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/intro/img01.svg' alt="Imagen decorativa")
            .col-lg-10
              p Este componente presenta los fundamentos conceptuales y metodológicos del enfoque OVOP Colombia, articulados con las experiencias del movimiento internacional One Village, One Product. El propósito central es ofrecer una comprensión integral del enfoque, destacando su relevancia para:
              ul.lista-ul--color.mb-0
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Reconocer los elementos que conforman el territorio.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Identificar los tesoros locales y su relación con la identidad comunitaria.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Fortalecer el sentido de pertenencia y el orgullo territorial.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Orientar acciones de desarrollo local incluyente.
      .col-lg-3.col-sm-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/intro/img02.jpg' alt="Imagen decorativa")

    p Asimismo, esta introducción contextualiza el proceso de implementación del enfoque en Colombia, resaltando su trayectoria, aprendizajes y aportes en territorios rurales y urbanos del país. De esta manera, se proporciona una base conceptual que facilita la apropiación del enfoque por parte de quienes participan en procesos formativos, comunitarios y de planificación territorial.
    p.mb-5 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/os9X3Cd0Skw?si=O_D0H7XG9ZPmQh6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
