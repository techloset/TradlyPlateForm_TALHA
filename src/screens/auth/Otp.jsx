import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import {COLOR, FONT_FAMILY} from '../../styles/GlobalStyles';
import CustomButton from '../../components/CustomButton';
import ratio from '../../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const Otp = () => {
  return (
    <SafeAreaView style={styles.mainContainer} >
      <View>
        <Text style={styles.textHeading}>Verify your phone number</Text>
        <Text style={styles.textSubHeading}> We have sent you an SMS with a code to enter number </Text>
        <View style={styles.customInput}>
          <CustomInput placeHolder="+92 ▼" />
        </View>
        <Text style={styles.generaltext} t>
          Or login with Social network
        </Text>
        <CustomButton />
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
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    marginTop: pixelSizeVertical(210),
    textAlign: 'center',
  },
  textSubHeading: {
    color: COLOR.white,
    fontSize: fontPixel(16),
    fontWeight: '400',
    fontFamily: FONT_FAMILY.Montserrat,
    marginTop: pixelSizeVertical(29),
    marginHorizontal: pixelSizeVertical(33),
    textAlign: 'center',
  },
  generaltext: {
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontWeight: '400',
    fontFamily: FONT_FAMILY.Montserrat,
    marginBottom: pixelSizeVertical(16),
    textAlign: 'center',
  },
  customInput: {
    marginTop: pixelSizeVertical(25),
    marginBottom: pixelSizeVertical(64),
  },
});
