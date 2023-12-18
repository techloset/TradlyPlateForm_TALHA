import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Ticon from '../assets/images/Ticon.png';
import CartIcon from '../assets/images/cartIcon.svg';
import Whishlist from '../assets/images/wishListIcon.svg';
import { ProfileOptions } from '../lib/const/Product';
import { COLOR, FONT_FAMILY } from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const Profile = () => {
  return (
    <SafeAreaView style={{backgroundColor: COLOR.lightBlue, height: '100%'}}>
      <View style={styles.main}>
        <View style={styles.InnerMain}>
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

        <View style={styles.profileContainer}>
          <Image source={Ticon} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.textTradlyProfile}>Tradly Team</Text>
            <Text style={styles.infotextProfile}>+1 9998887776</Text>
            <Text style={styles.infotextProfile}>info@tradly.co</Text>
          </View>
        </View>
      </View>

      <View style={styles.profileOptions}>
        {ProfileOptions.map((options, index) => {
          return (
            <View
              key={index}
              style={[
                styles.profileLoop,
                index !== ProfileOptions.length - 1 && styles.borderBottom,
              ]}>
              <Text
                style={[
                  styles.optionText,
                  index === ProfileOptions.length - 1 && {
                    color: COLOR.bodygreen,
                  },
                ]}>
                {options.title}
              </Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLOR.bodygreen,
    height: widthPixel(367),
  },
  InnerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: pixelSizeVertical(16),
  },
  backContainer: {
    marginTop: pixelSizeVertical(54),
  },
  textCart: {
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.MontserratBold,
    color: COLOR.white,
  },
  ImageContainer: {
    flexDirection: 'row',
    marginTop: pixelSizeVertical(54),
  },
  CartIcon: {
    marginRight: pixelSizeVertical(16),
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: pixelSizeVertical(47),
    marginLeft: pixelSizeVertical(26),
  },
  profileTextContainer: {
    marginLeft: pixelSizeVertical(15),
  },

  textTradlyProfile: {
    color: COLOR.white,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.MontserratBold,
    marginBottom: pixelSizeVertical(5),
  },
  infotextProfile: {
    color: COLOR.white,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
    opacity: 0.8,
    marginTop: pixelSizeVertical(2),
  },
  profileOptions: {
    marginTop: pixelSizeVertical(32),
    backgroundColor: COLOR.white,
    width: widthPixel(335),
    height: widthPixel(266),
    position: 'absolute',
    borderRadius: 8,
    top: pixelSizeVertical(222),
    left: pixelSizeVertical(20),

    ...Platform.select({
      ios: {
        shadowColor: COLOR.black,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  profileLoop: {
    marginTop: pixelSizeVertical(18),
    marginHorizontal: pixelSizeVertical(18),
    marginTop: 10,
  },
  optionText: {
    fontSize: widthPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.grey,
    marginBottom: 10,
    marginTop: 5,
  },
  borderBottom: {
    borderBottomWidth: 0.3,
    borderBottomColor: COLOR.lightGrey,
    marginTop: pixelSizeVertical(10),
    marginRight: pixelSizeVertical(18),
  },
});
