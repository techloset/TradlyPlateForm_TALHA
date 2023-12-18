import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {PopularProduct} from '../lib/const/Product';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';

const PopularProducts = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: 'row'}}>
        {PopularProduct.map((item, index) => {
          return (
            <View key={index} style={styles.container}>
              <Image source={item.source} />
              <Text style={[styles.title,styles.combText]}>{item.title}</Text>
              <View style={styles.innerContainer}>
                <View style={styles.AvatarConatiner}>
                  <Image style={styles.avatar} source={item.avatar} />
                  <Text style={[styles.subtitle,styles.combText]}>{item.subtitle}</Text>
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

export default PopularProducts;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLOR.dimGray,
    borderRadius: 10,
    margin: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 11,
    alignItems: 'center',
  },
  title: {
    color: COLOR.darkGray,
    marginLeft: 12,
    marginTop: 11,
  },
  subtitle: {
    color: COLOR.grey,
  },
  combText:{
    fontSize: 14,
    fontFamily: FONT_FAMILY.Montserrat,
  },
  price: {
    marginRight: 6,
    marginLeft: 6,
  },
  avatar: {
    marginLeft: 12,
    marginRight: 4,
  },
  priceConatiner: {
    flexDirection: 'row',
  },
  AvatarConatiner: {
    flexDirection: 'row',
  },
});
