import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconPesananAktif} from '../../assets';
import {PRIMARY_COLOR, WARNING_COLOR} from '../../utils/constants';

const PesananAktif = ({title, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconPesananAktif />
      <View style={styles.text}>
        <Text style={styles.label}>{title}</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PesananAktif;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 5,
    marginBottom: windowHeight * 0.025,
  },
  text: {
    marginLeft: windowWidth * 0.05,
  },
  label: {
    fontFamily: 'TitilliumWeb-SemiBold',
    fontSize: 18,
  },
  status: (status) => ({
    fontFamily: 'TitilliumWeb-Light',
    fontSize: 12,
    color: status === 'Masih Dicuci' ? WARNING_COLOR : PRIMARY_COLOR,
  }),
});
