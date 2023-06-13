import {ImageBackground, View} from 'react-native';
import {Text} from 'react-native-paper';

import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones';
import Contenedor from 'AppGlennDoman/src/vista/componentes/moleculas/contenedor';
import banner from 'AppGlennDoman/src/vista/recursos/banner.png';

const Encabezado = () => {
  return (
    <View
      style={{
        height: 0.3 * dimensiones.totalAlto,
      }}>
      <ImageBackground source={banner} style={{height: '100%'}}>
        <Contenedor space="20%">
          <View
            style={{
              height: 0.2 * dimensiones.totalAlto,
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              variant="headlineSmall"
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              ¡Bienvenido!
            </Text>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Descubre los beneficios de la lectura temprana con el Método Doman
            </Text>
          </View>
        </Contenedor>
      </ImageBackground>
    </View>
  );
};

export default Encabezado;
