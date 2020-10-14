import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Home,
  HomeActive,
  Orders,
  OrdersActive,
  Account,
  AccountActive,
} from '../../assets';

const TabItem = ({isFocused, onPress, onLongPress, index, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <HomeActive /> : <Home />;
    }
    if (label === 'Orders') {
      return isFocused ? <OrdersActive /> : <Orders />;
    }
    if (label === 'Account') {
      return isFocused ? <AccountActive /> : <Account />;
    }
    return <Home />;
  };

  return (
    <TouchableOpacity
      key={index}
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon style={styles.logo} />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
