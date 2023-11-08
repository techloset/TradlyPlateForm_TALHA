import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

// import ratio from '../styles/ratio';
// const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const CustomButton = ({style, text, textStyle}) => {
  return (
    <SafeAreaView>
      <View style={style}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
