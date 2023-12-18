import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import ratio from '../styles/ratio';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import CustomInput from './CustomInput';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import CartIcon from '../assets/images/cartIcon.svg';
import Whishlist from '../assets/images/wishListIcon.svg';
import CustomButton from './CustomButton';

const BrowseHeader = () => {
  const SortImage = require('../assets/images/Sort.png');
  const locationImage = require('../assets/images/Maps.png');
  const CategoryImage = require('../assets/images/Category.png');

  const InputStyle = {
    borderRadius: 25,
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

  const ButtonStyle = {
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
  };
  const ButtonTextStyle = {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    marginLeft: 6,
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
                <TouchableOpacity>
                  <CartIcon />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Whishlist />
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
          <ScrollView>
            <View style={{flexDirection: 'row'}}>
              <CustomButton
                text="Sort by"
                style={ButtonStyle}
                textStyle={ButtonTextStyle}
                imageSource={SortImage}
              />
              <CustomButton
                text="Location"
                style={ButtonStyle}
                textStyle={ButtonTextStyle}
                imageSource={locationImage}
              />
              <CustomButton
                text="Category"
                style={ButtonStyle}
                textStyle={ButtonTextStyle}
                imageSource={CategoryImage}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BrowseHeader;

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
