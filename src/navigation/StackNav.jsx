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
import ProductDetail from '../screens/ProductDetail';
import WhishList from '../screens/WhishList';
import CheckOutFirst from '../screens/CheckOutFirst';
import CheckOutSecond from '../screens/CheckOutSecond';

import Beverages from '../screens/Beverages';
import BakeryBread from '../screens/productDetail/BakeryBread';
import Vegetables from '../screens/productDetail/Vegetables';
import Fruits from '../screens/productDetail/Fruits';
import Eggg from '../screens/productDetail/Eggg';
import FrozenVeg from '../screens/productDetail/FrozenVeg';
import HomeCaree from '../screens/productDetail/HomeCaree';
import PetCare from '../screens/productDetail/PetCare';
import SignUp from '../screens/auth/SignUp';
import LoginScreen from '../screens/auth/LoginScreen';
import Otp from '../screens/auth/Otp';
import OtpVerifications from '../screens/auth/OtpVerifications';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      

      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="OtpVerifications" component={OtpVerifications} />


      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="CartSceen" component={CartSceen} />
      <Stack.Screen name="CreateStore" component={CreateStore} />
      <Stack.Screen name="MyStore" component={MyStore} />
      <Stack.Screen name="TradlyStore" component={TradlyStore} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="WhishList" component={WhishList} />
      <Stack.Screen name="CheckOutFirst" component={CheckOutFirst} />
      <Stack.Screen name="CheckOutSecond" component={CheckOutSecond} />


      <Stack.Screen name="Beverages" component={Beverages} />
      <Stack.Screen name="BakeryBread" component={BakeryBread} />
      <Stack.Screen name="Vegetables" component={Vegetables} />
      <Stack.Screen name="Fruits" component={Fruits} />
      <Stack.Screen name="Eggg" component={Eggg} />
      <Stack.Screen name="FrozenVeg" component={FrozenVeg} />
      <Stack.Screen name="HomeCaree" component={HomeCaree} />
      <Stack.Screen name="PetCare" component={PetCare} />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
