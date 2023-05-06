import MainNavigator from './src/navigation/navigator';
import {StatusBar} from 'react-native';
import {Provider} from 'react-native-paper';
import theme from './src/components/foundations/theme';

const App = () => {
  return (
    <Provider theme={theme}>
      <StatusBar />
      <MainNavigator />
    </Provider>
  );
};

export default App;
