import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CartIcon from '../assets/images/cartIcon.svg';
import Whishlist from '../assets/images/wishListIcon.svg';
import { COLOR, FONT_FAMILY } from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
import CustomInput from './CustomInput';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const Header = ({navigation}) => {
  const InputStyle = {
    borderRadius: pixelSizeVertical(25),
    borderWidth: 1,
    borderColor: COLOR.white,
    height: widthPixel(48),
    padding: pixelSizeVertical(15),
    backgroundColor: COLOR.white,
  };

  const inputContainer = {
    marginTop: pixelSizeVertical(23),
    marginHorizontal: pixelSizeVertical(20),
    marginBottom: pixelSizeVertical(16),
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.innerContainer}>
            <View>
              <Text style={styles.textHeading}> Groceries </Text>
            </View>
            <View style={styles.imagesContainer}>
              <View style={styles.imagesContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('WhishList')}>
                  <Whishlist />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('CartSceen')}>
                  <CartIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <CustomInput
            placeholderTextColor="grey"
            placeHolder="Search Product"
            style={InputStyle}
            inputContainer={inputContainer}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLOR.bodygreen,
  },
  innerContainer: {
    flexDirection: 'row',
    marginTop: pixelSizeVertical(56),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textHeading: {
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.MontserratBold,
    color: COLOR.white,
    marginLeft: pixelSizeVertical(18),
  },
  imagesContainer: {
    flexDirection: 'row',
    marginRight: pixelSizeVertical(18),
  },
});
