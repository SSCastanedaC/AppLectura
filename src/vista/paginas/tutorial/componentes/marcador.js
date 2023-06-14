import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colores from 'AppGlennDoman/src/vista/componentes/atomos/colores';
import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones';

const Marcador = ({contenido, index}) => {
  return (
    <View
      style={{
        flex: 1,
        height: 0.15 * dimensiones.totalAlto,
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 5,
      }}>
      {contenido.map((item, key) => (
        <Icon
          key={key}
          name="circle"
          style={{
            color: index === key ? colores.colors.primary : 'lightgray',
          }}
        />
      ))}
    </View>
  );
};

export default Marcador;
