import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import PopularProducts from '../components/PopularProducts';
import ProductCard from '../components/ProductCard';
import Store from '../components/Store';
import Menu from '../lib/const/Menu';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
import {inputStyles} from '../components/InputStylesHeader';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const Home = ({navigation}) => {
  const menuRows = Math.ceil(Menu.length / 4);

  const handleMenuPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 11,
          }}>
          <Image
            style={styles.imgbg}
            source={require('../assets/images/Grocery1.png')}
          />
          <View style={{position: 'absolute', left: 30, top: 30}}>
            <Text style={styles.backgroundImageText}>
              Ready to deliver to your home
            </Text>
            <CustomButton
              text="Start Shopping"
              style={inputStyles.customButtonStyleHome}
              textStyle={inputStyles.customButtonTextStyleHome}
            />
          </View>
          <Image
            style={styles.quarter}
            source={require('../assets/images/Grocery2.png')}
          />
        </View>

        {Array.from({length: menuRows}, (_, rowIndex) => (
          <View key={rowIndex} style={styles.rowContainer}>
            {Menu.slice(rowIndex * 4, (rowIndex + 1) * 4).map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleMenuPress(item.screen)}>
                <ImageBackground style={styles.menuImages} source={item.source}>
                  <Text style={styles.menuText}>{item.title}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <View style={styles.newProduct}>
          <Text style={styles.productText}>New Product </Text>
          <CustomButton
            text="See All"
            style={inputStyles.ButtonStyleStore}
            textStyle={inputStyles.ButtonTextStyleStore}
          />
        </View>
        <ProductCard navigation={navigation} />

        <View style={styles.newProduct}>
          <Text style={styles.productText}>Popular Product </Text>
          <CustomButton
            text="See All"
            style={inputStyles.ButtonStyleStore}
            textStyle={inputStyles.ButtonTextStyleStore}
          />
        </View>
        <PopularProducts />

        <View style={styles.storeContainer}>
          <View style={styles.storeMainContainer}>
            <View style={styles.newProduct}>
              <Text style={[styles.productText, styles.StoreText]}>
                Store to Follow{' '}
              </Text>
              <CustomButton
                text="View All"
                style={inputStyles.ButtonStyleStore}
                textStyle={inputStyles.ButtonTextStyleStore}
              />
            </View>
          </View>
          <View style={styles.storeComponent}>
            <Store navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  horizontalScrollViewContent: {
    flexDirection: 'row',
  },
  backgroundImageText: {
    fontSize: fontPixel(14),
    color: COLOR.white,
    fontFamily: FONT_FAMILY.MontserratSemi,
    letterSpacing: fontPixel(1.221),
    lineHeight: fontPixel(16),
    textTransform: 'uppercase',
    width: widthPixel(201),
    marginBottom: pixelSizeVertical(17),
  },
  imgbg: {
    height: widthPixel(165),
    marginLeft: pixelSizeVertical(10),
  },
  quarter: {
    height: widthPixel(165),
    marginLeft: pixelSizeVertical(-56),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  menuImages: {
    width: pixelSizeVertical(97),
    height: pixelSizeVertical(97),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0.5,
  },
  menuText: {
    color: COLOR.white,
    fontSize: fontPixel(10),
    fontFamily: FONT_FAMILY.MontserratSemi,
  },
  newProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 26,
  },
  productText: {
    color: COLOR.grey,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.MontserratBold,
  },

  storeContainer: {
    marginBottom: 130,
    marginTop: 30,
  },
  StoreText: {
    color: COLOR.white,
  },

  storeMainContainer: {
    position: 'relative',
    backgroundColor: COLOR.bodygreen,
    height: 184,
  },
  storeComponent: {
    position: 'absolute',
    top: 60,
  },
});

export default Home;
