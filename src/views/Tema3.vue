<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Enfoque Mi Pueblo, Mi Producto, Mi Orgullo
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img01.svg' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        .BG01.p-4
          p.mb-0 El enfoque #[strong Mi Pueblo, Mi Producto, Mi Orgullo (OVOP Colombia)] se constituye en una alternativa y una nueva aproximación para la implementación del desarrollo local. Esta propuesta retoma experiencias y lecciones aprendidas durante varios años en Colombia y en otros países, y las adapta a las características y necesidades de los territorios. Bajo este concepto se destacan tres componentes esenciales para impulsar procesos de desarrollo territorial basados en la identidad, las capacidades y los recursos propios de cada comunidad.

    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.color-acento-botones.d-lg-flex.d-none
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img02.svg', alt="Imagen decorativa")
          .tarjeta.BG02.p-3(x="25%" y="30%" numero="+")
            p.mb-0 Se refiere al territorio en el que la comunidad trabaja para alcanzar su sueño colectivo. Incluye los espacios físicos, sociales, culturales y productivos que conforman el entorno en el que se construyen las iniciativas locales.
          .tarjeta.BG02.p-3(x="50%" y="30%" numero="+")
            p.mb-0 Alude al producto único que caracteriza al territorio. Puede tratarse de uno o varios productos que representen la identidad local, ya sean bienes agrícolas, artesanales, gastronómicos, culturales, turísticos u otros que reflejen la singularidad del lugar.
          .tarjeta.BG02.p-3(x="75.5%" y="30%" numero="+")
            p.mb-0 Está relacionado con el sentimiento de identidad, pertenencia y valoración que la comunidad tiene hacia su territorio y hacia los productos únicos que lo representan. Este componente es fundamental para impulsar procesos sostenibles, fortalecer la cohesión social y dinamizar iniciativas económicas locales. (JICA, SENA, 2020).
        figure.d-lg-none.d-flex
          img(src='@/assets/curso/tema3/img03.svg' alt="Imagen decorativa")

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Antecedentes
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La estrategia OVOP Colombia se consolidó a partir de la implementación del proyecto #[strong Un Pueblo, Un Producto (OVOP) Colombia], cuyo propósito fue fortalecer la cohesión social y la autonomía económica de las comunidades donde se desarrollaban iniciativas OVOP, con el fin de revitalizar los territorios y contribuir a la construcción de paz en el país. Este proyecto, ejecutado entre 2014 y 2018, permitió recopilar aprendizajes significativos, así como identificar lecciones de éxito y desafíos derivados de las doce experiencias priorizadas en Colombia.
        .BG02.p-3
          .row.justify-content-center
            .col-lg-3.col-sm-4.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema3/img03.svg' alt="Imagen decorativa")
            .col-lg-9
              p.mb-0 Los conocimientos obtenidos durante este proceso fueron incorporados en la propuesta metodológica #[strong Mi Pueblo, Mi Producto, Mi Orgullo], que constituye la base conceptual y operativa del enfoque OVOP Colombia. Este marco metodológico recoge los elementos más relevantes de dichas experiencias, adaptándolos a la realidad territorial y promoviendo procesos de desarrollo local basados en la identidad, la organización comunitaria y las capacidades propias de cada territorio.
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img04.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-10
        .BG10.p-4
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/img05.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 OVOP Colombia - Construcción de identidad y desarrollo territorial
                  p.mb-0 Para conocer más sobre este proceso, se invita a revisar el siguiente video de OVOP Colombia.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=7DeP6WQXrOY&t=162s" target="_blank")
                    span abrir video
                    i.fas.fa-link

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Pilares
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img06.jpg')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Los pilares del enfoque #[strong Mi Pueblo, Mi Producto, Mi Orgullo (OVOP Colombia)] constituyen orientaciones fundamentales que facilitan el trabajo de las comunidades en los procesos de revitalización territorial. Estos pilares organizan los principios, acciones y estrategias necesarias para fortalecer las capacidades locales, impulsar el desarrollo económico y promover la cohesión social. A continuación, se presenta la descripción de cada uno de ellos de manera sintetizada y funcional para el proceso formativo.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-secundario(data-aos="fade-right")
          h5 Tabla 1.
          i Pilares del enfoque Mi Pueblo, Mi Producto, Mi Orgullo
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="Texto alternativo tabla")
            caption Fuente. <span style="font-weight: 400">DNP, JICA (2018). Proyecto de OVOP Colombia DNP-JICA. Estrategia de Desarrollo Local Incluyente OVOP Colombia.</span>
            thead(style="border-color: transparent")
              tr(data-aos="fade-right")
                th(style="background-color: #FFFBE5; width: 24%; font-size: 18px;") Pilar
                th(style="background-color: #FFFBE5; width: 38%; font-size: 18px;") Competitividad de producto
                th(style="background-color: #FFFBE5; width: 38%; font-size: 18px;") Participación e inclusión social
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;")
                  .row
                    .col-4
                      img(src='@/assets/curso/tema3/img07.svg' alt="Imagen decorativa")
                    .col-8
                      p.mb-0 Pilar 1: Descubrimiento de valor e identidad de las comunidades
                td(style="background-color: #F6F6F6;") Valoración de las características particulares y únicas del territorio, reconociendo su valor agregado.
                td(style="background-color: #F6F6F6;") Creación y coordinación entre actores locales y diferentes sectores, a través de procesos de acercamiento y confianza. Líderes comunitarios como motores del desarrollo local desde un enfoque basado en la identificación de los tesoros comunitarios.
              tr(data-aos="fade-right")
                td
                  .row
                    .col-4
                      img(src='@/assets/curso/tema3/img08.svg' alt="Imagen decorativa")
                    .col-8
                      p.mb-0 Pilar 2: Fortalecimiento de líderes de las comunidades
                td Liderazgo para la vinculación de los productos únicos con los mercados identificados.
                td Coordinación y articulación con instituciones sociales y entidades del sector público con el fin de contribuir al desarrollo local.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;")
                  .row
                    .col-4
                      img(src='@/assets/curso/tema3/img09.svg' alt="Imagen decorativa")
                    .col-8
                      p.mb-0 Pilar 3: Desarrollo de productos estrellas y únicos
                td(style="background-color: #F6F6F6;") Identificación del valor agregado, diferenciación de los productos únicos del territorio con mejoramiento e innovación de los productos con potencial.
                td(style="background-color: #F6F6F6;") Productos únicos que reflejan la historia, las tradiciones y la identidad de las comunidades, con los cuales en general la población se identifica.
              tr(data-aos="fade-right")
                td
                  .row
                    .col-4
                      img(src='@/assets/curso/tema3/img10.svg' alt="Imagen decorativa")
                    .col-8
                      p.mb-0 Pilar 4: Creación de marcas territoriales
                td Posicionamiento de diferentes productos únicos bajo una misma marca regional que los represente.
                td Integración y armonía entre actores para la creación de una marca territorial que visibilice las potencialidades del territorio.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;")
                  .row
                    .col-4
                      img(src='@/assets/curso/tema3/img11.svg' alt="Imagen decorativa")
                    .col-8
                      p.mb-0 Pilar 5: Fortalecimiento de un mecanismo territorial para coordinación
                td(style="background-color: #F6F6F6;") Instancia que soporta y acompaña el proceso del territorio en el plan de acción establecido en el plan de desarrollo y el que busca aumentar el valor del territorio.
                td(style="background-color: #F6F6F6;") Mesa técnica territorial interinstitucional como espacio de concertación, articulación y coordinación del proceso del territorio.
              tr(data-aos="fade-right")
                td
                  .row
                    .col-4
                      img(src='@/assets/curso/tema3/img12.svg' alt="Imagen decorativa")
                    .col-8
                      p.mb-0 Pilar 6: Estrategia de sostenibilidad y divulgación
                td Alianzas estratégicas para mejorar los productos únicos y aumentar continuamente el valor y la competitividad de la región.
                td Aumento del orgullo de “Mi Pueblo, Mi Producto, Mi Orgullo”, posicionamiento del enfoque a nivel departamental y nacional con asistencia técnica de los facilitadores.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Fases
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La estrategia de desarrollo local #[storng OVOP Colombia] se basa en una metodología estructurada que orienta el proceso de intervención en los territorios. Esta metodología comprende #[strong 17 pasos organizados en 5 grandes fases], que permiten avanzar de manera ordenada desde la identificación del territorio y sus potencialidades hasta la consolidación de iniciativas sostenibles. Cada fase integra preguntas orientadoras y criterios de acción que facilitan la apropiación de la metodología por parte de las comunidades y los equipos territoriales.
        p.mb-0 A lo largo de cada fase se describen los pasos necesarios para su implementación, acompañados de respuestas a preguntas clave como: #[strong ¿en qué consiste cada paso?, ¿cómo se lleva a cabo? y ¿qué resultados se esperan?] Este enfoque facilita el trabajo comunitario, fortalece la organización local y permite avanzar hacia procesos de desarrollo incluyentes, participativos y sostenibles.
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img13.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-secundario(data-aos="fade-right")
          h5 Tabla 1.
          i Pilares del enfoque Mi Pueblo, Mi Producto, Mi Orgullo
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="Texto alternativo tabla")
            caption Fuente. <span style="font-weight: 400">SENA, JICA (2020). Estrategia de desarrollo local incluyente OVOP Colombia – Documento Estratégico. Versión 02.</span>
            thead(style="border-color: transparent")
              tr(data-aos="fade-right")
                th(style="background-color: #FFFBE5; width: 20%; font-size: 18px;") fases
                th(style="background-color: #FFFBE5; width: 10%; font-size: 18px;")
                th(style="background-color: #FFFBE5; width: 70%; font-size: 18px;") Pasos
            tbody
              tr(data-aos="fade-right")
                th(style="background-color: #F6F6F6;" rowspan="4") 1. Introducción
                td(style="background-color: #F6F6F6;") 1-1
                td(style="background-color: #F6F6F6;") Formación de grupo base.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 1-2
                td(style="background-color: #F6F6F6;") Entender “OVOP”.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 1-3
                td(style="background-color: #F6F6F6;") Evaluar “Mi Pueblo”.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 1-4
                td(style="background-color: #F6F6F6;") Identificar recursos locales.
              tr(data-aos="fade-right") 
                th(rowspan="5") 2. Creación de Valor
                td 2-1
                td Compartir la visión de desarrollo (Sueño colectivo).
              tr(data-aos="fade-right")
                td 2-2
                td Idear el producto.
              tr(data-aos="fade-right")
                td 2-3
                td Analizar los productos potenciales desde #[i marketing] y participación y seleccionar el “Mi Producto”.
              tr(data-aos="fade-right")
                td 2-4
                td Formar organizaciones/redes de negocio colectivo para alcanzar el “Sueño Colectivo”.
              tr(data-aos="fade-right")
                td 2-5
                td Elaborar el plan de acción comunitario.
              tr(data-aos="fade-right") 
                th(style="background-color: #F6F6F6;" rowspan="5") 3A. Desarrollo de Negocio Colectivo
                td(style="background-color: #F6F6F6;") 3A-1
                td(style="background-color: #F6F6F6;") Implementar el plan de acción comunitario.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 3A-2
                td(style="background-color: #F6F6F6;") Gestionar el producto OVOP.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 3A-3
                td(style="background-color: #F6F6F6;") Presentar “Mi Pueblo”, “Mi Producto”, “Mi Orgullo” a la comunidad de otras áreas.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 3A-4
                td(style="background-color: #F6F6F6;") Buscar aliados.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 3A-5
                td(style="background-color: #F6F6F6;") Mejorar el plan de acción / gestión a mediano plazo.
              tr(data-aos="fade-right") 
                th(rowspan="4") 3B. Evolución de Negocio Colectivo
                td 3B-1
                td Elaborar el plan de negocio con base en la estrategia Marca Territorial e inclusión social.
              tr(data-aos="fade-right")
                td 3B-2
                td Implementar el plan de negocio.
              tr(data-aos="fade-right")
                td 3B-3
                td Revisar y mejorar el plan de negocio.
              tr(data-aos="fade-right")
                td 3B-4
                td Completar el proceso de formación jurídica para la empresa social mediante la presentación de las actividades desarrolladas en la comunidad.
              tr(data-aos="fade-right") 
                th(style="background-color: #F6F6F6;" rowspan="3") 4. Sostenibilidad
                td(style="background-color: #F6F6F6;") 4-1
                td(style="background-color: #F6F6F6;") Actualizar e implementar el plan de acción comunitaria/gestión a mediano plazo.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 4-2
                td(style="background-color: #F6F6F6;") Actualizar e implementar el plan de acción estratégica de la Marca Territorial.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") 4-3
                td(style="background-color: #F6F6F6;") Administrar la Marca Territorial construida para el desarrollo local.
              tr(data-aos="fade-right") 
                th(rowspan="5") Estrategia de Marca Territorial
                td 1
                td Establecer el mecanismo.
              tr(data-aos="fade-right")
                td 2
                td Implementar la educación interna sobre marca.
              tr(data-aos="fade-right")
                td 3
                td Reconocer la situación actual dentro y fuera del territorio.
              tr(data-aos="fade-right")
                td 4
                td Planificar el esquema general de la estrategia de marca territorial.
              tr(data-aos="fade-right")
                td 5
                td Elaborar el plan de acción estratégica.

    .BG01.mb-4
      .row.justify-content-center
        .col-lg-4.col-sm-6.col-8.mb-lg-0.mb-4.px-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img14.jpg' alt="Imagen decorativa")
        .col-lg-8.px-0(data-aos="fade-left")
          .p-4
            p.mb-0 #[strong Mi Pueblo, Mi Producto, Mi Orgullo] es el concepto central del enfoque OVOP Colombia y reúne tres elementos fundamentales para el desarrollo territorial. #[strong Mi Pueblo] hace referencia al o los territorios en los que la comunidad trabaja de manera colectiva para alcanzar su sueño común. #[strong Mi Producto] alude al producto único que identifica y caracteriza al territorio, el cual puede corresponder a uno o varios bienes o servicios representativos. Finalmente, #[strong Mi Orgullo] se relaciona con la identidad, el sentido de pertenencia y el orgullo que la comunidad siente por su territorio y por los productos únicos que lo distinguen.
              
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
