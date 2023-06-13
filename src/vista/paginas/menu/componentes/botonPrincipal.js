import Tarjeta from 'AppGlennDoman/src/vista/componentes/moleculas/tarjeta';
import Columna from 'AppGlennDoman/src/vista/componentes/moleculas/columna';
import Fila from 'AppGlennDoman/src/vista/componentes/moleculas/fila';
import {Image, View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import colores from 'AppGlennDoman/src/vista/componentes/atomos/colores';

const BotonPrincipal = ({titulo, subtitulo, imagen, presionar}) => {
  return (
    <Tarjeta>
      <TouchableRipple
        //onPress={() => navigation.navigate('Palabras', {ruta: []})}
        onPress={() => presionar()}
        rippleColor={colores.colors.primary + '00'}>
        <Fila>
          <Columna ancho="60%">
            <View
              style={{
                height: '100%',
                padding: '10%',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <Text variant="bodySmall">{subtitulo}</Text>
              <Text
                variant="titleMedium"
                style={{
                  fontWeight: 'bold',
                  color: colores.colors.primary,
                }}>
                {titulo}
              </Text>
            </View>
          </Columna>
          <Columna ancho="40%">
            <View
              style={{
                height: '100%',
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
          </Columna>
        </Fila>
      </TouchableRipple>
    </Tarjeta>
  );
};

export default BotonPrincipal;
