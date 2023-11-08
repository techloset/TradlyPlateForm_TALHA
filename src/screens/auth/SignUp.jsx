import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import ratio from '../../styles/ratio';
import { FONT_FAMILY } from '../../styles/GlobalStyles';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const SignUp = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainConatiner}>
        <View style={styles.firstTextConatiner}>
          <Text style={styles.textHeading}>Welcome to tradly</Text>
          <Text style={[styles.text, styles.OtherText]}>Signup to your account</Text>
        </View>
        <View style={styles.inputConatiner}>
          <CustomInput placeHolder="First Name" />
          <CustomInput placeHolder="Last Name" />
          <CustomInput placeHolder="Email ID/Phone Number" />
          <CustomInput placeHolder="Password" />
          <CustomInput placeHolder="Re-enter Password" />
        </View>
        <View style={styles.btnConatiner}>
          <CustomButton />
        </View>
        <View style={styles.firstTextConatiner}>
          <Text style={[styles.text, styles.OtherText1]}>Have an account ? Sign in</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainConatiner: {
    height: '100%',
    backgroundColor: '#33907C',
  },
  textHeading: {
    color: 'white',
    fontSize: fontPixel(24),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    marginTop: pixelSizeVertical(155),
  },
  text: {
    color: 'white',
    fontWeight: '400',
    fontFamily: FONT_FAMILY.Montserrat,
  },
  OtherText: {
    fontSize: fontPixel(16),
    marginTop: pixelSizeVertical(54),
  },
  
  inputConatiner:{
    marginTop:pixelSizeVertical(8)
  },
  btnConatiner:{
    marginTop:pixelSizeVertical(41)
  },
  OtherText1: {
    fontSize: fontPixel(18),
    marginTop: pixelSizeVertical(38),
  },
  firstTextConatiner: {
    alignItems: 'center',
  },
});
