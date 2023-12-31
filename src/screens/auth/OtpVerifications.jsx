import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import CustomButton from '../../components/CustomButton';
import {COLOR, FONT_FAMILY} from '../../styles/GlobalStyles';
import ratio from '../../styles/ratio';
import SCREENS from '../../lib/const/Screen';
import {inputStyles} from '../../components/InputStylesHeader';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const OtpVerifications = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
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
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.BottomNav)}>
          <CustomButton
            style={inputStyles.customButtonStyleOtp}
            textStyle={inputStyles.ButtonTextStyleLogin}
            text="Verify"
          />
        </TouchableOpacity>
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
    fontFamily: FONT_FAMILY.MontserratRegular,
    marginTop: pixelSizeVertical(74),
    textAlign: 'center',
  },
  textResend: {
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.MontserratRegular,
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
