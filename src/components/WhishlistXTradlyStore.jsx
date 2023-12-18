import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Product} from '../lib/const/Product';
import CustomButton from '../components/CustomButton';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const WhishlistXTradlyStore = () => {
  return (
    <View style={styles.tradlyStoreProduct}>
      {Product.map((item, index) => {
        if (index === 0) {
          return null;
        }
        return (
          <View key={index} style={styles.container}>
            <Image
              style={{borderRadius: 10, width: widthPixel(160)}}
              source={item.source}
            />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.innerContainer}>
              <View style={styles.AvatarConatiner}>
                <Image style={styles.avatar} source={item.avatar} />
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.lastPrice}>{item.lastPrice}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default WhishlistXTradlyStore;

const styles = StyleSheet.create({
  tradlyStoreProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: pixelSizeVertical(30),
    justifyContent: 'center',
  },
  container: {
    borderWidth: 1,
    borderColor: COLOR.dimGray,
    borderRadius: 10,
    margin: pixelSizeVertical(10),
  },
  title: {
    color: COLOR.darkGray,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    marginLeft: pixelSizeVertical(12),
    marginTop: pixelSizeVertical(11),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(11),
    alignItems: 'center',
  },
  AvatarConatiner: {
    flexDirection: 'row',
  },
  avatar: {
    marginLeft: pixelSizeVertical(12),
    marginRight: pixelSizeVertical(4),
  },
  subtitle: {
    color: COLOR.grey,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
  },
  priceContainer: {
    flexDirection: 'row',
  },

  price: {
    marginRight: pixelSizeVertical(6),
    marginLeft: pixelSizeVertical(6),
  },
});
