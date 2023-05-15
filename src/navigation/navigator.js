import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/home';
import Menu from '../screens/menu/menu';
import Palabras from '../screens/palabras/palabras';
import Tutorial from '../screens/tutorial/tutorial';
import Juego from '../screens/juego/juego';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Palabras" component={Palabras} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
        <Stack.Screen name="Juego" component={Juego} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
