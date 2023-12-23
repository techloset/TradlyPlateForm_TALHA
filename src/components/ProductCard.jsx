import {StyleSheet, Text, View, Image, ScrollView,TouchableOpacity} from 'react-native';
import React from 'react';

import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import {Product} from '../lib/const/Product';
import ratio from '../styles/ratio';
import SCREENS from '../lib/const/Screen';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const ProductCard = ({navigation}) => {
  const handleImagePress = (item) => {
    navigation.navigate(SCREENS.ProductDetail, { item });
  }
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: 'row'}}>
        {Product.map((item, index) => {
          return (
            <View key={index} style={styles.container}>
            {index === 0 ? (
                <TouchableOpacity onPress={() => handleImagePress(item)}>
                  <Image source={item.source} />
                </TouchableOpacity>
              ) : (
                <Image source={item.source} />
              )}
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
    borderColor: COLOR.dimGray,
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
    color: COLOR.darkGray,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    marginLeft: pixelSizeVertical(12),
    marginTop: pixelSizeVertical(11),
  },
  subtitle: {
    color: COLOR.grey,
    fontSize: fontPixel(14),
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
