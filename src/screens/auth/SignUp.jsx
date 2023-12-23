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
import {inputStyles} from '../../components/InputStylesHeader';
import ratio from '../../styles/ratio';
import {COLOR, FONT_FAMILY} from '../../styles/GlobalStyles';
import SCREENS from '../../lib/const/Screen';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.mainConatiner}>
        <View style={styles.firstTextConatiner}>
          <Text style={styles.textHeading}>Welcome to tradly</Text>
          <Text style={[styles.text, styles.OtherText]}>
            Signup to your account
          </Text>
        </View>
        <View style={styles.inputConatiner}>
          <CustomInput
            placeholderTextColor="white"
            placeHolder="First Name"
            style={inputStyles.inputStyleLogin}
            inputContainer={inputStyles.inputContainerLogin}
          />
          <CustomInput
            placeholderTextColor="white"
            placeHolder="Last Name"
            style={inputStyles.inputStyleLogin}
            inputContainer={inputStyles.inputContainerLogin}
          />
          <CustomInput
            placeholderTextColor="white"
            placeHolder="Email ID/Phone Number"
            style={inputStyles.inputStyleLogin}
            inputContainer={inputStyles.inputContainerLogin}
          />
          <CustomInput
            placeholderTextColor="white"
            placeHolder="Password"
            style={inputStyles.inputStyleLogin}
            inputContainer={inputStyles.inputContainerLogin}
          />
          <CustomInput
            placeholderTextColor="white"
            placeHolder="Re-enter Password"
            style={inputStyles.inputStyleLogin}
            inputContainer={inputStyles.inputContainerLogin}
          />
        </View>
        <View style={styles.customBTN}>
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.Otp)}>
            <CustomButton
              text="Create"
              style={inputStyles.ButtonStyleLogin}
              textStyle={inputStyles.ButtonTextStyleLogin}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.firstTextConatiner}>
          <Text style={[styles.text, styles.OtherText1]}>
            Have an account ? Sign in
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainConatiner: {
    height: '100%',
    backgroundColor: COLOR.bodygreen,
  },
  textHeading: {
    color: COLOR.white,
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.Montserrat,
    marginTop: pixelSizeVertical(155),
  },
  text: {
    color: COLOR.white,
    fontFamily: FONT_FAMILY.MontserratRegular,
  },
  OtherText: {
    fontSize: fontPixel(16),
    marginTop: pixelSizeVertical(54),
  },

  inputConatiner: {
    marginTop: pixelSizeVertical(8),
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
