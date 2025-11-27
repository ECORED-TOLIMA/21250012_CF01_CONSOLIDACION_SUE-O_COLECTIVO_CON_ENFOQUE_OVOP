<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1 Fuentes de información
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p En el mundo contemporáneo, la información circula con rapidez y se encuentra disponible gracias a Internet y a las tecnologías digitales. Sin embargo, este acceso masivo también implica desafíos: gran parte de la información aparece desorganizada, poco jerarquizada o sin criterios claros de calidad. Como resultado, diferenciar entre fuentes confiables y fuentes con errores o escaso rigor se vuelve complejo, pero imprescindible.
        .BG01.p-4
          .row.justify-content-center
            .col-lg-2.col-3.mb-lg-0.mb-4
              img(src='@/assets/curso/tema5/img01.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 Identificar fuentes pertinentes y de calidad es fundamental para la elaboración de trabajos académicos, investigaciones, informes, materiales educativos, noticias, conferencias y otros productos de divulgación. La confiabilidad de las fuentes determina, en gran medida, la solidez del conocimiento generado y la validez de los resultados obtenidos.
      .col-lg-3.col-sm-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img02.svg' alt="Imagen decorativa")

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Definición
    
    p.mb-5 Las fuentes de información son documentos, recursos o materiales que se consultan para obtener datos sobre un tema determinado. En los procesos académicos, escolares o periodísticos, representan el soporte que permite fundamentar un escrito u otro tipo de producción intelectual.

    figure.mb-4
      img(src='@/assets/curso/tema5/img03.png' alt="Imagen decorativa")
    
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Tipos
    
    p Las fuentes de información pueden clasificarse en tres categorías principales:
  
    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-4 
            .col-7
              figure
                img(src='@/assets/curso/tema5/img04.svg', alt="Imagen decorativa")
          p.mb-0 #[strong Fuentes primarias]: corresponden a los testimonios o materiales más cercanos al hecho que se investiga, con la menor cantidad posible de intermediación. Por ejemplo, testigos directos de un acontecimiento o documentos producidos en el momento en que ocurrió un hecho histórico.
      .col-lg-4.col-sm-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-4 
            .col-7
              figure
                img(src='@/assets/curso/tema5/img05.svg', alt="Imagen decorativa")
          p.mb-0 #[strong Fuentes secundarias]: se basan en las fuentes primarias para analizarlas, interpretarlas, sintetizarlas o evaluarlas. Incluyen textos, informes o libros elaborados posteriormente y que reordenan o explican los materiales originales.
      .col-lg-4.col-sm-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-4 
            .col-7
              figure
                img(src='@/assets/curso/tema5/img06.svg', alt="Imagen decorativa")
          p.mb-0 #[strong Fuentes terciarias]: recopilan, organizan y comentan fuentes primarias y secundarias. Suelen presentarse como archivos, manuales, catálogos, enciclopedias o bases de datos que integran testimonios e interpretaciones previas.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Tipos
    
    p.mb-5 El método #[strong CRAAP] propone cinco criterios para evaluar la calidad de las fuentes de información: #[strong actualidad, relevancia, autoridad, exactitud y propósito.] Su aplicación facilita determinar si un recurso es confiable y adecuado para una investigación.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4.BG06
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h4.col.ps-3.mb-0 Criterios del método CRAAP
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Relevancia") 
            | Evalúa si la información responde a la necesidad de búsqueda y si puede ser aplicada al tema de estudio.
            | Tener en cuenta:
            ul.lista-ul--color.mb-0
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | El tipo de formato requerido para el trabajo.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | La pertinencia del contenido frente al tema.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Si la información está dentro del rango de años necesario.
          p(numero="2" titulo="Autoridad")
            | Se refiere a la legitimidad y credibilidad del autor o institución responsable de la fuente.
            | Preguntas clave:
            ul.lista-ul--color.mb-0
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | ¿Qué se sabe del autor?
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | ¿Es reconocido en su área temática?
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | ¿Ha sido citado por otros?
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | ¿La publicación tiene mecanismos de control de calidad?
          p(numero="3" titulo="Actualidad")
            | Indica si la información está actualizada y si incorpora avances recientes.
            | Considerar:
            ul.lista-ul--color.mb-0
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | El periodo de años pertinente para el tema.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | La frecuencia de actualización de la fuente.
          p(numero="4" titulo="Exactitud") 
            | Se relaciona con la validez y precisión del contenido.
            | Considerar:
            ul.lista-ul--color.mb-0
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Verificar si la información coincide con la necesidad de búsqueda.
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Utilizar palabras clave precisas para filtrar resultados confiables.
          p(numero="5" titulo="Fiabilidad")
            | Evalúa si la fuente es creíble, verificable y respaldada por instituciones reconocidas.
            | Tener en cuenta:
            ul.lista-ul--color.mb-0
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Verificar si el sitio web utiliza protocolos de seguridad (“https”).
              li(style="margin-bottom: 2px")
                i.fas.fa-circle-notch
                | Evitar fuentes con publicidad excesiva o contenido sensacionalista.
      .col-lg-3.col-sm-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img07.jpg' alt="Imagen decorativa")

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Herramientas de levantamiento

    p.mb-5 Las herramientas de levantamiento permiten recolectar datos primarios en investigaciones sociales, educativas o comunitarias. Entre las más utilizadas se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4(data-aos="fade-right")
        .BG01.p-4.h-100
          .row.justify-content-center
            .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema5/img08.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Encuesta
              p.mb-0 Método descriptivo para identificar ideas, necesidades, preferencias, hábitos u opiniones de un grupo específico.
      .col-lg-6.mb-4(data-aos="fade-right")
        .BG01.p-4.h-100
          .row.justify-content-center
            .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema5/img09.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Entrevista personal
              p Técnica mediante la cual el entrevistador formula preguntas relacionadas con los objetivos de la investigación.
              p Tipos:
              ul.lista-ul--color.mb-0
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | #[strong Estructurada]: con preguntas predefinidas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | #[strong Semiestructurada]: con pautas generales que permiten mayor libertad al entrevistado.
      .col-lg-6.mb-4(data-aos="fade-right")
        .BG01.p-4.h-100
          .row.justify-content-center
            .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema5/img10.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Cuestionario
              p Conjunto de preguntas ordenadas de manera coherente para obtener información específica. Se puede aplicar:
              ul.lista-ul--color.mb-0
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | A través de un entrevistador.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Por teléfono.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Por correo físico o electrónico.
      .col-lg-6.mb-4(data-aos="fade-right")
        .BG01.p-4.h-100
          .row.justify-content-center
            .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema5/img11.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Hoja de registro
              p.mb-0 Formulario utilizado para llevar control de operaciones, como inventarios, asistencia o actividad diaria.

    .row.justify-content-center.mb-5
      .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4.px-0(data-aos="fade-right")
        .BG09.px-2
          img(src='@/assets/curso/tema5/img12.svg' alt="Imagen decorativa")
      .col-lg-8.px-0(data-aos="fade-left")
        .BG11.p-4
          .h5.mb-0 Se puede considerar que la información es relevante sólo si nos permite tomar decisiones significativas para realizar cambios. Necesariamente estos deben estar acorde a la determinación de necesidades y prioridades.

</template>

<script>
export default {
  name: 'Tema5',
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
