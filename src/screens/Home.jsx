import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import Menu from '../lib/const/Menu'
import ratio from '../styles/ratio';
const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
import { COLOR, FONT_FAMILY } from '../styles/GlobalStyles';

const Home = () => {
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
    fontFamily: 'Montserrat-Medium',
    fontWeight: '700',
  };
  return (
    <SafeAreaView>
      <Header />
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.horizontalScrollViewContent}
      >
        <ImageBackground
          style={styles.imgbg}
          source={require('../assets/images/Grocery1.png')}
        >
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

      {
        Menu.map((item) =>{
          console.log(item)
          return (
            <View>

            </View>
          )
        })
      }

    </SafeAreaView>
  );
};

export default Home;

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
    backgroundColor: 'red',
    resizeMode: 'contain',
    // width: widthPixel(320), // 
    
  },
  quarter: {
    backgroundColor: 'yellow',
    // width: widthPixel(100), // Adjust the width as needed
  },
});
