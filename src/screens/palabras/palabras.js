import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback, useEffect, useState} from 'react';
import {
  Alert,
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
import Icon from 'react-native-vector-icons/Feather';
import {dimensions} from '../../components/elements/styles/styles';
import {contenido} from '../../utils/contenido';
import theme from '../../components/foundations/theme';

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

const Palabras = ({route, navigation}) => {
  const [opciones, setOpciones] = useState([]);
  const [ruta, setRuta] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);
  const [textForm, setTextForm] = useState('');
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [palabra, setPalabra] = useState('');
  const [titulo, setTitulo] = useState('Aprender a Leer');
  const [mensajeSnackbar, setMensajeSnackbar] = useState('');
  const params = route.params;

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

  const cargarContenido = async () => {
    /*
    await AsyncStorage.clear();
    await AsyncStorage.removeItem('contenido');
    */
    var contenidoDB = await AsyncStorage.getItem('contenido');
    if (contenidoDB === null) {
      await AsyncStorage.setItem('contenido', JSON.stringify(contenido));
      var contenidoDB = await AsyncStorage.getItem('contenido');
    }
    return contenidoDB;
  };

  const crearOpciones = async () => {
    var contenidoDB = JSON.parse(await cargarContenido());
    if (params.ruta.length > 0) {
      generarMenu(contenidoDB, params.ruta, 0);
    } else {
      setOpciones(contenidoDB);
      setRuta([]);
    }
  };

  useEffect(() => {
    crearOpciones();
  }, []);

  useEffect(() => {
    navigation.removeListener('beforeRemove');
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      params.ruta.splice(params.ruta.length - 1, 1);
      navigation.dispatch(e.data.action);
    });
  }, []);

  const actualizar = (contenido, ids, idElement) => {
    var nuevoContenido = [...contenido];
    var contenidoTemp = [...nuevoContenido];
    for (var id of ids) {
      var contenidoTemp = contenidoTemp.find(x => x.id === id).opciones;
    }
    contenidoTemp = contenidoTemp.find(x => x.id === idElement);
    contenidoTemp.completo = !contenidoTemp.completo;
    var mensajeSnackbar = contenidoTemp.completo
      ? 'Marcado como leído'
      : 'Marcado como no leído';
    setMensajeSnackbar(mensajeSnackbar);
    return nuevoContenido;
  };

  const marcar = async id => {
    const contenidoDB = JSON.parse(await AsyncStorage.getItem('contenido'));
    var ids = params.ruta;
    var contenido = actualizar(contenidoDB, ids, id);
    await AsyncStorage.setItem('contenido', JSON.stringify(contenido));
    crearOpciones();
    setVisibleSnackbar(true);
  };

  const agregarPalabra = () => {
    setVisibleForm(true);
    setTextForm('');
  };

  const submit = async () => {
    const contenidoDB = JSON.parse(await AsyncStorage.getItem('contenido'));
    var palabras = contenidoDB.find(x => x.titulo === 'Mis Palabras');
    var opciones = palabras.opciones;
    opciones.push({
      titulo: textForm,
      completo: false,
      contenido: textForm,
    });
    palabras.opciones = opciones;
    contenidoDB.palabras = palabras;
    await AsyncStorage.setItem('contenido', JSON.stringify(contenidoDB));
    crearOpciones();
    setVisibleForm(false);
  };

  const eliminar = index => {
    Alert.alert('¿Deseas eliminar la palabra?', '', [
      {
        text: 'No, cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Si, eliminar', onPress: index => confirmarEliminar(index)},
    ]);
  };

  const confirmarEliminar = async index => {
    const contenidoDB = JSON.parse(await AsyncStorage.getItem('contenido'));
    var palabras = contenidoDB.find(x => x.titulo === 'Mis Palabras');
    var opciones = palabras.opciones;
    opciones.splice(index, 1);
    palabras.opciones = opciones;
    contenidoDB.palabras = palabras;
    await AsyncStorage.setItem('contenido', JSON.stringify(contenidoDB));
    crearOpciones();
  };

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
                      {titulo}
                    </Text>
                  </Column>
                </Row>
              </View>
            </Container>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 0.9 * dimensions.fullHeight,
          }}>
          <ScrollView
            style={{
              height: 0.9 * dimensions.fullHeight,
            }}>
            {opciones.length > 0 && (
              <Container>
                <VerticalSpace height={20} />
                {opciones.map((opcion, index) => (
                  <View key={index} style={{paddingVertical: 10}}>
                    <CustomOption>
                      <Container>
                        <Row>
                          <Column width="70%">
                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingVertical: 5,
                              }}>
                              <View
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  gap: 5,
                                }}>
                                <Checkbox
                                  status={
                                    opcion.completo ? 'checked' : 'unchecked'
                                  }
                                  onPress={() => marcar(opcion.id)}
                                />
                                <Text variant="bodyLarge">{opcion.titulo}</Text>
                              </View>
                            </View>
                          </Column>
                          <Column width="30%">
                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                              }}>
                              {titulo === 'Mis Palabras' && (
                                <IconButton
                                  icon="delete"
                                  size={20}
                                  onPress={() => eliminar(index)}
                                />
                              )}
                              <IconButton
                                icon="chevron-right"
                                size={20}
                                onPress={() => continuar(opcion)}
                              />
                            </View>
                          </Column>
                        </Row>
                      </Container>
                    </CustomOption>
                  </View>
                ))}
                <VerticalSpace height={50} />
              </Container>
            )}
            {titulo === 'Mis Palabras' && (
              <Container>
                <VerticalSpace height={20} />
                <CustomOption>
                  <TouchableRipple
                    onPress={() => agregarPalabra()}
                    rippleColor={theme.colors.primary + '00'}>
                    <View style={{paddingVertical: 5}}>
                      <View
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Icon
                          name="plus-circle"
                          style={{
                            paddingVertical: 5,
                            fontSize: 32,
                            color: theme.colors.primary,
                          }}
                        />
                      </View>
                      <View>
                        <Text
                          variant="bodyLarge"
                          style={{textAlign: 'center', paddingVertical: 5}}>
                          Agregar palabra
                        </Text>
                      </View>
                    </View>
                  </TouchableRipple>
                </CustomOption>
                <VerticalSpace height={50} />
              </Container>
            )}
          </ScrollView>
        </View>
      </View>
      <Portal>
        <Modal
          visible={visibleModal}
          onDismiss={() => setVisibleModal(false)}
          contentContainerStyle={{flex: 1}}>
          <View
            style={{
              display: 'flex',
              flex: 1,
              backgroundColor: '#fff',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width:
                  titulo === 'Mi Primer Libro'
                    ? dimensions.fullWidth
                    : dimensions.fullHeight,
                height:
                  titulo === 'Mi Primer Libro'
                    ? dimensions.fullHeight
                    : dimensions.fullWidth,
                transform: [
                  {rotate: titulo === 'Mi Primer Libro' ? '0deg' : '90deg'},
                ],
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize:
                    titulo === 'Mis Primeras Frases'
                      ? 84
                      : titulo === 'Mi Primer Libro'
                      ? 48
                      : 128,
                  color: titulo === 'Mi Primer Libro' ? 'black' : 'red',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {palabra}
              </Text>
            </View>
          </View>
        </Modal>
        <Modal
          visible={visibleForm}
          onDismiss={() => setVisibleForm(false)}
          contentContainerStyle={{flex: 1}}>
          <View
            style={{
              display: 'flex',
              width: '80%',
              marginHorizontal: '10%',
              paddingHorizontal: '10%',
              //height: '50%',
              paddingHorizontal: '10%',
              backgroundColor: '#fff',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <VerticalSpace height={30} />
            <TextInput
              label="Palabra nueva"
              value={textForm}
              mode="outlined"
              style={{
                width: '100%',
              }}
              onChangeText={text => setTextForm(text)}
            />
            <VerticalSpace height={30} />
            <Button
              mode="contained"
              textColor="#fafafa"
              buttonColor={theme.colors.primary}
              onPress={() => submit()}>
              Agregar
            </Button>
            <VerticalSpace height={30} />
          </View>
        </Modal>
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

export default Palabras;
