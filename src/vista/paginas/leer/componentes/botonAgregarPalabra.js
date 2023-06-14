import {View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import colores from 'AppGlennDoman/src/vista/componentes/atomos/colores';
import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones';
import Tarjeta from 'AppGlennDoman/src/vista/componentes/moleculas/tarjeta';

const BotonAgregarPalabra = ({presionar}) => {
  return (
    <View style={{height: 0.25 * dimensiones.totalAncho}}>
      <Tarjeta>
        <TouchableRipple
          onPress={() => presionar()}
          rippleColor={colores.colors.primary + '00'}>
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
                  color: colores.colors.primary,
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
      </Tarjeta>
    </View>
  );
};

export default BotonAgregarPalabra;
