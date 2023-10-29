import { StyleSheet, Text, View,SafeAreaView,StatusBar } from 'react-native'
import React from 'react'
import OnBoarding from './src/screens/OnBoarding'
import ratio from './src/styles/ratio'
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar  backgroundColor = "rgba(0, 0, 0, 0)" translucent = {true}/>
      <OnBoarding/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})