import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Bill, Point} from '../../assets';
import {SECONDARY_COLOR} from '../../utils/constants';

const ButtonIcon = ({title}) => {
  const Icon = () => {
    if (title === 'Add Saldo') {
      return <Bill />;
    }
    if (title === 'Get Points') {
      return <Point />;
    }

    return <Bill />;
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.item}>
        <Icon />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  item: {
    backgroundColor: SECONDARY_COLOR,
    padding: 5,
    borderRadius: 10,
    marginBottom: 3,
  },
  title: {
    fontSize: 10,
    fontFamily: 'TitilliumWeb-Regular',
  },
});
