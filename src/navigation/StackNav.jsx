import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import BottomNav from './BottomNav';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartSceen from '../screens/CartSceen';
import OnBoarding from '../screens/OnBoarding';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      
      {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="CartSceen" component={CartSceen} />
      
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
