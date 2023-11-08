import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
// import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {COLOR, FONT_FAMILY} from '../../styles/GlobalStyles';
import ratio from '../../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import OTPTextView from 'react-native-otp-textinput';

const OtpVerifications = () => {
  const customButtonStyle = {
    width: widthPixel(311),
    height: widthPixel(48),
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    marginHorizontal: pixelSizeVertical(32),
  };
  const customButtonTextStyle = {
    textAlign: 'center',
    color:"#13B58C",
    fontSize:fontPixel(16),
    fontFamily:"Montserrat-Medium",
    fontWeight:"500"
  };

  return (
    <SafeAreaView style={styles.mainContainer} >
      <View>
        <Text style={styles.textHeading}>Phone Verification</Text>
        <Text style={styles.textSubHeading}>Enter your OTP code here</Text>
        <View style={styles.OtoText}>
          <OTPTextView
            inputCount={6}
            offTintColor={COLOR.white}
            textInputStyle={styles.inputsText}
          />
        </View>
        <Text style={styles.generaltext}>Didn’t you received any code?</Text>
        <Text style={styles.textResend}>Resent new code</Text>
        <CustomButton style={customButtonStyle} textStyle={customButtonTextStyle} text="Verify" />
      </View>
    </SafeAreaView>
  );
};

export default OtpVerifications;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLOR.bodygreen,
    height: '100%',
  },
  textHeading: {
    color: COLOR.white,
    fontSize: fontPixel(24),
    fontWeight: '500',
    marginTop: pixelSizeVertical(210),
    textAlign: 'center',
  },
  textSubHeading: {
    color: COLOR.white,
    fontSize: fontPixel(16),
    fontWeight: '400',
    marginTop: pixelSizeVertical(25),
    textAlign: 'center',
  },
  generaltext: {
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontWeight: '400',
    marginTop: pixelSizeVertical(74),
    textAlign: 'center',
  },
  textResend: {
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontWeight: '400',
    marginTop: pixelSizeVertical(8),
    marginBottom: pixelSizeVertical(57),
    textAlign: 'center',
  },
  inputsText: {
    color: COLOR.white,
    fontSize: fontPixel(26),
    fontFamily: FONT_FAMILY.Montserrat,
    letterSpacing: fontPixel(-0.627),
  },
  OtoText: {
    marginTop: pixelSizeVertical(74),
  },
});
