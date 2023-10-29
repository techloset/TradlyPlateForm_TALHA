import { StyleSheet, Text, View,SafeAreaView,Dimensions } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'

import ratio from '../styles/ratio'
import CustomButton from '../components/CustomButton';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log(windowWidth);
console.log(windowHeight);
const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
      <Text style={[styles.texxtHeading]}>Welcome to Community</Text>
      <Text style={[styles.texxt,styles.OtherText]}>Login to your account</Text>
      <View style={styles.inputContaineer}>
      <CustomInput/>
      <CustomInput/>
      </View>
      <View style={styles.customBTN}>
        <CustomButton/>
      </View>
      <Text style={[styles.texxt,styles.OtherText2]}>Forgot your password</Text>
      <Text style={[styles.texxt,styles.OtherText3]}>Don’t have an account?Sign up</Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
mainContainer:{

  height:"100%",
  backgroundColor:"#33907C"
},
texxtHeading:{
  color:'white',
  fontSize:fontPixel(24),
  fontWeight:"500",
  fontFamily:"Montserrat-Medium",
  marginTop:pixelSizeVertical(173),
  
  // textAlign:'center',
  backgroundColor:"red"
},
OtherText:{
  fontSize:fontPixel(16),
  marginTop:pixelSizeVertical(66),
  // textAlign:"center"
},
OtherText2:{
  fontSize:fontPixel(18),
  marginTop:pixelSizeVertical(32)
},
OtherText3:{
  fontSize:fontPixel(18),
  marginTop:pixelSizeVertical(45)
},

texxt:{
  color:'white',
  fontWeight:"400",
  fontFamily:"Montserrat-Medium"
},
inputContaineer:{
  marginTop:pixelSizeVertical(29)
},
customBTN:{
  marginTop:pixelSizeVertical(38)
}

})