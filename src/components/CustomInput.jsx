import {StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import React from 'react';

import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const CustomInput = props => {
  return (
    <SafeAreaView>
      <View style={props.inputContainer}>
        <TextInput
          style={props.style}
          placeholder={props.placeHolder}
          placeholderTextColor={props.placeholderTextColor}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    height: widthPixel(48),
    padding: pixelSizeVertical(15),
  },
  inputContainer: {
    marginTop: pixelSizeVertical(16),
    marginHorizontal: pixelSizeVertical(32),
  },
});
