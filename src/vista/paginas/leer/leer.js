import {useEffect, useState} from 'react';
import {Alert, SafeAreaView, ScrollView, View} from 'react-native';
import {Banner, Portal, Snackbar} from 'react-native-paper';

import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones/dimensiones';
import EspacioVertical from 'AppGlennDoman/src/vista/componentes/atomos/espacioVertical';
import Contenedor from 'AppGlennDoman/src/vista/componentes/moleculas/contenedor';
import Encabezado from 'AppGlennDoman/src/vista/componentes/moleculas/encabezado';
import BotonAgregarPalabra from './componentes/botonAgregarPalabra';
import ModalLectura from './componentes/modalLectura';
import ModalNuevaPalabra from './componentes/modalNuevaPalabra';

import {
  actualizarEstadoPalabra,
  cargarContenido,
  eliminarPalabra,
  guardarPalabra,
} from '../../../presentador/logicaAplicacion';
import BotonVerPalabra from './componentes/botonVerPalabra';

const Leer = ({route, navigation}) => {
  const [ruta, setRuta] = useState([]);
  const [opciones, setOpciones] = useState([]);
  const [titulo, setTitulo] = useState('Aprender a Leer');
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);
  const [palabra, setPalabra] = useState('');
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [mensajeSnackbar, setMensajeSnackbar] = useState('');
  const params = route.params;

  //Sobreescribir función de botón Atrás
  useEffect(() => {
    navigation.removeListener('beforeRemove');
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      params.ruta.splice(params.ruta.length - 1, 1);
      navigation.dispatch(e.data.action);
    });
  }, []);

  const crearOpciones = async () => {
    const generarMenu = (menu, ruta, i) => {
      if (ruta.length - 1 === i) {
        var menu_temp = menu.find(x => x.id === ruta[i]);
        setTitulo(menu_temp?.titulo);
        setOpciones(menu_temp.opciones);
        setRuta(ruta);
      } else {
        var menu_temp = menu.find(x => x.id === ruta[i]);
        i = i + 1;
        generarMenu(menu_temp.opciones, ruta, i);
      }
    };
    var contenidoDB = JSON.parse(await cargarContenido());
    if (params.ruta.length > 0) {
      generarMenu(contenidoDB, params.ruta, 0);
    } else {
      setOpciones(contenidoDB);
      setRuta([]);
    }
  };

  //Navegar
  const continuar = opcion => {
    if (opcion.contenido) {
      setPalabra(opcion.contenido);
      setVisibleModal(true);
    } else {
      var ruta_temp = ruta;
      ruta_temp.push(opcion.id);
      navigation.push('Palabras', {ruta: ruta_temp});
    }
  };

  //Guardar Palabra
  const guardar = async textForm => {
    await guardarPalabra(textForm);
    await crearOpciones();
    setVisibleForm(false);
  };

  //Eliminar Palabra
  const confirmarEliminar = async indice => {
    await eliminarPalabra(indice);
    crearOpciones();
  };

  const eliminar = indice => {
    Alert.alert('¿Deseas eliminar la palabra?', '', [
      {
        text: 'No, cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Si, eliminar', onPress: indice => confirmarEliminar(indice)},
    ]);
  };

  //Crear menú
  useEffect(() => {
    crearOpciones();
  }, []);

  const marcar = async id => {
    var ruta = params.ruta;
    nuevoEstado = await actualizarEstadoPalabra(ruta, id);
    crearOpciones();
    var mensajeSnackbar = nuevoEstado
      ? 'Marcado como leído'
      : 'Marcado como no leído';
    setMensajeSnackbar(mensajeSnackbar);
    setVisibleSnackbar(true);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          height: dimensiones.totalAlto,
          backgroundColor: '#fafafa',
        }}>
        <Encabezado titulo={titulo} presionar={() => navigation.goBack()} />
        <View
          style={{
            height: 0.9 * dimensiones.totalAlto,
          }}>
          <ScrollView
            style={{
              height: 0.9 * dimensiones.totalAlto,
            }}>
            {opciones.length > 0 && (
              <Contenedor>
                <EspacioVertical altura={20} />
                {opciones.map((opcion, index) => (
                  <View key={index} style={{paddingVertical: 10}}>
                    <BotonVerPalabra
                      index={index}
                      opcion={opcion}
                      presionarContinuar={() => continuar(opcion)}
                      presionarMarcar={id => marcar(id)}
                      presionarEliminar={
                        titulo === 'Mis Palabras' ? () => eliminar(index) : null
                      }
                    />
                  </View>
                ))}
              </Contenedor>
            )}
            {titulo === 'Mis Palabras' && (
              <View>
                {opciones.length === 0 && (
                  <View>
                    <Banner visible={true}>
                      Aquí puedes agregar tus propias palabras para personalizar
                      el aprendizaje del niño a sus necesidades y su entorno.
                    </Banner>
                  </View>
                )}
                <Contenedor>
                  <View>
                    <EspacioVertical altura={20} />
                    <BotonAgregarPalabra
                      presionar={() => setVisibleForm(true)}
                    />
                  </View>
                </Contenedor>
              </View>
            )}
            <EspacioVertical altura={50} />
          </ScrollView>
        </View>
      </View>
      <Portal>
        <ModalLectura
          visible={visibleModal}
          minimizar={() => setVisibleModal(false)}
          titulo={titulo}
          palabra={palabra}
        />
        <ModalNuevaPalabra
          visible={visibleForm}
          minimizar={() => setVisibleForm(false)}
          guardar={textForm => guardar(textForm)}
        />
        <Snackbar
          duration={1000}
          visible={visibleSnackbar}
          onDismiss={() => setVisibleSnackbar(false)}>
          {mensajeSnackbar}
        </Snackbar>
      </Portal>
    </SafeAreaView>
  );
};

export default Leer;
