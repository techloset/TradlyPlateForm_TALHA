import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {Store} from '../lib/const/Product';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import CustomButton from './CustomButton';

import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const store = () => {
  const ButtonStyle = {
    width: widthPixel(87),
    height: widthPixel(23),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    backgroundColor: COLOR.bodygreen,
  };
  const ButtonTextStyle = {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '500',
  };
  return (
    <ScrollView horizontal>
      <View style={{flexDirection: 'row'}}>
        {Store.map((item, index) => {
        //   console.log(item);
          return (
            <View key={index} style={styles.container}>
              <View>
                <Image style={{height: 105}} source={item.source} />
              </View>
              <View style={styles.innerContainer}>
                <View style={styles.AvatarConatiner}>
                  <Image style={styles.avatar} source={item.avatar} />
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.customButton}>
                  <CustomButton
                    text="Follow"
                    style={ButtonStyle}
                    textStyle={ButtonTextStyle}
                  />
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default store;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#0000001a',
    borderRadius: 10,
    // justifyContent: 'center',
    // backgroundColor: '',
    margin: 10,
    // position:"relative"
    // width:160,
    height:200,
    backgroundColor:"white"
  },
    innerContainer: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   marginTop: 16,
    //   marginBottom: 11,
      // justifyContent:"center",
      alignItems: 'center',
      position:"absolute",
      top:65,
      left:35,
    //   justifyContent:'center'
    },
  title: {
    color: '#4A4A4A',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    // marginLeft: 12,
    marginTop: 5,
  },

  avatar: {
    marginLeft: 12,
    marginRight: 4,
  },
  customButton:{
    marginTop:11
  }
});
