import {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {
  Banner,
  Button,
  Checkbox,
  IconButton,
  Modal,
  Portal,
  Snackbar,
  Surface,
  Text,
  TextInput,
  TouchableRipple,
} from 'react-native-paper';

import colores from 'AppGlennDoman/src/vista/componentes/atomos/colores';
import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones/dimensiones';
import EspacioVertical from 'AppGlennDoman/src/vista/componentes/atomos/espacioVertical';
import Contenedor from 'AppGlennDoman/src/vista/componentes/moleculas/contenedor';
import Encabezado from 'AppGlennDoman/src/vista/componentes/moleculas/encabezado';

const ModalNuevaPalabra = ({visible, minimizar, guardar}) => {
  const [textForm, setTextForm] = useState('');

  return (
    <Modal
      visible={visible}
      onDismiss={() => minimizar()}
      contentContainerStyle={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          width: '80%',
          marginHorizontal: '10%',
          paddingHorizontal: '10%',
          backgroundColor: '#fff',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <EspacioVertical altura={30} />
        <TextInput
          label="Palabra nueva"
          value={textForm}
          mode="outlined"
          style={{
            width: '100%',
          }}
          onChangeText={text => setTextForm(text)}
        />
        <EspacioVertical altura={30} />
        <Button
          disabled={textForm.trim().length === 0}
          mode="contained"
          textColor="#fafafa"
          buttonColor={colores.colors.primary}
          onPress={() => {
            setTextForm('');
            guardar(textForm);
          }}>
          Agregar
        </Button>
        <EspacioVertical altura={30} />
      </View>
    </Modal>
  );
};

export default ModalNuevaPalabra;
