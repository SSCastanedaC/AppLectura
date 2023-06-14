import {useRef, useState} from 'react';
import {Animated, SafeAreaView, StyleSheet, View} from 'react-native';

import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones/dimensiones';
import Encabezado from 'AppGlennDoman/src/vista/componentes/moleculas/encabezado';
import Marcador from './componentes/marcador';
import Tarjeta from './componentes/tarjeta';
import contenido from './contenido';

const Tutorial = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const renderItem = ({item, index}) => {
    const inputRange = [
      (index - 1) * dimensiones.totalAncho,
      index * dimensiones.totalAncho,
      (index + 1) * dimensiones.totalAncho,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.1, 1, 0.1],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.1, 1, 0.1],
    });

    return <Tarjeta item={item} opacity={opacity} scale={scale} />;
  };

  return (
    <SafeAreaView>
      <View
        style={{
          height: dimensiones.totalAlto,
          backgroundColor: '#fafafa',
        }}>
        <Encabezado titulo="Tutorial" presionar={() => navigation.goBack()} />
        <View style={styles.container}>
          <Animated.FlatList
            data={contenido}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={dimensiones.totalAncho}
            decelerationRate={0}
            bounces={true}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            scrollEventThrottle={16}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
            onMomentumScrollEnd={event => {
              const index =
                event.nativeEvent.contentOffset.x / dimensiones.totalAncho;
              setIndex(index);
            }}
          />
        </View>
        <Marcador contenido={contenido} index={index} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 0.75 * dimensiones.totalAlto,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tutorial;
