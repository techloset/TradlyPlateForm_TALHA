import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Cross from '../assets/images/cross.png';
import Done from '../assets/images/Done.png';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';

const OrderPlaced = () => {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.backContainer}>
          <Text style={styles.textCart}>Order Histroy </Text>
        </View>
        <View style={styles.ImageContainer}>
          <Image source={Cross} />
        </View>
      </View>
      <View>
        <Image source={Done} />
        <Text>Thanks for Order</Text>

        <View style={styles.cartContainerTwo}>
          <View style={styles.cartInnerContainer}>
            <View style={styles.cartImage}>
              <Image source={require('../assets/images/colaCart.png')} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.newAddressText}>Coca Cola</Text>
              <Text style={[styles.cartPricetext]}>
                <Text style={styles.CurrentText}>$25 </Text>
                <Text
                  style={[
                    styles.lastPriceText,
                    styles.cartRemovetext,
                    styles.newAddressText,
                  ]}>
                  $50{' '}
                </Text>
                <Text style={styles.newAddressText}>50% off </Text>
              </Text>
              <Text style={styles.QtyText}>Qty : 1</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderPlaced;

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
  textCart: {
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '700',
    color: COLOR.white,
  },
  ImageContainer: {
    marginRight: pixelSizeVertical(16),
  },

  cartContainerTwo: {
    height: widthPixel(150),
    backgroundColor: COLOR.white,
    marginTop: pixelSizeVertical(9),
  },
  cartInnerContainer: {
    flexDirection: 'row',
  },
  cartImage: {
    marginLeft: pixelSizeVertical(16),
    marginTop: pixelSizeVertical(29),
  },
  textContainer: {
    marginTop: pixelSizeVertical(43),
    marginLeft: pixelSizeVertical(15),
  },
  newAddressText: {
    fontSize: fontPixel(14),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.grey,
  },
  cartPricetext: {
    marginTop: pixelSizeVertical(11),
  },
  CurrentText: {
    color: COLOR.bodygreen,
    fontSize: fontPixel(18),
    fontWeight: '700',
    fontFamily: FONT_FAMILY.Montserrat,
  },
  cartRemovetext: {
    textAlign: 'center',
    marginTop: pixelSizeVertical(10),
    opacity: 0.5,
  },
  lastPriceText: {
    textDecorationLine: 'line-through',
  },
  QtyText: {
    fontSize: fontPixel(12),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.grey,
    marginTop: pixelSizeVertical(14),
  },
});
