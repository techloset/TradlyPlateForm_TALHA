import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import {Product} from '../lib/const/Product';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const ProductCard = () => {
  return (
    <ScrollView horizontal>
      <View style={{flexDirection: 'row'}}>
        {Product.map((item, index) => {
          //   console.log(item);
          return (
            <View key={index} style={styles.container}>
              <Image source={item.source} />
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.innerContainer}>
                <View style={styles.AvatarConatiner}>
                  <Image style={styles.avatar} source={item.avatar} />
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
                <View style={styles.priceConatiner}>
                  <Text style={styles.lastPrice}>{item.lastPrice}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#0000001a',
    borderRadius: 10,
    margin: pixelSizeVertical(10),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(11),
    alignItems: 'center',
  },
  title: {
    color: '#4A4A4A',
    fontSize: fontPixel(14),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    marginLeft: pixelSizeVertical(12),
    marginTop: pixelSizeVertical(11),
  },
  subtitle: {
    color: '#4F4F4F',
    fontSize: fontPixel(14),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
  },
  price: {
    marginRight: pixelSizeVertical(6),
    marginLeft: pixelSizeVertical(6),
  },
  avatar: {
    marginLeft: pixelSizeVertical(12),
    marginRight: pixelSizeVertical(4),
  },
  priceConatiner: {
    flexDirection: 'row',
  },
  AvatarConatiner: {
    flexDirection: 'row',
  },
});
