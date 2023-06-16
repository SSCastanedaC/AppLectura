import {View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';

import colores from 'AppGlennDoman/src/vista/componentes/atomos/colores';
import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones';
import Contenedor from 'AppGlennDoman/src/vista/componentes/moleculas/contenedor';
import Tarjeta from 'AppGlennDoman/src/vista/componentes/moleculas/tarjeta';

const TarjetaRespuesta = ({respuesta, responder}) => {
  return (
    <View>
      <Tarjeta>
        <TouchableRipple
          onPress={() => responder(respuesta)}
          rippleColor={colores.colors.primary + '00'}>
          <Contenedor>
            <View
              style={{
                paddingVertical: 10,
              }}>
              <Text variant="titleLarge" style={{textAlign: 'center'}}>
                {respuesta.contenido}
              </Text>
            </View>
          </Contenedor>
        </TouchableRipple>
      </Tarjeta>
    </View>
  );
};

export default TarjetaRespuesta;
