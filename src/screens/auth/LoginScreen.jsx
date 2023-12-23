import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import ratio from '../../styles/ratio';
import {COLOR, FONT_FAMILY} from '../../styles/GlobalStyles';
import SCREENS from '../../lib/const/Screen';
import {inputStyles} from '../../components/InputStylesHeader';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.firstTextConatiner}>
          <Text style={[styles.textHeading]}>Welcome to tradly</Text>
          <Text style={[styles.text, styles.OtherText]}>
            Login to your account
          </Text>
        </View>
        <View style={styles.inputContaineer}>
          <CustomInput
            placeholderTextColor="white"
            placeHolder="Email/Mobile Number"
            style={inputStyles.inputStyleLogin}
            inputContainer={inputStyles.inputContainerLogin}
          />
          <CustomInput
            placeholderTextColor="white"
            placeHolder="Password"
            style={inputStyles.inputStyleLogin}
            inputContainer={inputStyles.inputContainerLogin}
          />
        </View>
        <View style={styles.customBTN}>
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.SignUp)}>
            <CustomButton
              text="Login"
              style={inputStyles.ButtonStyleLogin}
              textStyle={inputStyles.ButtonTextStyleLogin}
            />
          </TouchableOpacity>
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
    backgroundColor: COLOR.bodygreen,
  },
  firstTextConatiner: {
    alignItems: 'center',
  },
  textHeading: {
    color: COLOR.white,
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.Montserrat,
    marginTop: pixelSizeVertical(173),
  },
  OtherText: {
    fontSize: fontPixel(16),
    marginTop: pixelSizeVertical(66),
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
    fontFamily: FONT_FAMILY.MontserratRegular,
  },
  inputContaineer: {
    marginTop: pixelSizeVertical(29),
  },
  customBTN: {
    marginTop: pixelSizeVertical(38),
    marginHorizontal: pixelSizeVertical(32),
  },
});
