import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import LoginScreen from './auth/LoginScreen';
import SignUp from './auth/SignUp';
import Otp from './auth/Otp';
import OtpVerifications from './auth/OtpVerifications';
import Home from './Home';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Store from '../components/Store';
import ProductDetail from './ProductDetail';
import TradlyStore from './TradlyStore';
import CartSceen from './CartSceen';
import CheckOutFirst from './CheckOutFirst';
import CheckOutSecond from './CheckOutSecond';
import AddProduct from './AddProduct';

const OnBoarding = () => {
  const [showScreen, setShowScreen] = useState(false);
  return <SafeAreaView>{showScreen ? <></> : < ProductDetail/>}</SafeAreaView>;
};

export default OnBoarding;

const styles = StyleSheet.create({});
