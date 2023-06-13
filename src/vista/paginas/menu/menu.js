import {SafeAreaView, View} from 'react-native';

import dimensiones from 'AppGlennDoman/src/vista/componentes/atomos/dimensiones';
import EspacioVertical from 'AppGlennDoman/src/vista/componentes/atomos/espacioVertical';
import Columna from 'AppGlennDoman/src/vista/componentes/moleculas/columna';
import Contenedor from 'AppGlennDoman/src/vista/componentes/moleculas/contenedor';
import Fila from 'AppGlennDoman/src/vista/componentes/moleculas/fila';
import menu1 from 'AppGlennDoman/src/vista/recursos/menu/menu1.png';
import menu2 from 'AppGlennDoman/src/vista/recursos/menu/menu2.png';
import menu3 from 'AppGlennDoman/src/vista/recursos/menu/menu3.png';
import BotonPrincipal from './componentes/botonPrincipal';
import BotonSecundario from './componentes/botonSecundario';
import Encabezado from './componentes/encabezado';

const Menu = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: dimensiones.totalAlto,
          backgroundColor: '#fafafa',
        }}>
        <Encabezado />
        <View
          style={{
            height: 0.8 * dimensiones.totalAlto,
            bottom: 0.1 * dimensiones.totalAlto,
          }}>
          <Contenedor>
            <View style={{height: 0.2 * dimensiones.totalAlto}}>
              <BotonPrincipal
                titulo="Empieza a leer"
                subtitulo="Tu aventura con la lectura comienza aquí"
                imagen={menu1}
                presionar={() => navigation.navigate('Leer', {ruta: []})}
              />
            </View>
          </Contenedor>
          <EspacioVertical altura={20} />
          <Contenedor>
            <Fila>
              <Columna ancho="50%">
                <View
                  style={{
                    paddingRight: '5%',
                    height: 0.2 * dimensiones.totalAlto,
                  }}>
                  <BotonSecundario
                    titulo="Juega y Aprende"
                    imagen={menu2}
                    presionar={() => navigation.navigate('Jugar')}
                  />
                </View>
              </Columna>
              <Columna ancho="50%">
                <View
                  style={{
                    paddingRight: '5%',
                    height: 0.2 * dimensiones.totalAlto,
                  }}>
                  <BotonSecundario
                    titulo="¿Cómo funciona el método?"
                    imagen={menu3}
                    presionar={() => navigation.navigate('Tutorial')}
                  />
                </View>
              </Columna>
            </Fila>
          </Contenedor>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
