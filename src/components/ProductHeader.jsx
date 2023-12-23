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
import {inputStyles} from './InputStylesHeader';
import CustomButton from './CustomButton';

const ProductHeader = ({navigation, text}) => {
  const SortImage = require('../assets/images/Sort.png');
  const locationImage = require('../assets/images/Maps.png');
  const CategoryImage = require('../assets/images/Category.png');

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
