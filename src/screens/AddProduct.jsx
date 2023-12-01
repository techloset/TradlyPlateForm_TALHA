import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import Back from '../assets/images/Back.svg';
import Plus from '../assets/images/plus.png';
import {AddProductInput} from '../lib/const/Product';
import CustomButton from '../components/CustomButton';

const AddProduct = ({navigation}) => {
  const ButtonStyle = {
    width: widthPixel(311),
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
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '600',
  };
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <View style={styles.backContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Store')}>
              <Back />
            </TouchableOpacity>
          </View>
          <View style={styles.cartText}>
            <Text style={styles.textCart}>Add Product</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.addImageContainer}>
            <View style={styles.dahsedContainer}>
              <Image source={Plus} />
              <Text style={styles.photoText}>Add Photos</Text>
              <Text style={styles.photoTextOther}>1600 x 1200 for hi res</Text>
            </View>
            <Text style={styles.maxStyle}>Max. 4 photos per product</Text>
          </View>
        </TouchableOpacity>
        <View style={{backgroundColor: COLOR.white}}>
          <View style={styles.container}>
            {AddProductInput.map((item, index) => {
              const isHalfWidth = index === 2 || index === 3;

              return (
                <View
                  key={index}
                  style={[
                    styles.inputContainer,
                    isHalfWidth && styles.halfWidth,
                  ]}>
                  <TextInput
                    style={styles.input}
                    placeholder={item.placeHolder}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.saveContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Store')}>
              <CustomButton
                text="Add Product"
                style={ButtonStyle}
                textStyle={ButtonTextStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProduct;

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
  addImageContainer: {
    backgroundColor: COLOR.lightBlue,
  },
  dahsedContainer: {
    width: widthPixel(140),
    height: widthPixel(105),
    marginTop: pixelSizeVertical(31),
    marginLeft: pixelSizeVertical(21),
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLOR.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoText: {
    fontSize: fontPixel(14),
    fontWeight: '600',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.dimblack,
    marginTop: pixelSizeVertical(3),
  },
  photoTextOther: {
    fontSize: fontPixel(10),
    fontWeight: '600',
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.dimblack,
  },
  maxStyle: {
    marginTop: pixelSizeVertical(14),
    marginBottom: pixelSizeVertical(27),
    marginLeft: pixelSizeVertical(16),
  },

  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 0.3,
    padding: 10,
  },
  inputContainer: {
    marginTop: pixelSizeVertical(16),
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  halfWidth: {
    width: '50%',
  },
  saveContainer: {
    // width: '100%',
    // position: 'absolute',
    // bottom: 0,
    alignItems: 'center',
    marginTop: pixelSizeVertical(12),
    marginBottom: pixelSizeVertical(28),
  },
});
