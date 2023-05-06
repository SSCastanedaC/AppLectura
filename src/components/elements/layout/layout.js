import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const VerticalSpace = ({height}) => {
  return <View style={{height: height ? height : 1}} />;
};

export const Container = ({space, ...props}) => {
  return (
    <View style={{paddingHorizontal: space ? space : '5%'}}>
      {props.children}
    </View>
  );
};

export const Row = ({...props}) => {
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

export const Column = ({width, align, ...props}) => {
  return (
    <View
      style={{
        width: width,
        alignItems: align,
      }}>
      {props.children}
    </View>
  );
};
