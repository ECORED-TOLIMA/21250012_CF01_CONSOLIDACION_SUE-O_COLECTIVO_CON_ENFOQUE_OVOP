<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente aborda herramientas conceptuales y metodológicas esenciales para el desarrollo territorial incluyente. El enfoque #[strong Mi Pueblo, Mi Producto, Mi Orgullo (OVOP Colombia)] permite reconocer la identidad, capacidades y aspiraciones de las comunidades, fortaleciendo la economía local mediante productos únicos con valor cultural y territorial.
    p La comprensión del territorio, sus elementos y dimensiones —ambiental, social, económica y política— brinda una perspectiva integral para el análisis de las dinámicas locales. El adecuado uso de #[strong fuentes de información], a partir de criterios de calidad como el método CRAAP, garantiza procesos formativos y de investigación con rigurosidad.
    p Se incluyen herramientas participativas como el #[strong mapa de actores], que facilita identificar actores clave, relaciones, roles y niveles de influencia; y la #[strong cartografía social], que promueve la construcción colectiva de conocimiento sobre el territorio a través de ejercicios colaborativos de reflexión y representación.
    p.mb-5 En conjunto, estas herramientas fortalecen la planificación territorial, la participación comunitaria, la toma de decisiones informada y la puesta en marcha de iniciativas de desarrollo local incluyente .  

    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Texto alternativo: La síntesis del componente formativo, se presenta organizada en los principales temas y subtemas: el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia; el concepto de territorio y sus dimensiones; las fuentes de información y sus criterios de evaluación; el mapa de actores y sus elementos; el liderazgo colectivo, sus tipos y las características del líder; y la cartografía social con sus pasos de elaboración, integrando todos los contenidos en una estructura visual jerárquica.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
