import {View} from 'react-native';

const Fila = ({...props}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {props.children}
    </View>
  );
};

export default Fila;
