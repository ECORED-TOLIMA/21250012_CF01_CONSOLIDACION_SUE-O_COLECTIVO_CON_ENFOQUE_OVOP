<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: '¿Qué entendemos por OVOP?',
      titulo: 'Cuestionario',
      introduccion:
        'Objetivo, evaluar la comprensión de los aprendices sobre conceptos clave de OVOP, desarrollo endógeno, territorio, fuentes de información, mapa de actores, cartografía social, mediante preguntas de verdadero o falso para reforzar el aprendizaje.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'La estrategia de Desarrollo Local - OVOP One Village, One Producto, surgió en 1961 en la Villa de Oyama, localizada en una zona montañosa alejada de los centros urbanos de la prefectura de Oita, Japón.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El Movimiento OVOP está basado en 3 principios básicos, a saber: 1. Desarrollo del recurso humano, 2. Actuar local, pensar global y 3. Autogestión y creatividad.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'OVOP Colombia – Mi Pueblo, Mi Producto, Mi Orgullo, tiene como propósito fortalecer la cohesión social y autonomía económica de las comunidades donde están las iniciativas OVOP para revitalizar los territorios y contribuir a la paz en Colombia',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'OVOP Colombia tiene una metodología para su implementación en el territorio. Esta metodología tiene 17 pasos para su implementación distribuidos en 5 grandes fases.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Las comunidades rurales definen el territorio como el espacio físico en el que habitan los seres humanos.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Las dimensiones del contexto territorial son, ambiental, social, económica y política',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Las fuentes de información son documentos que se consultan para obtener datos de un tema sobre el que se quiere saber más',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Las fuentes de información se pueden clasificar en dos tipos: secundarias y terciarias',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Es fundamental la validación de las fuentes para asegurar la calidad del conocimiento aplicado.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'La fiabilidad de una fuente de información es aquella que se considera no creíble, no precisa y poco digna de confianza para obtener datos',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Encuestas, entrevistas, cuestionarios, hojas de registro son algunas de las herramientas para el levantamiento de información ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La nube pública es más costosa que una nube privada debido a los servicios compartidos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Mapa de actores consiste en identificar los atractivos de un territorio, resaltando sus características.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'En el mapa de actores se deben identificar roles, funciones y relaciones de los actores del territorio',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Los servidores físicos y virtuales son componentes esenciales de la infraestructura de la nube.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'La cartografía social es una herramienta que sirve para construir conocimiento de manera colectiva; es un acercamiento de la comunidad a su espacio geográfico, social, económico, histórico y cultural',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'La cartografía social exige una concertación previa que defina el sentido o énfasis del mapa de acuerdo con las necesidades',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Se pueden elaborar mapas del pasado, del presente y del futuro, así como mapas temáticos que nos permitan un mayor conocimiento del entorno',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'La cartografía social es una herramienta de comercialización social que propende por el incremento de recursos económicos en un determinado espacio geográfico.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Putumayo, Nariño, Cauca, Huila, Tolima, Quindío, Antioquia, Cundinamarca, Boyacá, Bolívar, Córdoba, Santander, fueron los 12 departamentos seleccionados para implementar OVOP en Colombia.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Caracterización del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. La participación demuestra claridad en los conceptos y su relación con los procesos de desarrollo local.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
