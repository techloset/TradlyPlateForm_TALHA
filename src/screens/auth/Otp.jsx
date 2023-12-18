import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import {COLOR, FONT_FAMILY} from '../../styles/GlobalStyles';
import CustomButton from '../../components/CustomButton';
import ratio from '../../styles/ratio';
import SCREENS from '../../lib/const/Screen';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const Otp = ({navigation}) => {
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
    height: 50,
  };
  const ButtonTextStyle = {
    textAlign: 'center',
    color: COLOR.btnColor,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.Montserrat,
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.textHeading}>Verify your phone number</Text>
        <Text style={styles.textSubHeading}>
          {' '}
          We have sent you an SMS with a code to enter number{' '}
        </Text>
        <View style={styles.customInput}>
          <CustomInput
            placeholderTextColor="white"
            placeHolder="+92 ▼"
            style={InputStyle}
            inputContainer={inputContainer}
          />
        </View>
        <Text style={styles.generaltext} t>
          Or login with Social network
        </Text>
        <View style={styles.customBTN}>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.OtpVerifications)}>
            <CustomButton
              text="Login"
              style={ButtonStyle}
              textStyle={ButtonTextStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLOR.bodygreen,
    height: '100%',
  },
  textHeading: {
    color: COLOR.white,
    fontSize: fontPixel(25),
    fontFamily: FONT_FAMILY.Montserrat,
    marginTop: pixelSizeVertical(210),
    textAlign: 'center',
  },
  textSubHeading: {
    color: COLOR.white,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.MontserratRegular,
    marginTop: pixelSizeVertical(29),
    marginHorizontal: pixelSizeVertical(33),
    textAlign: 'center',
  },
  generaltext: {
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.MontserratRegular,
    marginBottom: pixelSizeVertical(16),
    textAlign: 'center',
  },
  customInput: {
    marginTop: pixelSizeVertical(25),
    marginBottom: pixelSizeVertical(64),
  },
  customBTN: {
    marginTop: pixelSizeVertical(38),
    marginHorizontal: pixelSizeVertical(32),
  },
});
