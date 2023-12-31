import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Store} from '../lib/const/Product';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import CustomButton from './CustomButton';
import ratio from '../styles/ratio';
import {inputStyles} from './InputStylesHeader';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const store = ({navigation}) => {
  const handleItemPress = item => {
    navigation.navigate('TradlyStore', {item});
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: 'row'}}>
        {Store.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => handleItemPress(item)}>
              <View style={styles.container}>
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
                        style={inputStyles.ButtonStyleStore}
                        textStyle={inputStyles.ButtonTextStyleStore}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
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
    borderColor: COLOR.dimGray,
    borderRadius: 10,
    margin: 10,
    height: 200,
    backgroundColor: COLOR.white,
  },
  innerContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 65,
    left: 35,
  },
  title: {
    color: COLOR.darkGray,
    fontSize: 14,
    fontFamily: FONT_FAMILY.Montserrat,
    marginTop: 5,
  },

  avatar: {
    marginLeft: 12,
    marginRight: 4,
  },
  customButton: {
    marginTop: 11,
  },
});
