import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const CustomButton = () => {
  return (
    <SafeAreaView>
      <View style={styles.btnMain}>
        <Text style={styles.textt}>Login</Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnMain: {
    width: widthPixel(311),
    height: widthPixel(48),
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
  },
  textt: {
    textAlign: 'center',
  },
});
