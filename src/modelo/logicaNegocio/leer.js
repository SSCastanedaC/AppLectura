import {
  cargarContenido,
  actualizarContenido,
} from 'AppGlennDoman/src/presentador/logicaAplicacion';

// Funciones Unitarias
export const agregarPalabra = (lista, palabraNueva) => {
  var listaOriginal = lista;
  var nuevoElemento = {
    titulo: palabraNueva,
    contenido: palabraNueva,
    completo: false,
  };
  listaOriginal.push(nuevoElemento);
  return listaOriginal;
};

export const removerPalabra = (lista, indice) => {
  var listaOriginal = lista;
  listaOriginal.splice(indice, 1);
  return listaOriginal;
};

export const cambiarEstadoPalabra = (lista, idPalabra) => {
  var contenidoTemp = lista;
  contenidoTemp = contenidoTemp.find(x => x.id === idPalabra);
  contenidoTemp.completo = !contenidoTemp.completo;
  return contenidoTemp;
};

// Funciones Integradas
export const guardarPalabra = async palabraNueva => {
  var contenidoDB = JSON.parse(await cargarContenido());
  var palabras = contenidoDB.find(x => x.titulo === 'Mis Palabras');
  var opciones = palabras.opciones;
  opciones = agregarPalabra(opciones, palabraNueva);
  palabras.opciones = opciones;
  contenidoDB.palabras = palabras;
  await actualizarContenido(contenidoDB);
  return true;
};

export const eliminarPalabra = async index => {
  var contenidoDB = JSON.parse(await cargarContenido());
  var palabras = contenidoDB.find(x => x.titulo === 'Mis Palabras');
  var opciones = palabras.opciones;
  opciones = removerPalabra(opciones, index);
  palabras.opciones = opciones;
  contenidoDB.palabras = palabras;
  await actualizarContenido(contenidoDB);
  return true;
};

export const actualizarEstadoPalabra = async (ruta, idPalabra) => {
  var contenidoDB = JSON.parse(await cargarContenido());
  var nuevoContenido = [...contenidoDB];
  var contenidoTemp = [...nuevoContenido];
  for (var id of ruta) {
    var contenidoTemp = contenidoTemp.find(x => x.id === id).opciones;
  }
  contenidoTemp = cambiarEstadoPalabra(contenidoTemp, idPalabra);
  await actualizarContenido(nuevoContenido);
  var nuevoEstado = contenidoTemp.completo;
  return nuevoEstado;
};
