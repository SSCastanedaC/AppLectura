import {Image, View} from 'react-native';
import {Button, Modal, Text} from 'react-native-paper';

import colores from 'AppGlennDoman/src/vista/componentes/atomos/colores/colores';
import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones/dimensiones';
import EspacioVertical from 'AppGlennDoman/src/vista/componentes/atomos/espacioVertical/espacioVertical';
import trofeo from 'AppGlennDoman/src/vista/recursos/jugar/trofeo.png';

const TarjetaVictoria = ({visible, minimizar, reintentar}) => {
  return (
    <Modal
      visible={visible}
      onDismiss={() => minimizar()}
      contentContainerStyle={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          width: '80%',
          marginHorizontal: '10%',
          paddingHorizontal: '10%',
          backgroundColor: '#fff',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <EspacioVertical altura={30} />
        <Text
          variant="headlineLarge"
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: colores.colors.primary,
          }}>
          ¡Ganaste!
        </Text>
        <EspacioVertical altura={20} />
        <Image
          source={trofeo}
          style={{
            resizeMode: 'contain',
            width: 0.6 * dimensiones.totalAncho,
            height: 0.6 * dimensiones.totalAncho,
          }}
        />
        <EspacioVertical altura={15} />
        <Button
          mode="contained"
          textColor="#fafafa"
          buttonColor={colores.colors.primary}
          onPress={() => reintentar()}>
          Jugar de nuevo
        </Button>
        <EspacioVertical altura={30} />
      </View>
    </Modal>
  );
};

export default TarjetaVictoria;
