import AsyncStorage from '@react-native-async-storage/async-storage';
import contenido from '../modelo/almacenamiento/contenido';

const cargarContenido = async () => {
  var contenidoDB = await AsyncStorage.getItem('contenido');
  if (contenidoDB === null) {
    await AsyncStorage.setItem('contenido', JSON.stringify(contenido));
    var contenidoDB = await AsyncStorage.getItem('contenido');
  }
  return contenidoDB;
};

const agregarPalabra = (lista, palabraNueva) => {
  var listaOriginal = lista;
  var nuevoElemento = {
    titulo: palabraNueva,
    contenido: palabraNueva,
    completo: false,
  };
  listaOriginal.push(nuevoElemento);
  return listaOriginal;
};

const removerPalabra = (lista, indice) => {
  var listaOriginal = lista;
  listaOriginal.splice(indice, 1);
  return listaOriginal;
};

const guardarPalabra = async palabraNueva => {
  const contenidoDB = JSON.parse(await AsyncStorage.getItem('contenido'));
  var palabras = contenidoDB.find(x => x.titulo === 'Mis Palabras');
  var opciones = palabras.opciones;
  opciones = agregarPalabra(opciones, palabraNueva);
  palabras.opciones = opciones;
  contenidoDB.palabras = palabras;
  await AsyncStorage.setItem('contenido', JSON.stringify(contenidoDB));
  return true;
};

const eliminarPalabra = async index => {
  const contenidoDB = JSON.parse(await AsyncStorage.getItem('contenido'));
  var palabras = contenidoDB.find(x => x.titulo === 'Mis Palabras');
  var opciones = palabras.opciones;
  opciones = removerPalabra(opciones, index);
  palabras.opciones = opciones;
  contenidoDB.palabras = palabras;
  await AsyncStorage.setItem('contenido', JSON.stringify(contenidoDB));
};

const actualizarEstadoPalabra = async (ruta, idPalabra) => {
  const contenidoDB = JSON.parse(await AsyncStorage.getItem('contenido'));
  var nuevoContenido = [...contenidoDB];
  var contenidoTemp = [...nuevoContenido];
  for (var id of ruta) {
    var contenidoTemp = contenidoTemp.find(x => x.id === id).opciones;
  }
  contenidoTemp = contenidoTemp.find(x => x.id === idPalabra);
  contenidoTemp.completo = !contenidoTemp.completo;
  await AsyncStorage.setItem('contenido', JSON.stringify(nuevoContenido));
  var nuevoEstado = contenidoTemp.completo;
  return nuevoEstado;
};

export {
  cargarContenido,
  guardarPalabra,
  eliminarPalabra,
  actualizarEstadoPalabra,
};
