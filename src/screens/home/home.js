import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {dimensions} from '../../components/elements/styles/styles';
import {Button, Text} from 'react-native-paper';
import {
  Container,
  VerticalSpace,
} from '../../components/elements/layout/layout';
import background from '../../assets/background.jpg';
import imagen from '../../assets/imagen.png';
import theme from '../../components/foundations/theme';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          height: dimensions.fullHeight,
        }}>
        <ImageBackground source={background}>
          <View
            style={{
              height: 0.2 * dimensions.fullHeight,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <VerticalSpace height={50} />
            <Container>
              <Text
                variant="headlineLarge"
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                ¡Enseña a tus niños a leer con el Método de Glenn Doman!
              </Text>
            </Container>
          </View>
          <View
            style={{
              height: 0.6 * dimensions.fullHeight,
              width: dimensions.fullWidth,
            }}>
            <Container>
              <Image
                source={imagen}
                style={{resizeMode: 'contain', width: '100%', height: '100%'}}
              />
            </Container>
          </View>
          <View
            style={{
              height: 0.2 * dimensions.fullHeight,
            }}>
            <Container space="20%">
              <Button
                mode="contained"
                buttonColor="#fafafa"
                textColor={theme.colors.primary}
                labelStyle={{
                  fontWeight: 'bold',
                }}
                onPress={() => navigation.navigate('Menu')}>
                CONTINUAR
              </Button>
            </Container>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
