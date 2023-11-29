import { StyleSheet, Text, View,SafeAreaView,StatusBar } from 'react-native'
import React from 'react'
import OnBoarding from './src/screens/OnBoarding'
import ratio from './src/styles/ratio'
import BottomNav from './src/navigation/BottomNav';
import StackNav from './src/navigation/StackNav';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar  backgroundColor = "rgba(0, 0, 0, 0)" translucent = {true}/>
      {/* <OnBoarding/> */}
      <StackNav/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})