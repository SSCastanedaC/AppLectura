import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Surface, Text} from 'react-native-paper';

import colores from 'AppGlennDoman/src/vista/componentes/atomos/colores';
import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones/dimensiones';

const Tarjeta = ({item, opacity, scale}) => {
  return (
    <Surface
      style={[
        styles.itemContainer,
        {
          opacity,
          transform: [{scale}],
        },
      ]}>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Text
            variant="titleLarge"
            style={{fontWeight: 'bold', textAlign: 'center', marginTop: 5}}>
            {item.titulo}
          </Text>
          <View style={{flex: 1, alignItems: 'center', margin: 10}}>
            <Image
              source={item.imagen}
              style={{
                resizeMode: 'contain',
                width: 0.3 * dimensiones.totalAncho,
                height: 0.3 * dimensiones.totalAncho,
              }}
            />
          </View>
          <Text variant="bodyMedium">{item.texto}</Text>
        </ScrollView>
      </View>
    </Surface>
  );
};

export default Tarjeta;

const styles = StyleSheet.create({
  itemContainer: {
    width: 0.9 * dimensiones.totalAncho,
    height: 0.7 * dimensiones.totalAlto,
    marginHorizontal: 0.05 * dimensiones.totalAncho,
    borderRadius: 10,
    padding: 10,
    borderColor: colores.colors.primary,
  },
});
