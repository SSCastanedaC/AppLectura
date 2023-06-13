import {View} from 'react-native';

const Columna = ({ancho, align, ...props}) => {
  return (
    <View
      style={{
        width: ancho,
        alignItems: align,
      }}>
      {props.children}
    </View>
  );
};

export default Columna;
