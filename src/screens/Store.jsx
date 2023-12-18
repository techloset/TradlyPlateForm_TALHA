import React from 'react';
import {
  Image,
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
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

import Mystore from '../assets/images/myStore.png';
import CustomButton from '../components/CustomButton';

const Store = ({navigation}) => {
  const customButtonStyle = {
    width: widthPixel(313),
    height: widthPixel(50),
    borderWidth: widthPixel(1),
    borderColor: COLOR.bodygreen,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    paddingStart: pixelSizeVertical(14),
    backgroundColor: COLOR.bodygreen,
  };
  const customButtonTextStyle = {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '600',
  };
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
          <View>
            <CartIcon />
          </View>
        </View>
      </View>

      <View style={styles.otherContainer}>
        <View>
          <Image source={Mystore} />
        </View>

        <Text style={styles.storeText}>You Dont Have a Store</Text>

        <TouchableOpacity onPress={() => navigation.navigate('CreateStore')}>
          <CustomButton
            text="Create Store"
            style={customButtonStyle}
            textStyle={customButtonTextStyle}
          />
        </TouchableOpacity>
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
    justifyContent: 'space-between',
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
  CartIcon: {
    marginRight: pixelSizeVertical(16),
  },
  otherContainer: {
    alignItems: 'center',
    marginTop: pixelSizeVertical(57),
  },
  storeText: {
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '600',
    color: COLOR.black,
    marginTop: pixelSizeVertical(28),
    marginBottom: pixelSizeVertical(37),
  },
});
