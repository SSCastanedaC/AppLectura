import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {Button, Text} from 'react-native-paper';

import colores from 'AppGlennDoman/src/vista/componentes/atomos/colores';
import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones';
import EspacioVertical from 'AppGlennDoman/src/vista/componentes/atomos/espacioVertical';
import Contenedor from 'AppGlennDoman/src/vista/componentes/moleculas/contenedor';
import background from 'AppGlennDoman/src/vista/recursos/bienvenida/background.jpg';
import imagen from 'AppGlennDoman/src/vista/recursos/bienvenida/imagen.png';

const Bienvenida = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          height: dimensiones.totalAlto,
        }}>
        <ImageBackground source={background}>
          <View
            style={{
              height: 0.2 * dimensiones.totalAlto,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <EspacioVertical altura={50} />
            <Contenedor>
              <Text
                variant="headlineLarge"
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                ¡Enseña a tus niños a leer con el Método de Glenn Doman!
              </Text>
            </Contenedor>
          </View>
          <View
            style={{
              height: 0.6 * dimensiones.totalAlto,
              width: dimensiones.totalAncho,
            }}>
            <Contenedor>
              <Image
                source={imagen}
                style={{resizeMode: 'contain', width: '100%', height: '100%'}}
              />
            </Contenedor>
          </View>
          <View
            style={{
              height: 0.2 * dimensiones.totalAlto,
            }}>
            <Contenedor space="20%">
              <Button
                mode="contained"
                buttonColor="#fafafa"
                textColor={colores.colors.primary}
                labelStyle={{
                  fontWeight: 'bold',
                }}
                onPress={() => navigation.navigate('Menu')}>
                CONTINUAR
              </Button>
            </Contenedor>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bienvenida;
