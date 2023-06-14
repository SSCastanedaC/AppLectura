import {View} from 'react-native';
import {Modal, Text} from 'react-native-paper';

import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones/dimensiones';

const ModalLectura = ({visible, minimizar, titulo, palabra}) => {
  return (
    <Modal
      visible={visible}
      onDismiss={() => minimizar()}
      contentContainerStyle={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          flex: 1,
          backgroundColor: '#fff',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width:
              titulo === 'Mi Primer Libro'
                ? dimensiones.totalAncho
                : dimensiones.totalAlto,
            height:
              titulo === 'Mi Primer Libro'
                ? dimensiones.totalAlto
                : dimensiones.totalAncho,
            transform: [
              {rotate: titulo === 'Mi Primer Libro' ? '0deg' : '90deg'},
            ],
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          <Text
            style={{
              fontSize:
                titulo === 'Mis Primeras Frases'
                  ? 84
                  : titulo === 'Mi Primer Libro'
                  ? 48
                  : 128,
              color: titulo === 'Mi Primer Libro' ? 'black' : 'red',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {palabra}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalLectura;
