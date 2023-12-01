import {StyleSheet, Text, View, SafeAreaView,Image} from 'react-native';
import React from 'react';


const CustomButton = ({style, text, textStyle,imageSource}) => {
  return (
    <SafeAreaView>
      <View style={style}>
      {imageSource && <Image  source={imageSource}  />}
        <Text style={textStyle}>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
