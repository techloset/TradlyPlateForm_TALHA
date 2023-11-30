import {StyleSheet, Text, View, SafeAreaView,TouchableOpacity} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import ratio from '../../styles/ratio';
import { COLOR, FONT_FAMILY } from '../../styles/GlobalStyles';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const SignUp = ({navigation}) => {

  const InputStyle = {
    borderRadius: pixelSizeVertical(25),
    borderWidth: 1,
    borderColor: COLOR.white,
    height: widthPixel(48),
    padding: pixelSizeVertical(15),
  };

  const inputContainer = {
    marginTop: pixelSizeVertical(23),
    marginHorizontal: pixelSizeVertical(32),
    marginBottom: pixelSizeVertical(16),
  };


  const ButtonStyle = {
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    backgroundColor: COLOR.white,
    // padding: 7,
    height: 50,
  };
  const ButtonTextStyle = {
    textAlign: 'center',
    color: COLOR.btnColor,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '500',
  };
  return (
    <SafeAreaView>
      <View style={styles.mainConatiner}>
        <View style={styles.firstTextConatiner}>
          <Text style={styles.textHeading}>Welcome to tradly</Text>
          <Text style={[styles.text, styles.OtherText]}>Signup to your account</Text>
        </View>
        <View style={styles.inputConatiner}>
          <CustomInput
            placeholderTextColor="white"
            placeHolder="First Name"
            style={InputStyle}
            inputContainer={inputContainer}
          />
          <CustomInput
            placeholderTextColor="white"
            placeHolder="Last Name"
            style={InputStyle}
            inputContainer={inputContainer}
          />
          <CustomInput
            placeholderTextColor="white"
            placeHolder="Email ID/Phone Number"
            style={InputStyle}
            inputContainer={inputContainer}
          />
          <CustomInput
            placeholderTextColor="white"
            placeHolder="Password"
            style={InputStyle}
            inputContainer={inputContainer}
          />
          <CustomInput
            placeholderTextColor="white"
            placeHolder="Re-enter Password"
            style={InputStyle}
            inputContainer={inputContainer}
          />
        </View>
        <View style={styles.customBTN}>
          <TouchableOpacity onPress={() => navigation.navigate('Otp')}>
            <CustomButton
              text="Login"
              style={ButtonStyle}
              textStyle={ButtonTextStyle}
            />
          </TouchableOpacity>
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
  OtherText1: {
    fontSize: fontPixel(18),
    marginTop: pixelSizeVertical(38),
  },
  firstTextConatiner: {
    alignItems: 'center',
  },
  customBTN: {
    marginTop: pixelSizeVertical(38),
    marginHorizontal: pixelSizeVertical(32),
  },
});
