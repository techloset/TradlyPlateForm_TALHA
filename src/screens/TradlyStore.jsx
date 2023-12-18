import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Back from '../assets/images/Back.svg';
import Search from '../assets/images/Search.svg';
import CustomButton from '../components/CustomButton';
import WhishlistXTradlyStore from '../components/WhishlistXTradlyStore';
import { COLOR, FONT_FAMILY } from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
import SCREENS from '../lib/const/Screen';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const TradlyStore = ({navigation}) => {
  const ButtonStyle = {
    width: widthPixel(87),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    backgroundColor: COLOR.bodygreen,
    padding: 7,
  };
  const ButtonTextStyle = {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
  };
  const GrocerieButtonStyle = {
    width: widthPixel(118),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(24),
    justifyContent: 'center',
    backgroundColor: COLOR.lightGrey,
    padding: 10,
  };
  const GrocerieTextStyle = {
    textAlign: 'center',
    color: COLOR.grey,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.MontserratRegular,
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tradlyHeader}>
          <View style={styles.tradlyHeaderInner}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREENS.HOME)}>
              <Back />
            </TouchableOpacity>
            <Text style={styles.heading}> Tradly Store </Text>
            <TouchableOpacity>
              <Search />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.storecontainer}>
            <View style={styles.followContainer}>
              <Image
                style={styles.storeImage}
                source={require('../assets/images/Ticon.png')}
              />
              <View style={styles.storeText}>
                <Text style={styles.storeTextOne}>Tradly Store</Text>
                <Text style={styles.storeTextTwo}>tradly.app</Text>
              </View>
              <CustomButton
                text="Follow"
                style={ButtonStyle}
                textStyle={ButtonTextStyle}
              />
            </View>

            <Text style={styles.loremText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue
              nunc vel rhoncus, sed. Neque hendrerit risus ut metus ultrices ac.
              Dui morbi eu amet id mauris. Eget at ut.
            </Text>

            <View style={styles.customButtonStyle}>
              <View style={styles.groceryBtn}>
                <CustomButton
                  text="Groceries"
                  style={GrocerieButtonStyle}
                  textStyle={GrocerieTextStyle}
                />
              </View>
              <CustomButton
                text="Vegetables"
                style={GrocerieButtonStyle}
                textStyle={GrocerieTextStyle}
              />
            </View>
          </View>
          <View style={styles.followersContainer}>
            <View style={styles.totalcontainer}>
              <Text style={styles.totalText}>Total Followers</Text>
              <Text style={styles.totalText}>0</Text>
            </View>
            <View style={styles.totalcontainer}>
              <Text style={styles.totalText}>Total Products</Text>
              <Text style={styles.totalText}>0</Text>
            </View>
          </View>

          <View style={{marginTop: pixelSizeVertical(30)}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{marginLeft: pixelSizeVertical(16)}}>
                <CustomButton
                  text="All Product"
                  style={GrocerieButtonStyle}
                  textStyle={GrocerieTextStyle}
                />
              </View>
              <View style={{marginLeft: pixelSizeVertical(12)}}>
                <CustomButton
                  text="Fruits"
                  style={GrocerieButtonStyle}
                  textStyle={GrocerieTextStyle}
                />
              </View>
              <View style={{marginLeft: pixelSizeVertical(12)}}>
                <CustomButton
                  text="Vegetables"
                  style={GrocerieButtonStyle}
                  textStyle={GrocerieTextStyle}
                />
              </View>
              <View style={{marginLeft: pixelSizeVertical(12)}}>
                <CustomButton
                  text="HomeCare"
                  style={GrocerieButtonStyle}
                  textStyle={GrocerieTextStyle}
                />
              </View>
              <View style={{marginLeft: pixelSizeVertical(12)}}>
                <CustomButton
                  text="Vegetables"
                  style={GrocerieButtonStyle}
                  textStyle={GrocerieTextStyle}
                />
              </View>
            </ScrollView>
          </View>

          <WhishlistXTradlyStore />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TradlyStore;

const styles = StyleSheet.create({
  tradlyHeader: {
    backgroundColor: COLOR.bodygreen,
    justifyContent: 'space-around',
    height: widthPixel(125),
  },
  tradlyHeaderInner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  heading: {
    fontSize: fontPixel(24),
    color: COLOR.white,
    fontFamily: FONT_FAMILY.MontserratBold,
  },
  mainContainer: {
    backgroundColor: COLOR.lightBlue,
  },
  storecontainer: {
    backgroundColor: COLOR.white,
    height: widthPixel(240),
  },
  followContainer: {
    flexDirection: 'row',
    marginTop: pixelSizeVertical(22),
    marginLeft: pixelSizeVertical(46),
    alignItems: 'center',
  },
  storeImage: {
    width: widthPixel(46),
    height: widthPixel(46),
    marginRight: pixelSizeVertical(10),
  },
  storeText: {
    marginRight: pixelSizeVertical(63),
  },
  storeTextone: {
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.MontserratRegular,
    color: COLOR.grey,
  },
  storeTextOne: {
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.grey,
  },
  storeTextTwo: {
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.grey,
    opacity: 0.5,
  },
  loremText: {
    marginLeft: pixelSizeVertical(50),
    marginTop: pixelSizeVertical(25),
    width: '80%',
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.grey,
    opacity: 0.7,
  },
  customButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: pixelSizeVertical(21),
  },
  groceryBtn: {
    marginRight: pixelSizeVertical(10),
  },
  followersContainer: {
    height: widthPixel(88),
    backgroundColor: COLOR.white,
    marginTop: pixelSizeVertical(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  totalcontainer: {
    alignItems: 'center',
  },
  totalText: {
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    color: COLOR.grey,
  },
});
