import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import Menu from '../lib/const/Menu';
import ProductCard from '../components/ProductCard';
import PopularProducts from '../components/PopularProducts';
import Store from '../components/Store';

const Home = ({navigation}) => {
  const customButtonStyle = {
    width: widthPixel(147),
    height: widthPixel(28),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(14),
    justifyContent: 'center',
    paddingStart: pixelSizeVertical(14),
  };
  const customButtonTextStyle = {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '700',
  };
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

  const menuRows = Math.ceil(Menu.length / 4);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} />
        <ScrollView
          horizontal
          contentContainerStyle={styles.horizontalScrollViewContent}>
          <ImageBackground
            style={styles.imgbg}
            source={require('../assets/images/Grocery1.png')}>
            <Text style={styles.backgroundImageText}>
              Ready to deliver to your home
            </Text>
            <CustomButton
              text="Start Shopping"
              style={customButtonStyle}
              textStyle={customButtonTextStyle}
            />
          </ImageBackground>
          <Image
            style={styles.quarter}
            source={require('../assets/images/Grocery2.png')}
          />
        </ScrollView>

        {Array.from({length: menuRows}, (_, rowIndex) => (
          <View key={rowIndex} style={styles.rowContainer}>
            {Menu.slice(rowIndex * 4, (rowIndex + 1) * 4).map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => item.onPress(navigation)}>
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
            style={ButtonStyle}
            textStyle={ButtonTextStyle}
          />
        </View>
        <ProductCard navigation={navigation} />

        <View style={styles.newProduct}>
          <Text style={styles.productText}>Popular Product </Text>
          <CustomButton
            text="See All"
            style={ButtonStyle}
            textStyle={ButtonTextStyle}
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
                style={ButtonStyle}
                textStyle={ButtonTextStyle}
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
    fontFamily: FONT_FAMILY.Montserrat,
    letterSpacing: fontPixel(1.221),
    lineHeight: fontPixel(16),
    textTransform: 'uppercase',
    width: widthPixel(201),
    marginBottom: pixelSizeVertical(17),
    fontWeight: '600',
  },
  imgbg: {
    justifyContent: 'flex-end',
    paddingHorizontal: pixelSizeVertical(17),
    justifyContent: 'center',
    // backgroundColor: 'red',
    resizeMode: 'contain',
  },
  quarter: {
    backgroundColor: 'yellow',
  },
  rowContainer: {
    flexDirection: 'row',
    // marginBottom: 1, // Add margin between rows
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
    fontWeight: '600',
    fontFamily: FONT_FAMILY.Montserrat,
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
    fontWeight: '700',
    fontFamily: FONT_FAMILY.Montserrat,
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
    backgroundColor: '#33907C',
    height: 184,
  },
  storeComponent: {
    position: 'absolute',
    top: 60,
  },
});

export default Home;

// Your Menu data remains the same as you provided earlier
