import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import LoginScreen from './auth/LoginScreen'
import SignUp from './auth/SignUp'
import Otp from './auth/Otp'
import OtpVerifications from './auth/OtpVerifications'
import Home from './Home'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

const OnBoarding = () => {
    const [showScreen, setShowScreen] = useState(false)
  return (
    <SafeAreaView>
      {
        showScreen ? <></> : <Home/>
      }
    </SafeAreaView>
  )
}

export default OnBoarding

const styles = StyleSheet.create({})