// InputStyles.js

import {StyleSheet} from 'react-native';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';

const {widthPixel, pixelSizeVertical, fontPixel} = ratio;

export const inputStyles = StyleSheet.create({
  inputStyle: {
    borderRadius: pixelSizeVertical(25),
    borderWidth: 1,
    borderColor: COLOR.white,
    height: widthPixel(48),
    padding: pixelSizeVertical(15),
    backgroundColor: COLOR.white,
  },
  inputContainer: {
    marginTop: pixelSizeVertical(23),
    marginHorizontal: pixelSizeVertical(20),
    marginBottom: pixelSizeVertical(16),
  },

  ButtonStyle: {
    width: widthPixel(112),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(23),
    justifyContent: 'center',
    backgroundColor: COLOR.bodygreen,
    height: 31,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 13,
    marginLeft: 10,
  },

  ButtonTextStyle: {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    marginLeft: 6,
  },

  ButtonStyleStore: {
    width: widthPixel(87),
    height: widthPixel(23),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    backgroundColor: COLOR.bodygreen,
  },
  ButtonTextStyleStore: {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
  },

  ButtonStyleAddProduct: {
    width: widthPixel(311),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    backgroundColor: COLOR.bodygreen,
    height: 50,
  },
  ButtonTextStyleAddProduct: {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.MontserratSemi,
  },

  ButtonStyleChechkOutSecond: {
    width: widthPixel(94),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(23),
    justifyContent: 'center',
    backgroundColor: COLOR.bodygreen,
    padding: 7,
  },

  customButtonStyleHome: {
    width: widthPixel(147),
    height: widthPixel(28),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(14),
    justifyContent: 'center',
    paddingStart: pixelSizeVertical(14),
  },
  customButtonTextStyleHome: {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.MontserratBold,
  },

  ButtonStyleTradlyStore: {
    width: widthPixel(87),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    backgroundColor: COLOR.bodygreen,
    padding: 7,
  },
  GrocerieButtonStyle: {
    width: widthPixel(118),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    backgroundColor: COLOR.lightGrey,
    padding: 10,
  },
  GrocerieTextStyle: {
    textAlign: 'center',
    color: COLOR.grey,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.MontserratRegular,
  },

  inputStyleLogin: {
    borderRadius: pixelSizeVertical(25),
    borderWidth: 1,
    borderColor: COLOR.white,
    height: widthPixel(48),
    padding: pixelSizeVertical(15),
  },

  inputContainerLogin: {
    marginTop: pixelSizeVertical(23),
    marginHorizontal: pixelSizeVertical(32),
    marginBottom: pixelSizeVertical(16),
  },
  ButtonStyleLogin: {
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    backgroundColor: COLOR.white,
    height: 50,
  },
  ButtonTextStyleLogin: {
    textAlign: 'center',
    color: COLOR.btnColor,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.Montserrat,
  },

  customButtonStyleOtp: {
    width: widthPixel(311),
    height: widthPixel(48),
    backgroundColor: COLOR.white,
    borderRadius: 25,
    justifyContent: 'center',
    marginHorizontal: pixelSizeVertical(32),
  },




  EditButtonStyle: {
    width: widthPixel(111),
    borderWidth: widthPixel(1),
    borderColor: COLOR.bodygreen,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    paddingStart: pixelSizeVertical(14),
    padding: 7,
  },
  EditButtonTextStyle: {
    textAlign: 'center',
    color: COLOR.bodygreen,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
  },
  ViewButtonStyle :{
    width: widthPixel(111),
    padding: 7,
    borderWidth: widthPixel(1),
    borderColor: COLOR.bodygreen,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    paddingStart: pixelSizeVertical(14),
    backgroundColor: COLOR.bodygreen,
  },
  ProductButtonTextStyle: {
    textAlign: 'center',
    color: COLOR.bodygreen,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.MontserratSemi,
  },
  ProductButtonStyle : {
    width: widthPixel(219),
    height: widthPixel(48),
    borderWidth: widthPixel(2),
    borderColor: COLOR.bodygreen,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    paddingStart: pixelSizeVertical(14),
  },
});
