import MainNavigator from './src/navigation/navigator';
import {StatusBar} from 'react-native';
import {Provider} from 'react-native-paper';
import colores from './src/vista/componentes/atomos/colores/colores';

const App = () => {
  return (
    <Provider theme={colores}>
      <StatusBar />
      <MainNavigator />
    </Provider>
  );
};

export default App;
