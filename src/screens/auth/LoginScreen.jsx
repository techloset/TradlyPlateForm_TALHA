import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import ratio from '../../styles/ratio';
import { COLOR, FONT_FAMILY } from '../../styles/GlobalStyles';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.firstTextConatiner}>
          <Text style={[styles.textHeading]}>Welcome to Community</Text>
          <Text style={[styles.text, styles.OtherText]}>
            Login to your account
          </Text>
        </View>
        <View style={styles.inputContaineer}>
          <CustomInput placeHolder="Email/Mobile Number" />
          <CustomInput placeHolder="Password" />
        </View>
        <View style={styles.customBTN}>
          <CustomButton />
        </View>
        <View style={styles.firstTextConatiner}>
          <Text style={[styles.text, styles.OtherText2]}>
            Forgot your password
          </Text>
          <Text style={[styles.text, styles.OtherText3]}>
            Don’t have an account?Sign up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#33907C',
  },
  firstTextConatiner: {
    alignItems: 'center',
  },
  textHeading: {
    color: 'white',
    fontSize: fontPixel(24),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    marginTop: pixelSizeVertical(173),
  },
  OtherText: {
    fontSize: fontPixel(16),
    marginTop: pixelSizeVertical(66),
    // textAlign:"center"
  },
  OtherText2: {
    fontSize: fontPixel(18),
    marginTop: pixelSizeVertical(32),
  },
  OtherText3: {
    fontSize: fontPixel(18),
    marginTop: pixelSizeVertical(45),
  },

  text: {
    color: COLOR.white,
    fontWeight: '400',
    fontFamily: FONT_FAMILY.Montserrat,
  },
  inputContaineer: {
    marginTop: pixelSizeVertical(29),
  },
  customBTN: {
    marginTop: pixelSizeVertical(38),
  },
});
