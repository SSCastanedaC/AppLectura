import {View} from 'react-native';

const EspacioVertical = ({altura}) => {
  return <View style={{height: altura ? altura : 1}} />;
};

export default EspacioVertical;
