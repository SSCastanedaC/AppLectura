import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {
  Button,
  Checkbox,
  IconButton,
  Modal,
  Portal,
  Snackbar,
  Surface,
  Text,
  TextInput,
  TouchableRipple,
} from 'react-native-paper';
import banner from '../../assets/banner.png';
import {
  Column,
  Container,
  Row,
  VerticalSpace,
} from '../../components/elements/layout/layout';
import {dimensions} from '../../components/elements/styles/styles';
import imagenPrueba from '../../assets/palabras/boca.png';
import theme from '../../components/foundations/theme';
import {contenido} from '../../utils/contenido';
import error from '../../assets/error.png';
import trofeo from '../../assets/trofeo.png';

const opciones = ['Perro', 'Gato', 'Pijama'];

const CustomOption = ({...props}) => {
  return (
    <Surface
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 10,
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}>
      {props.children}
    </Surface>
  );
};

const imagePath = '../../assets/palabras/';
const imageUri = '../../assets/palabras/mama.png';
//const imageUri = 'src/assets/palabras/mama.png';

const Juego = ({route, navigation}) => {
  const [preguntas, setPreguntas] = useState([]);
  const [numeroPregunta, setNumeroPregunta] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [visibleError, setVisibleError] = useState(false);
  const [visibleVictoria, setVisibleVictoria] = useState(false);

  const iterateArrays = (obj, lista) => {
    if (Array.isArray(obj)) {
      // if the current element is an array, iterate over it
      obj.forEach(item => iterateArrays(item, lista));
    } else if (
      typeof obj === 'object' &&
      obj !== null &&
      !obj.hasOwnProperty('imagen')
    ) {
      // if the current element is an object, iterate over its properties
      Object.values(obj).forEach(val => iterateArrays(val, lista));
    }
    // otherwise, the current element is not an array or an object, do something with it
    else {
      // do something with the element here
      if (typeof obj === 'object') {
        lista.push({
          contenido: obj.contenido,
          imagen: obj.imagen,
        });
      }
    }
    return lista;
  };

  const cargarContenido = async () => {
    var contenidoDB = await AsyncStorage.getItem('juego');
    if (contenidoDB === null) {
      await AsyncStorage.setItem('contenido', JSON.stringify(contenido));
      var contenidoDB = await AsyncStorage.getItem('contenido');
    }
    return contenidoDB;
  };

  const crearPreguntas = async () => {
    var contenidoDB = JSON.parse(await cargarContenido());
    var listaPalabras = iterateArrays(contenidoDB, []);
    setPreguntas(listaPalabras);
  };

  const crearPregunta = numeroPregunta => {
    var preguntasTemp = [...preguntas];
    var respuestaCorrecta = preguntasTemp[numeroPregunta];
    preguntasTemp = Object.values(
      preguntasTemp.reduce((acc, cur) => {
        acc[cur.contenido] = acc[cur.contenido] || cur;
        return acc;
      }, {}),
    );
    preguntasTemp = preguntasTemp.filter(
      pregunta => pregunta.contenido !== respuestaCorrecta.contenido,
    );
    preguntasTemp.sort(() => Math.random() - 0.5);
    var respuestas = preguntasTemp.slice(0, 2);
    respuestas.push({...respuestaCorrecta, correcta: true});
    respuestas.sort(() => Math.random() - 0.5);
    setRespuestas(respuestas);
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
      //Alert.alert('Buena idiota, perdió como un burro');
      //setNumeroPregunta(0);
      //crearPregunta(numeroPregunta);
      setVisibleError(true);
    }
  };

  const reintentar = () => {
    setNumeroPregunta(0);
    setVisibleError(false);
    setVisibleVictoria(false);
    setNumeroPregunta(0);
    crearPregunta(numeroPregunta);
  };

  useEffect(() => {
    crearPreguntas();
  }, []);

  useEffect(() => {
    !isNaN(numeroPregunta) &&
      preguntas.length > 0 &&
      crearPregunta(numeroPregunta);
  }, [preguntas, numeroPregunta]);

  return (
    <SafeAreaView>
      <View
        style={{
          height: dimensions.fullHeight,
          backgroundColor: '#fafafa',
        }}>
        <View
          style={{
            height: 0.1 * dimensions.fullHeight,
          }}>
          <ImageBackground source={banner} style={{height: '100%'}}>
            <Container>
              <View
                style={{
                  height: 0.1 * dimensions.fullHeight,
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                <Row>
                  <Column width={'10%'}>
                    <IconButton
                      icon="chevron-left"
                      size={20}
                      onPress={() => navigation.goBack()}
                      containerColor="white"
                    />
                  </Column>
                  <Column width={'80%'}>
                    <Text
                      variant="titleMedium"
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Juega y Aprende
                    </Text>
                  </Column>
                </Row>
              </View>
            </Container>
          </ImageBackground>
        </View>
        {preguntas.length > 0 && (
          <View
            style={{
              height: 0.9 * dimensions.fullHeight,
            }}>
            <ScrollView
              style={{
                height: 0.9 * dimensions.fullHeight,
              }}>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingVertical: 0.05 * dimensions.fullHeight,
                }}>
                <Image
                  source={preguntas[numeroPregunta].imagen}
                  style={{
                    resizeMode: 'contain',
                    width: 0.4 * dimensions.fullWidth,
                    height: 0.4 * dimensions.fullWidth,
                  }}
                />
              </View>
              <View>
                <Container>
                  <Text
                    variant="titleMedium"
                    style={{
                      fontWeight: 'bold',
                      color: theme.colors.primary,
                      textAlign: 'center',
                      marginBottom: 20,
                    }}>
                    Selecciona la palabra correcta
                  </Text>
                  {respuestas.map((respuesta, key) => (
                    <View key={key}>
                      <CustomOption>
                        <TouchableRipple
                          onPress={() => responder(respuesta)}
                          rippleColor={theme.colors.primary + '00'}>
                          <Container>
                            <View
                              style={{
                                paddingVertical: 10,
                              }}>
                              <Text
                                variant="titleLarge"
                                style={{textAlign: 'center'}}>
                                {respuesta.contenido}
                              </Text>
                            </View>
                          </Container>
                        </TouchableRipple>
                      </CustomOption>
                      <VerticalSpace height={20} />
                    </View>
                  ))}
                </Container>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
      <Portal>
        <Modal
          dismissable={false}
          visible={visibleError}
          onDismiss={() => setVisibleError(false)}
          contentContainerStyle={{flex: 1}}>
          <View
            style={{
              display: 'flex',
              width: '80%',
              marginHorizontal: '10%',
              paddingHorizontal: '10%',
              //height: '80%',
              paddingHorizontal: '10%',
              backgroundColor: '#fff',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <VerticalSpace height={30} />
            <Text
              variant="headlineLarge"
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: theme.colors.primary,
              }}>
              ¡Perdiste!
            </Text>
            <VerticalSpace height={20} />
            <Image
              source={error}
              style={{
                resizeMode: 'contain',
                width: 0.6 * dimensions.fullWidth,
                height: 0.6 * dimensions.fullWidth,
              }}
            />
            <VerticalSpace height={15} />
            <Text
              variant="headlineSmall"
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: theme.colors.primary,
              }}>
              Tu puntaje: {numeroPregunta}
            </Text>
            <VerticalSpace height={15} />
            <Button
              mode="contained"
              textColor="#fafafa"
              buttonColor={theme.colors.primary}
              onPress={() => reintentar()}>
              Jugar de nuevo
            </Button>
            <VerticalSpace height={30} />
          </View>
        </Modal>
        <Modal
          visible={visibleVictoria}
          onDismiss={() => setVisibleVictoria(false)}
          contentContainerStyle={{flex: 1}}>
          <View
            style={{
              display: 'flex',
              width: '80%',
              marginHorizontal: '10%',
              paddingHorizontal: '10%',
              //height: '80%',
              paddingHorizontal: '10%',
              backgroundColor: '#fff',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <VerticalSpace height={30} />
            <Text
              variant="headlineLarge"
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: theme.colors.primary,
              }}>
              ¡Ganaste!
            </Text>
            <VerticalSpace height={20} />
            <Image
              source={trofeo}
              style={{
                resizeMode: 'contain',
                width: 0.6 * dimensions.fullWidth,
                height: 0.6 * dimensions.fullWidth,
              }}
            />
            <VerticalSpace height={15} />
            <Button
              mode="contained"
              textColor="#fafafa"
              buttonColor={theme.colors.primary}
              onPress={() => reintentar()}>
              Jugar de nuevo
            </Button>
            <VerticalSpace height={30} />
          </View>
        </Modal>
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

export default Juego;
