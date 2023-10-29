import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import LoginScreen from './LoginScreen'

const OnBoarding = () => {
    const [showScreen, setShowScreen] = useState(false)
  return (
    <SafeAreaView>
      {
        showScreen ? <></> : <LoginScreen/>
      }
    </SafeAreaView>
  )
}

export default OnBoarding

const styles = StyleSheet.create({})