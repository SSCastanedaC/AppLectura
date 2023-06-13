import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bienvenida from 'AppGlennDoman/src/vista/paginas/bienvenida';
import Menu from 'AppGlennDoman/src/vista/paginas/menu';
import Tutorial from 'AppGlennDoman/src/vista/paginas/tutorial';
import Jugar from 'AppGlennDoman/src/vista/paginas/jugar';
import Leer from 'AppGlennDoman/src/vista/paginas/leer';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bienvenida" component={Bienvenida} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Leer" component={Leer} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
        <Stack.Screen name="Jugar" component={Jugar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
