import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import CartIcon from '../assets/images/cartIcon.svg';
import Whishlist from '../assets/images/wishListIcon.svg';
// import {COLOR} from '../styles/GlobalStyles';

import ratio from '../styles/ratio';
import {COLOR,FONT_FAMILY} from '../styles/GlobalStyles';
import CustomInput from './CustomInput';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const Header = () => {
  const InputStyle = {
    borderRadius: 25, // Adjust this value to change the roundness
    borderWidth: 1,
    borderColor: 'white',
    height:widthPixel(48),
    padding:pixelSizeVertical(15),
    backgroundColor:COLOR.white,
    // placeHolderColor:"green"
    // justifyContent: 'center',
    // marginHorizontal: pixelSizeVertical(32),
  }

 const inputContainer={
    marginTop:pixelSizeVertical(23),
    marginHorizontal:pixelSizeVertical(20),
    marginBottom:pixelSizeVertical(16),
    
  }
  

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
                <CartIcon />
              </View>
              <View>
                <Whishlist />
              </View>
            </View>
          </View>
          <CustomInput placeholderTextColor="grey" placeHolder="Search Product" style={InputStyle} inputContainer={inputContainer}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLOR.bodygreen,
    // flexDirection: 'row',
    // marginTop:pixelSizeVertical(56)
    // justifyContent:'space-between'
  },
  innerContainer: {
    flexDirection: 'row',
    marginTop: pixelSizeVertical(56),
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textHeading: {
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '700',
    color: COLOR.white,
    marginLeft: pixelSizeVertical(18),
  },
  imagesContainer: {
    flexDirection: 'row',
    marginRight: pixelSizeVertical(18),
  },
});
