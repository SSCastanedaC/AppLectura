import {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {Portal, Snackbar, Text} from 'react-native-paper';

import colores from 'AppGlennDoman/src/vista/componentes/atomos/colores';
import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones/dimensiones';
import EspacioVertical from 'AppGlennDoman/src/vista/componentes/atomos/espacioVertical';
import Contenedor from 'AppGlennDoman/src/vista/componentes/moleculas/contenedor';
import Encabezado from 'AppGlennDoman/src/vista/componentes/moleculas/encabezado';
import TarjetaError from './componentes/tarjetaError';
import TarjetaRespuesta from './componentes/tarjetaRespuesta';
import TarjetaVictoria from './componentes/tarjetaVictoria';

import {
  generarListaPalabras,
  generarRespuestas,
} from 'AppGlennDoman/src/modelo/logicaNegocio/jugar';
import {cargarContenido} from 'AppGlennDoman/src/presentador/logicaAplicacion';

const Jugar = ({navigation}) => {
  const [preguntas, setPreguntas] = useState([]);
  const [numeroPregunta, setNumeroPregunta] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [visibleError, setVisibleError] = useState(false);
  const [visibleVictoria, setVisibleVictoria] = useState(false);

  const crearPreguntas = async () => {
    var contenidoDB = JSON.parse(await cargarContenido());
    var listaPalabras = generarListaPalabras(contenidoDB, []);
    setPreguntas(listaPalabras);
  };

  const responder = opcionSeleccionada => {
    if (opcionSeleccionada.correcta) {
      setVisibleSnackbar(true);
      if (numeroPregunta === preguntas.length - 1) {
        setVisibleVictoria(true);
      } else {
        setNumeroPregunta(numeroPregunta + 1);
      }
    } else {
      setVisibleError(true);
    }
  };

  const reintentar = () => {
    setNumeroPregunta(0);
    setVisibleError(false);
    setVisibleVictoria(false);
    setNumeroPregunta(0);
    setRespuestas(generarRespuestas(preguntas, numeroPregunta));
  };

  useEffect(() => {
    crearPreguntas();
  }, []);

  useEffect(() => {
    !isNaN(numeroPregunta) &&
      preguntas.length > 0 &&
      setRespuestas(generarRespuestas(preguntas, numeroPregunta));
  }, [preguntas, numeroPregunta]);

  return (
    <SafeAreaView>
      <View
        style={{
          height: dimensiones.totalAlto,
          backgroundColor: '#fafafa',
        }}>
        <Encabezado titulo="Tutorial" presionar={() => navigation.goBack()} />
        {preguntas.length > 0 && (
          <View
            style={{
              height: 0.9 * dimensiones.totalAlto,
            }}>
            <ScrollView
              style={{
                height: 0.9 * dimensiones.totalAlto,
              }}>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingVertical: 0.05 * dimensiones.totalAlto,
                }}>
                <Image
                  source={preguntas[numeroPregunta].imagen}
                  style={{
                    resizeMode: 'contain',
                    width: 0.4 * dimensiones.totalAncho,
                    height: 0.4 * dimensiones.totalAncho,
                  }}
                />
              </View>
              <View>
                <Contenedor>
                  <Text
                    variant="titleMedium"
                    style={{
                      fontWeight: 'bold',
                      color: colores.colors.primary,
                      textAlign: 'center',
                      marginBottom: 20,
                    }}>
                    Selecciona la palabra correcta
                  </Text>
                  {respuestas.map((respuesta, key) => (
                    <View key={key}>
                      <TarjetaRespuesta
                        respuesta={respuesta}
                        responder={respuesta => responder(respuesta)}
                      />
                      <EspacioVertical altura={20} />
                    </View>
                  ))}
                </Contenedor>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
      <Portal>
        <TarjetaError
          visible={visibleError}
          puntaje={numeroPregunta}
          minimizar={() => setVisibleError(false)}
          reintentar={() => reintentar()}
        />
        <TarjetaVictoria
          visible={visibleVictoria}
          minimizar={() => setVisibleVictoria(false)}
          reintentar={() => reintentar()}
        />
        <Snackbar
          duration={1000}
          visible={visibleSnackbar}
          onDismiss={() => setVisibleSnackbar(false)}>
          Felicitaciones, tu respuesta es correcta 👍️
        </Snackbar>
      </Portal>
    </SafeAreaView>
  );
};

export default Jugar;
