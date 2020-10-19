import React from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {PRIMARY_COLOR} from '../../utils/constants';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.informasiSaldo}>
        <View style={styles.text}>
          <Text style={styles.labelSaldo}>Saldo:</Text>
          <Text style={styles.valueSaldo}>Rp 100.000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelPoint}>Antar Point:</Text>
          <Text style={styles.valuePoint}>100 Points</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <ButtonIcon title="Add Saldo" />
        <Gap width={10} />
        <ButtonIcon title="Get Points" />
      </View>
    </View>
  );
};

export default Saldo;

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: -windowHeight * 0.07,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  informasiSaldo: {
    width: '60%',
  },
  labelSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  valueSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  labelPoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Regular',
  },
  valuePoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Bold',
    color: PRIMARY_COLOR,
  },
  actions: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
