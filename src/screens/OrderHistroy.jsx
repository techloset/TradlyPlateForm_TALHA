import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import CartIcon from '../assets/images/cartIcon.svg';
import Whishlist from '../assets/images/wishListIcon.svg';
import {OrderHistroyList} from '../lib/const/Product';

const OrderHistroy = () => {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.backContainer}>
          <Text style={styles.textCart}>Order Histroy </Text>
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

      <View>
        <View style={styles.textContainer}>
          <Text style={styles.Text}>Transactions </Text>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>January 2020 </Text>
          </View>
        </View>

        <View>
          {OrderHistroyList.map((item, index) => {
            // console.log(item);
            return (
              <View key={index} style={styles.loopContainer}>
                <View>
                  <Image style={styles.imgCoca} source={item.source} />
                </View>
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.price}</Text>
                  <Text>{item.lastPrice}</Text>
                </View>
                <TouchableOpacity onPress={item.button.onPress}>
                  <View style={styles.btnContainer}>
                    <Text style={styles.btnText}>{item.button.label}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderHistroy;

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
    flexDirection: 'row',
    marginRight: pixelSizeVertical(16),
  },
  CartIcon: {
    marginRight: pixelSizeVertical(16),
  },
  textContainer: {
    flexDirection: 'row',
    gap: 7,
    marginTop: pixelSizeVertical(30),
    marginLeft: pixelSizeVertical(9),
    alignItems: 'center',
  },
  Text: {
    color: COLOR.darkblack,
    fontSize: fontPixel(20),
    fontWeight: '700',
    fontFamily: FONT_FAMILY.Montserrat,
  },
  dateContainer: {
    backgroundColor: COLOR.bodygreen,
    opacity: 0.4,
  },
  dateText: {
    color: COLOR.bodygreen,
    fontSize: fontPixel(13),
    fontWeight: '700',
    fontFamily: FONT_FAMILY.Montserrat,
  },

  loopContainer: {
    flexDirection: 'row',
    // width: widthPixel(375),
    height: widthPixel(68),
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgCoca: {
    width: widthPixel(37),
    height: widthPixel(37),
    marginLeft:pixelSizeVertical(16)
  },
  btnContainer: {
    width: widthPixel(95),
    height: widthPixel(20),
    // width: widthPixel(111),
    borderWidth: widthPixel(1),
    borderColor: COLOR.bodygreen,
    borderRadius: widthPixel(24),
    // justifyContent: 'center',
    // paddingStart: pixelSizeVertical(14),
    // padding: 7,
    marginRight:pixelSizeVertical(12)
  },
  btnText: {
    textAlign: 'center',
    color: COLOR.bodygreen,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '500',
  },
});
