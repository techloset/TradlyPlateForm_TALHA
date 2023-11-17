import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Back from '../assets/images/Back.svg';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
import WhishlistXTradlyStore from '../components/WhishlistXTradlyStore';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const WhishList = ({navigation}) => {
  return (
    <View>
      <View style={styles.main}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Back />
          </TouchableOpacity>
        </View>
        <View style={styles.cartText}>
          <Text style={styles.textCart}>WhishList </Text>
        </View>
      </View>
      <View>
        <WhishlistXTradlyStore />
      </View>
    </View>
  );
};

export default WhishList;

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
});
