import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {dimensions} from '../../components/elements/styles/styles';
import {
  Button,
  Card,
  FAB,
  Portal,
  Surface,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {
  Container,
  VerticalSpace,
} from '../../components/elements/layout/layout';
import {Row, Column} from '../../components/elements/layout/layout';
import apps from '../../assets/apps.png';
import interrogation from '../../assets/interrogation.svg';
import rocket from '../../assets/rocket.svg';
import menu1 from '../../assets/menu1.png';
import menu2 from '../../assets/menu2.png';
import menu3 from '../../assets/menu3.png';
import banner from '../../assets/banner.png';
import theme from '../../components/foundations/theme';
import {useState} from 'react';

const CustomCard = ({...props}) => {
  return (
    <Surface
      style={{
        height: 0.2 * dimensions.fullHeight,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}>
      {props.children}
    </Surface>
  );
};

const Menu = ({navigation}) => {
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView>
      <View
        style={{
          height: dimensions.fullHeight,
          backgroundColor: '#fafafa',
        }}>
        <View
          style={{
            height: 0.3 * dimensions.fullHeight,
          }}>
          <ImageBackground source={banner} style={{height: '100%'}}>
            <Container space="20%">
              <View
                style={{
                  height: 0.2 * dimensions.fullHeight,
                  display: 'flex',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  variant="headlineSmall"
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  ¡Bienvenido!
                </Text>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  Descubre los beneficios de la lectura temprana con el Método
                  Doman
                </Text>
              </View>
            </Container>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 0.8 * dimensions.fullHeight,
            bottom: 0.1 * dimensions.fullHeight,
          }}>
          <Container>
            <CustomCard>
              <TouchableRipple
                onPress={() => navigation.navigate('Palabras', {ruta: []})}
                rippleColor={theme.colors.primary + '00'}>
                <Row>
                  <Column width="60%">
                    <View
                      style={{
                        height: '100%',
                        padding: '10%',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}>
                      <Text variant="bodySmall">
                        Tu aventura con la lectura comienza aquí
                      </Text>
                      <Text
                        variant="titleMedium"
                        style={{
                          fontWeight: 'bold',
                          color: theme.colors.primary,
                        }}>
                        Empieza a leer
                      </Text>
                    </View>
                  </Column>
                  <Column width="40%">
                    <View
                      style={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={menu1}
                        style={{
                          resizeMode: 'contain',
                          width: '80%',
                          height: '80%',
                        }}
                      />
                    </View>
                  </Column>
                </Row>
              </TouchableRipple>
            </CustomCard>
          </Container>
          <VerticalSpace height={20} />
          <Container>
            <Row>
              <Column width="50%">
                <View style={{paddingRight: '5%'}}>
                  <CustomCard>
                    <TouchableRipple
                      onPress={() => console.log('Pressed')}
                      rippleColor={theme.colors.primary + '00'}>
                      <View>
                        <View
                          style={{
                            height: '65%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Image
                            source={menu2}
                            style={{
                              resizeMode: 'contain',
                              width: '80%',
                              height: '80%',
                            }}
                          />
                        </View>
                        <View style={{height: '35%'}}>
                          <Text
                            variant="titleSmall"
                            style={{textAlign: 'center'}}>
                            ¡Juega y Aprende!
                          </Text>
                        </View>
                      </View>
                    </TouchableRipple>
                  </CustomCard>
                </View>
              </Column>
              <Column width="50%">
                <View style={{paddingLeft: '5%'}}>
                  <CustomCard>
                    <TouchableRipple
                      onPress={() => navigation.navigate('Tutorial')}
                      rippleColor={theme.colors.primary + '00'}>
                      <View>
                        <View
                          style={{
                            height: '65%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Image
                            source={menu3}
                            style={{
                              resizeMode: 'contain',
                              width: '80%',
                              height: '80%',
                            }}
                          />
                        </View>
                        <View style={{height: '35%'}}>
                          <Text
                            variant="titleSmall"
                            style={{textAlign: 'center'}}>
                            ¿Cómo funciona el método?
                          </Text>
                        </View>
                      </View>
                    </TouchableRipple>
                  </CustomCard>
                </View>
              </Column>
            </Row>
          </Container>
        </View>
      </View>
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'close' : 'help'}
          color={theme.colors.secondary}
          fabStyle={{
            borderRadius: 100,
          }}
          variant="primary"
          actions={[
            {
              icon: 'plus',
              label: 'Add',
              onPress: async () => await AsyncStorage.clear(),
              color: theme.colors.secondary,
            },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
              color: theme.colors.secondary,
            },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
              color: theme.colors.secondary,
            },
          ]}
          onStateChange={() => setOpen(!open)}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </SafeAreaView>
  );
};

export default Menu;
