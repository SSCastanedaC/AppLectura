import {View, ImageBackground} from 'react-native';
import Contenedor from 'AppGlennDoman/src/vista/componentes/moleculas/contenedor';
import Fila from 'AppGlennDoman/src/vista/componentes/moleculas/fila';
import Columna from 'AppGlennDoman/src/vista/componentes/moleculas/columna';
import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones';
import banner from 'AppGlennDoman/src/vista/recursos/banner.png';
import {IconButton, Text} from 'react-native-paper';

const Encabezado = ({titulo, presionar}) => {
  return (
    <View
      style={{
        height: 0.1 * dimensiones.totalAlto,
      }}>
      <ImageBackground source={banner} style={{height: '100%'}}>
        <Contenedor>
          <View
            style={{
              height: 0.1 * dimensiones.totalAlto,
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Fila>
              <Columna ancho={'10%'}>
                <IconButton
                  icon="chevron-left"
                  size={20}
                  onPress={() => presionar()}
                  containerColor="white"
                />
              </Columna>
              <Columna ancho={'80%'}>
                <Text
                  variant="titleMedium"
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  {titulo}
                </Text>
              </Columna>
            </Fila>
          </View>
        </Contenedor>
      </ImageBackground>
    </View>
  );
};

export default Encabezado;
