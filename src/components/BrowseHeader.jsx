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
import { inputStyles } from './InputStylesHeader'
const BrowseHeader = () => {
  const SortImage = require('../assets/images/Sort.png');
  const locationImage = require('../assets/images/Maps.png');
  const CategoryImage = require('../assets/images/Category.png');
  
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
            style={inputStyles.inputStyle}
            inputContainer={inputStyles.inputContainer}
          />
          <ScrollView>
            <View style={{flexDirection: 'row'}}>
              <CustomButton
                text="Sort by"
                style={inputStyles.ButtonStyle}
                textStyle={inputStyles.ButtonTextStyle}
                imageSource={SortImage}
              />
              <CustomButton
                text="Location"
                style={inputStyles.ButtonStyle}
                textStyle={inputStyles.ButtonTextStyle}
                imageSource={locationImage}
              />
              <CustomButton
                text="Category"
                style={inputStyles.ButtonStyle}
                textStyle={inputStyles.ButtonTextStyle}
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
