export const generarRespuestas = (preguntas, numeroPregunta) => {
  var preguntasTemp = [...preguntas];
  var respuestaCorrecta = preguntasTemp[numeroPregunta];
  //Eliminar palabras duplicadas que pertenecen a dos o más categorías
  preguntasTemp = Object.values(
    preguntasTemp.reduce((acc, cur) => {
      acc[cur.contenido] = acc[cur.contenido] || cur;
      return acc;
    }, {}),
  );
  preguntasTemp = preguntasTemp.filter(
    pregunta => pregunta.contenido !== respuestaCorrecta.contenido,
  );
  //Ordenar opciones de respuesta de forma aleatoria
  preguntasTemp.sort(() => Math.random() - 0.5);
  var respuestas = preguntasTemp.slice(0, 2);
  respuestas.push({...respuestaCorrecta, correcta: true});
  respuestas.sort(() => Math.random() - 0.5);
  return respuestas;
};

//Generar una lista unidimensional de aquellas palabras que tienen imagen
export const generarListaPalabras = (contenido, lista) => {
  if (Array.isArray(contenido)) {
    contenido.forEach(item => generarListaPalabras(item, lista));
  } else if (
    typeof contenido === 'object' &&
    contenido !== null &&
    !contenido.hasOwnProperty('imagen')
  ) {
    Object.values(contenido).forEach(val => generarListaPalabras(val, lista));
  } else {
    if (typeof contenido === 'object') {
      lista.push({
        contenido: contenido.contenido,
        imagen: contenido.imagen,
      });
    }
  }
  return lista;
};
