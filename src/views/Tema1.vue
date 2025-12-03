<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Desarrollo endógeno
    
    p.mb-5 El desarrollo endógeno se entiende como un proceso de transformación territorial que surge desde las capacidades internas de las comunidades. Su objetivo es fortalecer iniciativas locales que promuevan bienestar, sostenibilidad y autonomía, aprovechando los recursos propios de cada territorio y articulándolos con oportunidades externas.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img01.svg' alt="Imagen decorativa" style="max-width:75px")
          br
          | Este enfoque parte de la idea de que el desarrollo no se impone desde afuera; por el contrario, se construye desde los actores locales, sus dinámicas, sus conocimientos y sus formas de organización. Su énfasis está en generar condiciones que impulsen procesos sostenibles, equitativos y adaptados a la realidad de cada comunidad.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p El concepto de desarrollo endógeno se refiere a un modelo de organización socioeconómica en el cual las comunidades locales y regionales formulan y ponen en marcha sus propias propuestas de desarrollo. Este enfoque se basa en procesos que surgen de manera interna, siguiendo una dinámica “de adentro hacia afuera” y “de abajo hacia arriba”. Su propósito es fortalecer la capacidad de las comunidades para identificar sus necesidades reales, reconocer su potencial y participar activamente en la toma de decisiones que orientan su futuro.
        p.mb-0 Este modelo posibilita:
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img02.jpg' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.mb-lg-0.mb-4
        .tarjeta.color-primario.p-4.h-100
          .row.mb-4
            .col-sm-4.col-3
              img(src='@/assets/curso/tema1/img03.svg' alt="Imagen decorativa")
          h5.mb-0 Reconocer e identificar necesidades y potencialidades reales de la comunidad.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4
        .tarjeta.color-primario.p-4.h-100
          .row.mb-4
            .col-sm-4.col-3
              img(src='@/assets/curso/tema1/img04.svg' alt="Imagen decorativa")
          h5.mb-0 Integrar de manera participativa a los ciudadanos en la identificación de oportunidades.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4
        .tarjeta.color-primario.p-4.h-100
          .row.mb-4
            .col-sm-4.col-3
              img(src='@/assets/curso/tema1/img05.svg' alt="Imagen decorativa")
          h5.mb-0 Fortalecer la participación en los procesos de toma de decisiones.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4
        .tarjeta.color-primario.p-4.h-100
          .row.mb-4
            .col-sm-4.col-3
              img(src='@/assets/curso/tema1/img06.svg' alt="Imagen decorativa")
          h5.mb-0 Promover conciencia sobre un desarrollo sostenible y respetuoso del medio ambiente.

    .row.justify-content-center.mb-4
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Asimismo, el desarrollo endógeno se entiende como un proceso de desarrollo local impulsado por la iniciativa de las personas del territorio, quienes aprovechan los recursos disponibles y se apoyan en expresiones culturales, tradiciones y técnicas propias. (Gambarota & Lorda, 2017; JICA - SENA, 2020)

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Importancia
    
    .row.justify-content-center.mb-4
      .col-lg-3.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img08.jpg' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p La importancia del desarrollo endógeno radica en su capacidad para fortalecer la autonomía territorial y potenciar los recursos ya existentes. Este enfoque permite que las comunidades se conviertan en protagonistas de su propio proceso de transformación, ampliando su capacidad de gestión y fortaleciendo la cohesión social. Desde esta perspectiva, su relevancia se refleja en aspectos como:
        .tarjeta.BG01.p-4
          .row.justify-content-center.align-items-center
            .col-lg-8.order-lg-1.order-2
              ul.lista-ul--color.mb-0
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Potencia las iniciativas locales y su capacidad de transformación.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Fomenta la autonomía y la toma de decisiones informada.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Fortalece la cohesión social y la identidad territoria.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Promueve el uso sostenible de los recursos disponibles.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Contribuye a reducir desigualdades y a mejorar la calidad de vida.
            .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img10.svg' alt="Imagen decorativa")

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Características
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Las características del desarrollo endógeno se relacionan con los elementos organizativos, relacionales y participativos que fortalecen la capacidad de una comunidad para impulsar su propio progreso. Este enfoque reconoce que la transformación territorial surge cuando existen dinámicas colectivas que permiten coordinar esfuerzos, construir consensos y movilizar capacidades locales. En este sentido, las características del desarrollo endógeno se vinculan directamente con los elementos necesarios para promover procesos sociales y económicos sostenibles.
        p.mb-0 De acuerdo con Silvina (2012), citado en Gómez-Ibagón et al. (2014), el desarrollo endógeno demanda elementos como:
      .col-lg-3.col-sm-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img11.jpg' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-xl-2.col-lg.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.BG02.p-4.h-100
          .row.justify-content-center.mb-4
            .col-lg-6.col-4
              img(src='@/assets/curso/tema1/img12.svg' alt="Imagen decorativa")
          h5.mb-0 Organización
      .col-xl-2.col-lg.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta.BG02.p-4.h-100
          .row.justify-content-center.mb-4
            .col-lg-6.col-4
              img(src='@/assets/curso/tema1/img13.svg' alt="Imagen decorativa")
          h5.mb-0 Comunicación
      .col-xl-2.col-lg.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.BG02.p-4.h-100
          .row.justify-content-center.mb-4
            .col-lg-6.col-4
              img(src='@/assets/curso/tema1/img14.svg' alt="Imagen decorativa")
          h5.mb-0 Cooperación
      .col-xl-2.col-lg.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta.BG02.p-4.h-100
          .row.justify-content-center.mb-4
            .col-lg-6.col-4
              img(src='@/assets/curso/tema1/img15.svg' alt="Imagen decorativa")
          h5.mb-0 Interacción
      .col-xl-2.col-lg.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.BG02.p-4.h-100
          .row.justify-content-center.mb-4
            .col-lg-6.col-4
              img(src='@/assets/curso/tema1/img16.svg' alt="Imagen decorativa")
          h5.mb-0 Participación

    p Estos elementos permiten fortalecer el tejido social y consolidar iniciativas que contribuyen al bienestar colectivo.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Factores que lo impulsan
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img17.jpg')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Los factores que impulsan el desarrollo endógeno están relacionados con las condiciones, oportunidades y esfuerzos colectivos que fortalecen la capacidad de las comunidades para promover su propio progreso. Estos factores reflejan la manera en que los territorios pueden aprovechar sus recursos, activar dinámicas productivas y recuperar infraestructuras o saberes para generar bienestar social y económico. En este enfoque, los factores no solo representan recursos disponibles, sino también procesos sociales que permiten ampliar la participación, la equidad y el acceso a oportunidades.

    p.mb-5 De acuerdo con el planteamiento original, el desarrollo endógeno se impulsa mediante acciones como:

    SlyderF.color-acento-botones.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
      .tarjeta.BGIMG01.p-4
        .row.justify-content-center.mb-4
          .col-lg-8.col-6
            img(src='@/assets/curso/tema1/img18.svg' alt="Imagen decorativa")
        p.mb-0 Otorgar poder a comunidades organizadas para desarrollar su potencial agrícola, industrial y turístico.
      .tarjeta.BGIMG01.p-4
        .row.justify-content-center.mb-4
          .col-lg-8.col-6
            img(src='@/assets/curso/tema1/img19.svg' alt="Imagen decorativa")
        p.mb-0 Reintegrar a personas excluidas del sistema educativo, económico y social.
      .tarjeta.BGIMG01.p-4
        .row.justify-content-center.mb-4
          .col-lg-8.col-6
            img(src='@/assets/curso/tema1/img20.svg' alt="Imagen decorativa")
        p.mb-0 Construir redes productivas con participación activa y en condiciones de igualdad.
      .tarjeta.BGIMG01.p-4
        .row.justify-content-center.mb-4
          .col-lg-8.col-6
            img(src='@/assets/curso/tema1/img21.svg' alt="Imagen decorativa")
        p.mb-0 Facilitar el acceso a la tecnología y al conocimiento.
      .tarjeta.BGIMG01.p-4
        .row.justify-content-center.mb-4
          .col-lg-8.col-6
            img(src='@/assets/curso/tema1/img22.svg' alt="Imagen decorativa")
        p.mb-0 Recuperar y poner al servicio de la comunidad la infraestructura estatal abandonada (campos industriales, maquinarias, tierras inactivas).
      .tarjeta.BGIMG01.p-4
        .row.justify-content-center.mb-4
          .col-lg-8.col-6
            img(src='@/assets/curso/tema1/img23.svg' alt="Imagen decorativa")
        p.mb-0 Generar bienes y servicios por y para los ciudadanos.

    p Estos factores permiten dinamizar los procesos territoriales y fortalecer el papel de las comunidades en la construcción de su propio desarrollo.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Principios de la inclusión social
    
    .row.justify-content-center.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img24.svg' alt="Imagen decorativa")
      .col-lg-10(data-aos="fade-left")
        p.mb-0 La inclusión social es un proceso orientado a garantizar que todas las personas, independientemente de sus características o diferencias, tengan las mismas oportunidades para participar plenamente en la sociedad. Este enfoque promueve la eliminación de barreras físicas, sociales y culturales que impiden la participación equitativa, y busca consolidar entornos donde las diferencias individuales sean valoradas y reconocidas. La inclusión contribuye a la construcción de sociedades más justas, equitativas y prósperas, en las que cada persona puede aportar desde sus habilidades, conocimientos y talentos, fortaleciendo el tejido social y comunitario.
    
    p.mb-5 Los principales principios de la inclusión social son los siguientes:

    .BGIMG02.px-md-5.px-4.py-4.mb-4
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones(data-aos="zoom-in")
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2
              .h4 Respeto a la diversidad
              p.mb-0 Valorar y reconocer las diferencias entre las personas es un pilar fundamental de la inclusión, ya que fomenta entornos donde cada individuo se siente apreciado por quien es.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img25.jpg', alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2
              .h4 Igualdad de oportunidades
              p.mb-0 Garantizar que todas las personas cuenten con las mismas posibilidades de participación implica remover obstáculos y proporcionar los recursos necesarios para que cada quien pueda desarrollarse y prosperar.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img26.jpg', alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2
              .h4 Participación plena
              p.mb-0 Promover la participación activa de todas las personas en los procesos de toma de decisiones asegura que las diversas voces y perspectivas sean escuchadas y consideradas.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img27.jpg', alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2
              .h4 Accesibilidad
              p.mb-0 Eliminar barreras de carácter físico, social o cultural es esencial para permitir la participación equitativa de todas las personas en los diferentes ámbitos de la sociedad.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img28.jpg', alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2
              .h4 No discriminación
              p.mb-0 Proteger a las personas frente a cualquier tipo de discriminación garantiza un trato digno, respetuoso y equitativo, favoreciendo condiciones de igualdad para todos.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img29.jpg', alt="Imagen decorativa")

    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Autogestión
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La autogestión es un proceso mediante el cual las comunidades se organizan para tomar en sus propias manos la resolución de sus necesidades y la gestión de su desarrollo. Este enfoque destaca los valores, capacidades y recursos presentes en los individuos y en los grupos, fortaleciendo su habilidad para enfrentar y resolver problemas comunes. La autogestión impulsa la organización social y comunitaria, reduce la dependencia de ayudas externas y promueve la participación activa en la construcción de soluciones que atienden las demandas locales.
        p.mb-0 La autogestión comunitaria debe incluir los siguientes factores:
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img30.jpg' alt="Imagen decorativa")
    
    .row.justify-content-center.mb-4
      .col-lg-3.d-lg-flex.d-none(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img31.svg' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        SlyderF.color-acento-botones.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
          .tarjeta.BG03.p-4
            .row.justify-content-center.mb-4
              .col-lg-8.col-6
                img(src='@/assets/curso/tema1/img32.svg' alt="Imagen decorativa")
            p.mb-0 Acción participativa de los ciudadanos en las esferas personales, familiares y comunitarias para la toma de decisiones en el proceso de desarrollo.
          .tarjeta.BG03.p-4
            .row.justify-content-center.mb-4
              .col-lg-8.col-6
                img(src='@/assets/curso/tema1/img33.svg' alt="Imagen decorativa")
            p.mb-0 Acción orientada a disminuir la dependencia de ayudas gubernamentales como medio de subsistencia.
          .tarjeta.BG03.p-4
            .row.justify-content-center.mb-4
              .col-lg-8.col-6
                img(src='@/assets/curso/tema1/img34.svg' alt="Imagen decorativa")
            p.mb-0 Esfuerzo comunitario para responder y buscar soluciones a las necesidades o intereses de la población.
          .tarjeta.BG03.p-4
            .row.justify-content-center.mb-4
              .col-lg-8.col-6
                img(src='@/assets/curso/tema1/img35.svg' alt="Imagen decorativa")
            p.mb-0 Autorresponsabilidad, colaboración, contribución y trabajo voluntario en la búsqueda de soluciones.
          .tarjeta.BG03.p-4
            .row.justify-content-center.mb-4
              .col-lg-8.col-6
                img(src='@/assets/curso/tema1/img36.svg' alt="Imagen decorativa")
            p.mb-0 Participación en estructuras de poder, acceso a derechos y mecanismos de prevención frente a problemáticas sociales.

    separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Participación
    
    .BG04.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-3.col-sm-4.col-6.mb-lg-0.mb-4
          img(src='@/assets/curso/tema1/img37.png' alt="Imagen decorativa")
        .col-lg-9
          p.mb-0 La participación es un derecho fundamental y constituye la base del trabajo comunitario, ya que permite que las personas se involucren de manera activa en los asuntos que afectan su entorno. Este principio se refiere a la implicación real de la comunidad en los procesos, decisiones y actividades que orientan su desarrollo. La participación implica asumir un compromiso individual y colectivo para impulsar la transformación social, fortaleciendo la democracia local y promoviendo acciones que buscan el bienestar general. A través de ella se fomenta la corresponsabilidad, el diálogo y la construcción conjunta de soluciones que responden a las necesidades y aspiraciones del territorio.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
