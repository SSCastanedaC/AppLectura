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
import Tarjeta from 'AppGlennDoman/src/vista/componentes/moleculas/tarjeta';
import Fila from 'AppGlennDoman/src/vista/componentes/moleculas/fila';
import Columna from 'AppGlennDoman/src/vista/componentes/moleculas/columna';
import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones';
import Contenedor from 'AppGlennDoman/src/vista/componentes/moleculas/contenedor';

const BotonVerPalabra = ({
  index,
  opcion,
  presionarContinuar,
  presionarMarcar,
  presionarEliminar,
}) => {
  return (
    <View style={{height: 0.15 * dimensiones.totalAncho}}>
      <Tarjeta>
        <Contenedor>
          <Fila>
            <Columna ancho="70%">
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 5,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Checkbox
                    status={opcion.completo ? 'checked' : 'unchecked'}
                    onPress={() => presionarMarcar(opcion.id)}
                  />
                  <Text variant="bodyLarge">{opcion.titulo}</Text>
                </View>
              </View>
            </Columna>
            <Columna ancho="30%">
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                {presionarEliminar && (
                  <IconButton
                    icon="delete"
                    size={20}
                    onPress={() => presionarEliminar(index)}
                  />
                )}
                <IconButton
                  icon="chevron-right"
                  size={20}
                  onPress={() => presionarContinuar(opcion)}
                />
              </View>
            </Columna>
          </Fila>
        </Contenedor>
      </Tarjeta>
    </View>
  );
};

export default BotonVerPalabra;
