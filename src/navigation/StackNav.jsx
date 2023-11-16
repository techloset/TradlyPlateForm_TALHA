import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import BottomNav from './BottomNav';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartSceen from '../screens/CartSceen';
import OnBoarding from '../screens/OnBoarding';
import CreateStore from '../screens/CreateStore';
import MyStore from '../screens/MyStore';
import TradlyStore from '../screens/TradlyStore';
import AddProduct from '../screens/AddProduct';
import OrderPlaced from '../screens/OrderPlaced';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      
      {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="CartSceen" component={CartSceen} />
      <Stack.Screen name="CreateStore" component={CreateStore} />
      <Stack.Screen name="MyStore" component={MyStore} />
      <Stack.Screen name="TradlyStore" component={TradlyStore} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
      
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
