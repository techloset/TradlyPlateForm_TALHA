import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import ProductHeader from '../components/ProductHeader';
import {Beverage} from '../lib/const/Product';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
const {fontPixel, pixelSizeVertical} = ratio;

const Beverages = ({navigation}) => {
  return (
    <ScrollView>
      <ProductHeader navigation={navigation} text="Beverages" />
      <View style={styles.tradlyStoreProduct}>
        {Beverage.map((item, index) => {
          return (
            <View key={index} style={styles.container}>
              <Image
                style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
                source={item.source}
              />
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

export default Beverages;

const styles = StyleSheet.create({
  tradlyStoreProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: pixelSizeVertical(24),
  },
  container: {
    borderWidth: 1,
    borderColor: COLOR.dimGray,
    borderRadius: 10,
    margin: pixelSizeVertical(10),
  },
  title: {
    color: COLOR.grayComb,
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
  price: {
    marginRight: pixelSizeVertical(6),
    marginLeft: pixelSizeVertical(6),
  },
  priceConatiner: {
    flexDirection: 'row',
  },
});
