import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import Back from '../assets/images/Back.svg';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import Location from '../assets/images/location.svg';
import {TextInputLoop} from '../lib/const/Product';
import CustomButton from '../components/CustomButton';

const CheckOutFirst = () => {
  const ButtonStyle = {
    width: widthPixel(313),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    backgroundColor: COLOR.bodygreen,
    // padding: 7,
    height: 50,
  };
  const ButtonTextStyle = {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '500',
  };
  return (
    <SafeAreaView style={{height: '100%'}}>
      <View style={styles.main}>
        <View style={styles.backContainer}>
          <TouchableOpacity>
            <Back />
          </TouchableOpacity>
        </View>
        <View style={styles.cartText}>
          <Text style={styles.textCart}>Add a new Address </Text>
        </View>
      </View>
      <View>
        <View style={styles.SectionTwo}>
          <TouchableOpacity>
            <View style={styles.locationInner}>
              <Location />
              <Text style={styles.lcoationText}>Use current location</Text>
            </View>
          </TouchableOpacity>
        </View>

        {TextInputLoop.map((item, index) => {
          return (
            <View key={index} style={styles.inputContaienr}>
              <TextInput style={styles.input} placeholder={item.placeHolder} />
            </View>
          );
        })}
      </View>
      <View style={styles.saveContainer}>
        <View>
          <CustomButton
            text="Save"
            style={ButtonStyle}
            textStyle={ButtonTextStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckOutFirst;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLOR.bodygreen,
    height: widthPixel(116),
    flexDirection: 'row',
    alignItems: 'center',
  },

  backContainer: {
    marginLeft: pixelSizeVertical(16),
    justifyContent: 'center',
  },
  cartText: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  textCart: {
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '700',
    color: COLOR.white,
  },
  SectionTwo: {
    height: widthPixel(65),
    backgroundColor: COLOR.white,
  },
  locationInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: pixelSizeVertical(21),
  },
  lcoationText: {
    fontSize: fontPixel(16),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.Blue,
    marginLeft: pixelSizeVertical(10),
  },

  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 0.3,
    padding: 10,
  },
  inputText: {
    fontSize: fontPixel(14),
    fontWeight: '400',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.grey,
    marginLeft: pixelSizeVertical(16),
  },
  inputContaienr: {
    marginTop: pixelSizeVertical(16),
  },
  saveContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
});