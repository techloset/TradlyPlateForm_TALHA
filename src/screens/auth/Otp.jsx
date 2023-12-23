import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {inputStyles} from '../../components/InputStylesHeader';
import SCREENS from '../../lib/const/Screen';
import {COLOR, FONT_FAMILY} from '../../styles/GlobalStyles';
import ratio from '../../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const Otp = ({navigation}) => {
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
            style={inputStyles.inputStyleLogin}
            inputContainer={inputStyles.inputContainerLogin}
          />
        </View>
        <Text style={styles.generaltext} t>
          Or login with Social network
        </Text>
        <View style={styles.customBTN}>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.OtpVerifications)}>
            <CustomButton
              text="Next"
              style={inputStyles.ButtonStyleLogin}
              textStyle={inputStyles.ButtonTextStyleLogin}
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
