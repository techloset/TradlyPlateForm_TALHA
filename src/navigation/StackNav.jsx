import React from 'react';
import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
import NAVIGATION from './StackData';
// import AddProduct from '../screens/AddProduct';
// import Beverages from '../screens/Beverages';
// import CartSceen from '../screens/CartSceen';
// import CheckOutFirst from '../screens/CheckOutFirst';
// import CheckOutSecond from '../screens/CheckOutSecond';
// import CreateStore from '../screens/CreateStore';
// import MyStore from '../screens/MyStore';
// import OnBoarding from '../screens/OnBoarding';
// import OrderPlaced from '../screens/OrderPlaced';
// import ProductDetail from '../screens/ProductDetail';
// import TradlyStore from '../screens/TradlyStore';
// import WhishList from '../screens/WhishList';
// import LoginScreen from '../screens/auth/LoginScreen';
// import Otp from '../screens/auth/Otp';
// import OtpVerifications from '../screens/auth/OtpVerifications';
// import SignUp from '../screens/auth/SignUp';
// import BakeryBread from '../screens/productDetail/BakeryBread';
// import Eggg from '../screens/productDetail/Eggg';
// import FrozenVeg from '../screens/productDetail/FrozenVeg';
// import Fruits from '../screens/productDetail/Fruits';
// import HomeCaree from '../screens/productDetail/HomeCaree';
// import PetCare from '../screens/productDetail/PetCare';
// import Vegetables from '../screens/productDetail/Vegetables';
// import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {NAVIGATION.map((item, index) => {
        // console.log(item);
        return (
          <Stack.Screen
            key={index}
            name={item.screenName}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
