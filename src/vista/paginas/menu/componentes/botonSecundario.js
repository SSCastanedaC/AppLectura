import Tarjeta from '../../../componentes/moleculas/tarjeta/tarjeta';
import {Image, View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import colores from 'AppGlennDoman/src/vista/componentes/atomos/colores';

const BotonSecundario = ({titulo, imagen, presionar}) => {
  return (
    <Tarjeta>
      <TouchableRipple
        //onPress={() => navigation.navigate('Juego')}
        onPress={() => presionar()}
        rippleColor={colores.colors.primary + '00'}>
        <View>
          <View
            style={{
              height: '65%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={imagen}
              style={{
                resizeMode: 'contain',
                width: '80%',
                height: '80%',
              }}
            />
          </View>
          <View style={{height: '35%'}}>
            <Text variant="titleSmall" style={{textAlign: 'center'}}>
              {titulo}
            </Text>
          </View>
        </View>
      </TouchableRipple>
    </Tarjeta>
  );
};

export default BotonSecundario;
