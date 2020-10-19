import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Header, Logo} from '../../assets';
import {ButtonIcon, PesananAktif, Saldo} from '../../components';
import {GRAY_COLOR} from '../../utils/constants';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ImageBackground source={Header} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.welcome}>Selamat Datang,</Text>
            <Text style={styles.name}>Ariq Daffa</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.label}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Kiloan" layanan />
            <ButtonIcon title="Satuan" layanan />
            <ButtonIcon title="VIP" layanan />
            <ButtonIcon title="Karpet" layanan />
            <ButtonIcon title="Setrika" layanan />
            <ButtonIcon title="Ekspres" layanan />
          </View>
        </View>
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>Pesanan Aktif</Text>
          <PesananAktif title="Pesanan No. 01234" status="Sudah Selesai" />
          <PesananAktif title="Pesanan No. 01234" status="Masih Dicuci" />
          <PesananAktif title="Pesanan No. 01234" status="Sudah Selesai" />
          <PesananAktif title="Pesanan No. 01234" status="Sudah Selesai" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.32,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.07,
  },
  hello: {
    marginTop: windowHeight * 0.03,
  },
  welcome: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  name: {
    fontSize: 26,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layanan: {
    // paddingHorizontal: 30,
    paddingLeft: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  pesananAktif: {
    marginTop: 10,
    paddingTop: 15,
    paddingHorizontal: 30,
    backgroundColor: GRAY_COLOR,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
