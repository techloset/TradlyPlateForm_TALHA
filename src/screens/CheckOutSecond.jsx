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
import Back from '../assets/images/Back.svg';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import {PriceDetailsCard} from '../lib/const/Product';
import CustomButton from '../components/CustomButton';

const CheckOutSecond = () => {

    const ButtonStyle = {
        width: widthPixel(94),
        borderWidth: widthPixel(1),
        borderColor: COLOR.white,
        borderRadius: widthPixel(23),
        justifyContent: 'center',
        backgroundColor: COLOR.bodygreen,
        padding: 7,
        // height:23,
      };
      const ButtonTextStyle = {
        textAlign: 'center',
        color: COLOR.white,
        fontSize: fontPixel(12),
        fontFamily: FONT_FAMILY.Montserrat,
        fontWeight: '500',
      };
  return (
    <SafeAreaView style={{backgroundColor: COLOR.lightBlue, height: '100%'}}>
      <View style={styles.main}>
        <View style={styles.backContainer}>
          <TouchableOpacity>
            <Back />
          </TouchableOpacity>
        </View>
        <View style={styles.cartText}>
          <Text style={styles.textCart}>My Cart </Text>
        </View>
      </View>
      <View style={styles.newAddress}>
        <View style={styles.adressContainer}>
          <Text style={styles.newAddressText}>
            Deliver to Tradly Team, 75119
          </Text>
          <Text style={[styles.newAddressTextTwo,styles.newAddressText]}>Kualalumpur, Malaysia</Text>
        </View>
        <View style={styles.customBtn}>
          <CustomButton
            text="Change"
            style={ButtonStyle}
            textStyle={ButtonTextStyle}
          />
        </View>
      </View>
      <View style={styles.cartContainerTwo}>
        <View style={styles.cartInnerContainer}>
          <View style={styles.cartImage}>
            <Image source={require('../assets/images/colaCart.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.newAddressText}>Coca Cola</Text>
            <Text style={[styles.cartPricetext]}>
              <Text style={styles.CurrentText}>$25</Text>
              <Text
                style={[
                  styles.lastPriceText,
                  styles.cartRemovetext,
                  styles.newAddressText,
                ]}>
                $50
              </Text>
              <Text style={styles.newAddressText}>50% off</Text>
            </Text>
            <Text style={styles.QtyText}>Qty : 1</Text>
          </View>
        </View>
        <View style={styles.borderCart}></View>
        <Text style={[styles.cartRemovetext, styles.newAddressText]}>
          Remove
        </Text>
      </View>

      <View style={styles.priceDetailSection}>
        <View style={styles.priceDetailInnerSection}>
          <Text style={styles.priceDetailText}>Price Details</Text>
          <View>
            {PriceDetailsCard.map((item, index) => {
              const isSecondIterationOrLater = index === 2;
              const isFirstIteration = index === 1;
              return (
                <View
                  style={[
                    styles.textPriceContainer,
                    isSecondIterationOrLater && styles.borderCart2,
                    isSecondIterationOrLater ? styles.TotalAmountHeight : null,
                    isFirstIteration ? styles.DeliveryText : null,
                  ]}
                  key={index}>
                  <Text
                    style={[
                      styles.priceText,
                      isSecondIterationOrLater ? styles.TotalAmountText : null,
                    ]}>
                    {item.title}
                  </Text>
                  <Text style={styles.priceText}>{item.subtitle}</Text>
                  <Text
                    style={[
                      styles.priceText,
                      isSecondIterationOrLater ? styles.TotalAmountText : null,
                    ]}>
                    {item.price}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckOutSecond;

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
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '700',
    color: COLOR.white,
  },
  newAddress: {
    height: widthPixel(69),
    backgroundColor: COLOR.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:"row",
  },
  newAddressTextTwo: {
    opacity:0.7
  },
  newAddressText: {
    fontSize: fontPixel(14),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.grey,
  },
  adressContainer:{
    marginLeft:pixelSizeVertical(19),
  },
  customBtn:{
    marginRight:pixelSizeVertical(19),
  },
  cartContainerTwo: {
    height: widthPixel(193),
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
  borderCart: {
    marginTop: pixelSizeVertical(12),
    borderBottomWidth: 0.3,
    borderColor: COLOR.lightGrey,
  },
  borderCart2: {
    marginTop: pixelSizeVertical(12),
    borderTopWidth: 0.5,
    borderColor: COLOR.lightGrey,
  },
  textContainer: {
    marginTop: pixelSizeVertical(43),
    marginLeft: pixelSizeVertical(15),
  },
  cartPricetext: {
    marginTop: pixelSizeVertical(11),
  },
  cartRemovetext: {
    textAlign: 'center',
    marginTop: pixelSizeVertical(10),
    opacity: 0.5,
  },
  lastPriceText: {
    textDecorationLine: 'line-through',
  },
  CurrentText: {
    color: COLOR.bodygreen,
    fontSize: fontPixel(18),
    fontWeight: '700',
    fontFamily: FONT_FAMILY.Montserrat,
  },
  QtyText: {
    fontSize: fontPixel(12),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.grey,
    marginTop: pixelSizeVertical(14),
  },
  priceDetailSection: {
    height: widthPixel(183),
    backgroundColor: COLOR.white,
    marginTop: pixelSizeVertical(60),
  },
  priceDetailText: {
    fontSize: fontPixel(18),
    fontWeight: '600',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.black,
    marginBottom: pixelSizeVertical(16),
  },
  priceDetailInnerSection: {
    marginHorizontal: pixelSizeVertical(16),
    marginTop: pixelSizeVertical(16),
  },
  textPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: fontPixel(14),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.black,
  },
  TotalAmountText: {
    fontSize: fontPixel(18),
    fontWeight: '600',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.black,
  },
  TotalAmountHeight: {
    height: 46,
    alignItems: 'center',
    // justifyContent:"center"
  },
  DeliveryText: {
    marginTop: pixelSizeVertical(10),
    marginBottom: pixelSizeVertical(5),
  },
});
