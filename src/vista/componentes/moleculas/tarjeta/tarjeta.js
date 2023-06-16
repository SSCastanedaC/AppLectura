import {Surface} from 'react-native-paper';

const Tarjeta = ({...props}) => {
  return (
    <Surface
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 10,
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}>
      {props.children}
    </Surface>
  );
};

export default Tarjeta;
