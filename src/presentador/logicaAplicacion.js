import AsyncStorage from '@react-native-async-storage/async-storage';
import contenido from 'AppGlennDoman/src/modelo/almacenamiento/contenido';

export const cargarContenido = async () => {
  var contenidoDB = await AsyncStorage.getItem('contenido');
  if (contenidoDB === null) {
    await AsyncStorage.setItem('contenido', JSON.stringify(contenido));
    var contenidoDB = await AsyncStorage.getItem('contenido');
  }
  return contenidoDB;
};

export const actualizarContenido = async contenido => {
  await AsyncStorage.setItem('contenido', JSON.stringify(contenido));
  var contenidoDB = await cargarContenido();
  return contenidoDB;
};
