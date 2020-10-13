import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Splash from '../pages/Splash';
import Orders from '../pages/Orders';
import Account from '../pages/Account';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainApp"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
