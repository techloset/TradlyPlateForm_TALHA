import { StyleSheet, Text, View,SafeAreaView,TextInput } from 'react-native'
import React from 'react'

import ratio from '../styles/ratio'
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const CustomInput = () => {
  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
        placeholder="useless placeholder" 
        />
      </View>
    </SafeAreaView>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  input: {
    // padding: 10,
    borderRadius: 25, // Adjust this value to change the roundness
    borderWidth: 1,
    borderColor: 'white',
  },
  inputContainer:{
    marginTop:pixelSizeVertical(16)
  }
  
})