import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Cross from '../assets/images/cross.png';
import Done from '../assets/images/Done.png';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import {TrackOrder} from '../lib/const/Product';
import TrackerOrder from '../assets/images/trackOrder.png';

const OrderPlaced = () => {
  return (
    <SafeAreaView>
      <ScrollView>
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
                    $50
                  </Text>
                  <Text style={styles.newAddressText}>50% off </Text>
                </Text>
                <Text style={styles.QtyText}>Qty : 1</Text>
              </View>
            </View>
          </View>

          <View style={styles.trackerContainer}>
            <Text>Track Order</Text>
            <Text>Order ID 123455</Text>
            <View style={styles.borderBtm}></View>

            <View style={styles.trackorderContainer}>
              <View>
                <Image source={TrackerOrder} />
              </View>
              <View>
                {TrackOrder.map((item, index) => {
                  return (
                    <View key={index}>
                      <View style={styles.innerTextOne}>
                        <Text style={styles.textTitle}>{item.title}</Text>
                        <Text style={styles.textDate}>{item.date}</Text>
                      </View>
                      <View style={styles.innerTextTwo}>
                        <Text style={[styles.textSubTitle, styles.textDate]}>
                          {item.subtitle}
                        </Text>
                        <Text style={[styles.textTime, styles.textDate]}>
                          {item.time}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>

          <View style={styles.addressContainer}>
            <View style={styles.AddressInnerContainer}>
              <Text style={styles.textAddress}>Delivery Address</Text>
              <View style={styles.borderBottom}></View>
              <Text style={styles.textTeam}>Tradly team</Text>
              <Text style={styles.textFlat}>
                Flat Number 512, Eden Garden, Rewari
              </Text>
              <View style={styles.textMobileContainer}>
                <Text style={[styles.textMobile, styles.mobileStyle]}>
                  Mobile :
                </Text>
                <Text style={[styles.textMobile, styles.numberStyle]}>
                  9876543210
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.backButton}>
            <Text style={styles.textHome}>Back to Home</Text>
          </View>
        </View>
      </ScrollView>
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
  trackerContainer: {
    marginTop: pixelSizeVertical(16),
    height: widthPixel(404),
    backgroundColor: COLOR.white,
  },
  borderBtm: {
    borderWidth: 2,
    borderColor: COLOR.bodygreen,
    width: widthPixel(68),
  },
  trackorderContainer: {
    flexDirection: 'row',
  },
  innerTextOne: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: fontPixel(14),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.darkblack,
  },
  textDate: {
    fontSize: fontPixel(10),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.dimGrey,
    opacity: 0.5,
  },

  innerTextTwo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressContainer: {
    marginTop: pixelSizeVertical(24),
    backgroundColor: COLOR.white,
    height: widthPixel(146),
  },
  AddressInnerContainer: {
    marginLeft: pixelSizeVertical(18),
  },
  textAddress: {
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(13),
    fontSize: fontPixel(16),
    fontWeight: '600',
    fontFamily: FONT_FAMILY.Montserrat,
  },
  borderBottom: {
    borderWidth: 1,
    borderColor: COLOR.offWhite,
  },
  textTeam: {
    marginTop: pixelSizeVertical(11),
    marginBottom: pixelSizeVertical(8),
    fontSize: fontPixel(14),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
  },
  textFlat: {
    fontSize: fontPixel(12),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.dimGrey,
  },

  textHome: {
    fontSize: fontPixel(14),
    fontWeight: '600',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.darkblack,
  },
  textMobileContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: pixelSizeVertical(6),
  },
  textMobile: {
    fontSize: fontPixel(12),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
  },
  mobileStyle: {
    color: COLOR.dimGrey,
  },
  numberStyle: {
    color: COLOR.coldblue,
  },
  backButton: {
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(40),
    alignItems: 'center',
  },
});
