import {View} from 'react-native';

export const Contenedor = ({espacio, ...props}) => {
  return (
    <View style={{paddingHorizontal: espacio ? espacio : '5%'}}>
      {props.children}
    </View>
  );
};

export default Contenedor;
