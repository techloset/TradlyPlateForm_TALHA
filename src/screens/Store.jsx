import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import Back from '../assets/images/Back.svg';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import CartIcon from '../assets/images/cartIcon.svg';
import Whishlist from '../assets/images/wishListIcon.svg';

const Store = () => {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.backContainer}>
          <Text style={styles.textCart}>My Store </Text>
        </View>
        <View style={styles.ImageContainer}>
          <View style={styles.CartIcon}>
            <Whishlist />
          </View>
          <View >
            <CartIcon />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Store;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLOR.bodygreen,
    height: widthPixel(116),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    // marginHorizontal: pixelSizeVertical(16),
  },
  backContainer: {
    marginLeft: pixelSizeVertical(16),
    justifyContent: 'center',
  },
  ImageContainer: {
    flexDirection: 'row',
    marginRight: pixelSizeVertical(16),
  },
  textCart: {
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '700',
    color: COLOR.white,
  },
  CartIcon:{
    marginRight: pixelSizeVertical(16),
  }
});
