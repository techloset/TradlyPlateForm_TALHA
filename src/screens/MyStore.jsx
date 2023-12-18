import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ticon from '../assets/images/Ticon.png';
import CartIcon from '../assets/images/cartIcon.svg';
import Whishlist from '../assets/images/wishListIcon.svg';
import CustomButton from '../components/CustomButton';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const MyStore = ({navigation}) => {
  const EditButtonStyle = {
    width: widthPixel(111),
    borderWidth: widthPixel(1),
    borderColor: COLOR.bodygreen,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    paddingStart: pixelSizeVertical(14),
    padding: 7,
  };
  const EditButtonTextStyle = {
    textAlign: 'center',
    color: COLOR.bodygreen,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
  };
  const ViewButtonTextStyle = {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
  };
  const ViewButtonStyle = {
    width: widthPixel(111),
    padding: 7,
    borderWidth: widthPixel(1),
    borderColor: COLOR.bodygreen,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    paddingStart: pixelSizeVertical(14),
    backgroundColor: COLOR.bodygreen,
  };
  const ProductButtonTextStyle = {
    textAlign: 'center',
    color: COLOR.bodygreen,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.MontserratSemi,
  };
  const ProductButtonStyle = {
    width: widthPixel(219),
    height: widthPixel(48),
    borderWidth: widthPixel(2),
    borderColor: COLOR.bodygreen,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    paddingStart: pixelSizeVertical(14),
  };
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.backContainer}>
          <Text style={styles.textCart}>My Store </Text>
        </View>
        <View style={[styles.ImageContainer, styles.CartIconContainer]}>
          <View style={styles.CartIconContainer}>
            <Whishlist />
          </View>
          <View>
            <CartIcon />
          </View>
        </View>
      </View>
      <View style={styles.tradlyStoreContainer}>
        <Image style={styles.TiconStyle} source={Ticon} />
        <Text style={styles.tradlyText}>Tradly Store</Text>
        <View style={styles.CustomBtn}>
          <TouchableOpacity onPress={() => navigation.navigate('CreateStore')}>
            <CustomButton
              text="Edit Store"
              style={EditButtonStyle}
              textStyle={EditButtonTextStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TradlyStore')}>
            <CustomButton
              text="View Store"
              style={ViewButtonStyle}
              textStyle={ViewButtonTextStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.borderBottom}></View>
        <Text style={styles.removeText}>Remove Store</Text>
      </View>
      <View style={styles.productContainer}>
        <Text style={styles.textProduct}>You dont have Product</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
          <CustomButton
            text="Add Product"
            style={ProductButtonStyle}
            textStyle={ProductButtonTextStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyStore;

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
    fontFamily: FONT_FAMILY.MontserratBold,
    color: COLOR.white,
  },

  ImageContainer: {
    flexDirection: 'row',
  },
  CartIconContainer: {
    marginRight: pixelSizeVertical(16),
  },
  tradlyText: {
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.MontserratBold,
    color: COLOR.black,
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(20),
  },
  tradlyStoreContainer: {
    alignItems: 'center',
    backgroundColor: COLOR.white,
  },
  TiconStyle: {
    marginTop: pixelSizeVertical(30),
  },
  CustomBtn: {
    flexDirection: 'row',
    gap: 10,
  },
  borderBottom: {
    borderWidth: 0.2,
    marginTop: pixelSizeVertical(27),
    marginBottom: pixelSizeVertical(9),
    borderColor: COLOR.lightGrey,
    width: '100%',
  },
  removeText: {
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    opacity: 0.5,
    color: COLOR.grey,
    marginBottom: pixelSizeVertical(11),
  },
  textProduct: {
    marginTop: pixelSizeVertical(60),
    marginBottom: pixelSizeVertical(37),
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.MontserratSemi,
    color: COLOR.black,
  },
  productContainer: {
    alignItems: 'center',
  },
});
