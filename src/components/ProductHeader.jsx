import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import Back from '../assets/images/Back.svg';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

import CustomButton from './CustomButton';

const ProductHeader = ({navigation, text}) => {
  const SortImage = require('../assets/images/Sort.png');
  const locationImage = require('../assets/images/Maps.png');
  const CategoryImage = require('../assets/images/Category.png');

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
          <View style={styles.main}>
            <View style={styles.backContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Back />
              </TouchableOpacity>
            </View>
            <View style={styles.cartText}>
              <Text style={styles.textCart}>{text} </Text>
            </View>
          </View>
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

export default ProductHeader;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLOR.bodygreen,
    height: widthPixel(116),
    flexDirection: 'row',
    alignItems: 'center',
  },

  backContainer: {
    marginLeft: pixelSizeVertical(16),
    justifyContent: 'center',
  },
  cartText: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  textCart: {
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.MontserratBold,
    color: COLOR.white,
  },
  headerContainer: {
    backgroundColor: COLOR.bodygreen,
  },
  innerContainer: {
    flexDirection: 'row',
    marginTop: pixelSizeVertical(56),
    backgroundColor: 'red',
    alignItems: 'center',
  },
  textHeading: {
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.MontserratBold,
    color: COLOR.white,
    marginLeft: pixelSizeVertical(18),
  },
});
