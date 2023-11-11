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

const CartSceen = () => {
  return (
    <SafeAreaView>
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
        <Text style={styles.newAddressText}>+ Add New Address</Text>
      </View>
    </SafeAreaView>
  );
};

export default CartSceen;

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
  newAddress:{
    // justifyContent:"center"
    height:widthPixel(52),
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:"center"
  }
});
