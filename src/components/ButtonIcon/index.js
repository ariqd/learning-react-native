import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Bill,
  Point,
  IconBaju,
  IconDress,
  IconSetrika,
  IconHanduk,
  IconTimbangan,
  IconTruk,
} from '../../assets';
import {SECONDARY_COLOR} from '../../utils/constants';

const ButtonIcon = ({title, layanan}) => {
  const Icon = () => {
    if (title === 'Add Saldo') {
      return <Bill />;
    }
    if (title === 'Get Points') {
      return <Point />;
    }
    if (title === 'Kiloan') {
      return <IconTimbangan />;
    }
    if (title === 'Satuan') {
      return <IconBaju />;
    }
    if (title === 'VIP') {
      return <IconDress />;
    }
    if (title === 'Karpet') {
      return <IconHanduk />;
    }
    if (title === 'Setrika') {
      return <IconSetrika />;
    }
    if (title === 'Ekspres') {
      return <IconTruk />;
    }

    return <Bill />;
  };

  return (
    <TouchableOpacity style={styles.container(layanan)}>
      <View style={styles.item(layanan)}>
        <Icon />
      </View>
      <Text style={styles.title(layanan)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: (layanan) => ({
    // alignItems: 'center',
    // padding: layanan && 12,
    marginBottom: 12,
    paddingRight: layanan && 30,
  }),
  item: (layanan) => ({
    backgroundColor: SECONDARY_COLOR,
    padding: layanan ? 12 : 5,
    borderRadius: 10,
    // marginBottom: 3,
  }),
  title: (layanan) => ({
    fontSize: layanan ? 14 : 10,
    fontFamily: layanan ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
  }),
});
