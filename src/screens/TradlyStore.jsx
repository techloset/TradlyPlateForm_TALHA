import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Back from '../assets/images/Back.svg';
import Search from '../assets/images/Search.svg';
import CustomButton from '../components/CustomButton';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import {Product} from '../lib/const/Product';

const TradlyStore = () => {
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
    fontWeight: '500',
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
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '400',
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.tradlyHeader}>
          <View style={styles.tradlyHeaderInner}>
            <TouchableOpacity>
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
            <ScrollView horizontal>
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

          <View style={styles.tradlyStoreProduct}>
            {Product.map((item, index) => {
              if (index === 0) {
                return null;
              }
              return (
                <View key={index} style={styles.container}>
                  <Image source={item.source} />
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.innerContainer}>
                    <View style={styles.AvatarConatiner}>
                      <Image style={styles.avatar} source={item.avatar} />
                      <Text style={styles.subtitle}>{item.subtitle}</Text>
                    </View>
                    <View style={styles.priceConatiner}>
                      <Text style={styles.lastPrice}>{item.lastPrice}</Text>
                      <Text style={styles.price}>{item.price}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
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
    fontWeight: '700',
    fontFamily: FONT_FAMILY.Montserrat,
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
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '400',
    color: COLOR.grey,
  },
  storeTextOne: {
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '500',
    color: COLOR.grey,
  },
  storeTextTwo: {
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '500',
    color: COLOR.grey,
    opacity: 0.5,
  },
  loremContainer: {
    backgroundColor: 'green',
  },
  loremText: {
    marginLeft: pixelSizeVertical(50),
    marginTop: pixelSizeVertical(25),
    width: '80%',
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '500',
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
    fontWeight: '500',
    color: COLOR.grey,
  },

  container: {
    borderWidth: 1,
    borderColor: '#0000001a',
    borderRadius: 10,
    margin: pixelSizeVertical(10),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(11),
    alignItems: 'center',
  },
  title: {
    color: '#4A4A4A',
    fontSize: fontPixel(14),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
    marginLeft: pixelSizeVertical(12),
    marginTop: pixelSizeVertical(11),
  },
  subtitle: {
    color: '#4F4F4F',
    fontSize: fontPixel(14),
    fontWeight: '500',
    fontFamily: FONT_FAMILY.Montserrat,
  },
  price: {
    marginRight: pixelSizeVertical(6),
    marginLeft: pixelSizeVertical(6),
  },
  priceConatiner: {
    flexDirection: 'row',
  },
  avatar: {
    marginLeft: pixelSizeVertical(12),
    marginRight: pixelSizeVertical(4),
  },
  AvatarConatiner: {
    flexDirection: 'row',
  },
  tradlyStoreProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: pixelSizeVertical(24),
  },
});
