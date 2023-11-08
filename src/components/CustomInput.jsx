import { StyleSheet, Text, View,SafeAreaView,TextInput } from 'react-native'
import React from 'react'

import ratio from '../styles/ratio'
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const CustomInput = (props) => {
  // console.log(props);
  return (
    <SafeAreaView>
      <View style={props.inputContainer}>
        <TextInput style={props.style}
        placeholder={props.placeHolder} 
        placeholderTextColor={props.placeholderTextColor}
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
    height:widthPixel(48),
    padding:pixelSizeVertical(15)
  },
  inputContainer:{
    marginTop:pixelSizeVertical(16),
    marginHorizontal:pixelSizeVertical(32),
    
  }
  
})