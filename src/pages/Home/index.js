import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Header, Logo} from '../../assets';

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Header} style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.hello}>
          <Text style={styles.welcome}>Selamat Datang,</Text>
          <Text style={styles.name}>Ariq Daffa</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.32,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.07,
  },
  hello: {
    marginVertical: 30,
  },
  welcome: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  name: {
    fontSize: 26,
    fontFamily: 'TitilliumWeb-Bold',
  },
});
