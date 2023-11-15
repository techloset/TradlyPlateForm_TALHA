import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Browser from '../screens/Browser';
import Store from '../screens/Store';
import OrderHistroy from '../screens/OrderHistroy';
import Profile from '../screens/Profile';
import CheckOutSecond from '../screens/CheckOutSecond';
import CheckOutFirst from '../screens/CheckOutFirst';

const Tab = createBottomTabNavigator();


const BottomNav = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Browser" component={Browser} />
      <Tab.Screen name="Store" component={Store} />
      <Tab.Screen name="OrderHistroy" component={OrderHistroy} />
      <Tab.Screen name="Profile" component={Profile} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  )
}

export default BottomNav

const styles = StyleSheet.create({})