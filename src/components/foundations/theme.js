import {DefaultTheme} from 'react-native-paper';

const theme2 = {
  ...DefaultTheme,
  dark: 'false',
  version: 3,
  mode: 'adaptive',
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fa4268',
    secondary: '#f0f',
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fa4268',
    secondary: '#4248fa',
    tertiary: '#fff6f8',
    error: '#f13a59',
    warning: '#f1c40f',
    success: '#00b386',
    info: '#1e90ff',
    background: '#f5f5f5',
    surface: '#ffffff',
    text: '#333333',
    disabled: '#aaaaaa',
    placeholder: '#9b9b9b',
  },
  elevation: {
    ...DefaultTheme.elevation,
    1: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    2: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    3: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.35,
      shadowRadius: 6.68,
      elevation: 12,
    },
  },
};

export default theme;
