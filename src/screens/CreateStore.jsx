import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Back from '../assets/images/Back.svg';
import Mystore from '../assets/images/myStore.png';
import CustomButton from '../components/CustomButton';
import { CreateStoreInput } from '../lib/const/Product';
import { COLOR, FONT_FAMILY } from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
import SCREENS from '../lib/const/Screen';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const CreateStore = ({navigation}) => {
  const ButtonStyle = {
    width: widthPixel(313),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    backgroundColor: COLOR.bodygreen,
    height: 50,
  };
  const ButtonTextStyle = {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.MontserratSemi,
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={styles.main}>
          <View style={styles.backContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREENS.STORE)}>
              <Back />
            </TouchableOpacity>
          </View>
          <View style={styles.cartText}>
            <Text style={styles.textCart}>My Store </Text>
          </View>
        </View>
        <View style={styles.inputImageContaienr}>
          <View style={styles.storeImage}>
            <Image source={Mystore} />
            <Text style={styles.createStoreText}>
              This information is used to set up your shop
            </Text>
          </View>

          {CreateStoreInput.map((item, index) => {
            return (
              <View key={index} style={styles.inputContaienr}>
                <TextInput
                  style={styles.input}
                  placeholder={item.placeHolder}
                />
              </View>
            );
          })}
          <View style={styles.saveContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREENS.MyStore)}>
              <CustomButton
                text="Create"
                style={ButtonStyle}
                textStyle={ButtonTextStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CreateStore;

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
    fontFamily: FONT_FAMILY.MontserratBold,
    color: COLOR.white,
  },
  inputImageContaienr: {
    backgroundColor: COLOR.white,
  },
  inputContaienr: {
    marginTop: pixelSizeVertical(16),
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 0.3,
  },
  saveContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(20),
  },
  storeImage: {
    alignItems: 'center',
    backgroundColor: COLOR.lightBlue,
  },
  createStoreText: {
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.grey,
    width: widthPixel(240),
    textAlign: 'center',
    marginTop: pixelSizeVertical(25),
    marginBottom: pixelSizeVertical(17),
  },
});
