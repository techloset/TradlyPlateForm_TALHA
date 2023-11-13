import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLOR, FONT_FAMILY} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import SvgIcons from '../lib/const/SvgIcons';
import CustomButton from '../components/CustomButton';
import {ProductDetails} from '../lib/const/Product';

const ProductDetail = () => {
  const lastThreeIcons = SvgIcons.slice(-3);

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

  return (
    <SafeAreaView style={{backgroundColor: COLOR.lightBlue, height: '100%'}}>
      <ScrollView>
        <View style={styles.upperBorder}></View>
        <ImageBackground
          style={styles.imgbg}
          source={require('../assets/images/cocaColaImg.png')}>
          <View style={styles.shortcutContainer}>
            {SvgIcons.map((icon, index) => {
              const isLastThree = lastThreeIcons.includes(icon);

              if (isLastThree) {
                return null;
              }

              return (
                <View key={index} style={[styles.Shortcuts, styles[icon.name]]}>
                  {icon.component}
                </View>
              );
            })}

            {lastThreeIcons.length > 0 && (
              <View style={styles.trioContainer}>
                {lastThreeIcons.map((icon, index) => (
                  <View
                    key={index}
                    style={[styles.Shortcuts, styles[icon.name]]}>
                    {icon.component}
                  </View>
                ))}
              </View>
            )}
          </View>
        </ImageBackground>

        <View style={styles.sectionTwo}>
          <View>
            <Text style={styles.textCola}>Coca Cola</Text>
          </View>
          <View style={styles.otherText}>
            <Text style={styles.innerTextFirst}>$25</Text>
            <Text style={styles.innerTextTwo}>
              <Text style={styles.spanText}>$50</Text> 50% off
            </Text>
          </View>
        </View>

        <View style={styles.sectionThree}>
          <Image
            style={styles.tradlyIcon}
            source={require('../assets/images/Ticon.png')}
          />
          <Text style={styles.innerTextTwo}>Tradly Store</Text>
          <View style={styles.customButton}>
            <CustomButton
              text="Follow"
              style={ButtonStyle}
              textStyle={ButtonTextStyle}
            />
          </View>
        </View>

        <View style={styles.sectionFour}>
          <Text style={[styles.lorem, styles.loremContainer]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
            cras placerat diam ipsum ut. Nisi vel adipiscing massa bibendum
            diam. Suspendisse mattis dui maecenas duis mattis. Mattis aliquam at
            arcu, semper nunc, venenatis et pellentesque eu. Id tristique
            maecenas tristique habitasse eu elementum sed. Aliquam eget lacus,
            arcu, adipiscing eget feugiat in dolor sagittis.
          </Text>
          <Text style={[styles.innerLorem, styles.loremContainer]}>
            Non commodo, a justo massa porttitor sed placerat in. Orci tristique
            etiam tempus sed. Mi varius morbi egestas dictum tempor nisl. In{' '}
          </Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.textDetail}>Details</Text>
          {ProductDetails.map((item, index) => {
            return (
              <View style={styles.detailText} key={index}>
                <View style={{width: '50%'}}>
                  <Text style={[styles.result, styles.statusText]}>
                    {item.currentStatus}
                  </Text>
                </View>

                <View style={{marginBottom: 5}}>
                  <Text style={styles.result}>{item.result}</Text>
                </View>
              </View>
            );
          })}
        </View>

        <View style={styles.AdditonalContainer}>
          <Text style={styles.textAdditional}>Additional Details</Text>
          <View style={styles.addressInnerContainer}>
            <Text
              style={[
                styles.result,
                styles.statusText,
                styles.deliveryInnerText,
              ]}>
              Delivery Details
            </Text>
            <Text style={[styles.result, styles.deliveryInnerTextTwo]}>
              Home Delivery Available, Cash On Delivery
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  upperBorder: {
    height: 44,
    backgroundColor: COLOR.bodygreen,
  },
  imgbg: {
    height: widthPixel(226),
  },

  shortcutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  Shortcuts: {
    backgroundColor: '#ecedec',
    opacity: 0.6,
    borderRadius: 100,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(16),
  },
  trioContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '50%',
    marginRight: 16,
  },
  back: {
    marginLeft: pixelSizeVertical(12),
    marginRight: pixelSizeVertical(93),
  },
  love: {
    marginHorizontal: pixelSizeVertical(13),
  },
  sectionTwo: {
    backgroundColor: COLOR.white,
    height: widthPixel(95),
  },
  textCola: {
    color: COLOR.grey,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '700',
    marginBottom: pixelSizeVertical(10),
    marginTop: pixelSizeVertical(16),
    marginLeft: pixelSizeVertical(16),
  },
  innerTextFirst: {
    color: COLOR.bodygreen,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '700',
    marginRight: pixelSizeVertical(14),
  },
  innerTextTwo: {
    color: COLOR.grey,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '500',
  },
  spanText: {
    textDecorationLine: 'line-through',
  },
  otherText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: pixelSizeVertical(16),
  },
  sectionThree: {
    marginTop: pixelSizeVertical(6),
    flexDirection: 'row',
    alignItems: 'center',
    height: widthPixel(72),
    backgroundColor: COLOR.white,
  },
  tradlyIcon: {
    width: 32,
    height: 32,
    marginRight: pixelSizeVertical(11),
    marginLeft: pixelSizeVertical(12),
  },
  customButton: {
    marginLeft: pixelSizeVertical(133),
  },
  sectionFour: {
    marginTop: pixelSizeVertical(6),
    textAlign: 'justify',
    backgroundColor: COLOR.white,
  },
  lorem: {
    marginTop: pixelSizeVertical(61),
  },
  innerLorem: {
    marginTop: pixelSizeVertical(6),
    marginBottom: pixelSizeVertical(54),
  },
  loremContainer: {
    marginHorizontal: pixelSizeVertical(22),

    color: COLOR.grey,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '400',
    lineHeight: 20,
  },
  detailContainer: {
    backgroundColor: COLOR.white,
    marginTop: pixelSizeVertical(6),
  },
  detailText: {
    flexDirection: 'row',
    marginHorizontal: 33.5,
    marginTop: pixelSizeVertical(12),
  },
  statusText: {
    opacity: 0.7,
  },
  result: {
    color: COLOR.grey,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '400',
    lineHeight: 20,
  },
  textDetail: {
    color: COLOR.grey,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.Montserrat,
    fontWeight: '800',
    marginLeft: pixelSizeVertical(32),
    marginBottom: pixelSizeVertical(18),
    marginTop: pixelSizeVertical(12),
  },
  AdditonalContainer: {
    marginBottom: pixelSizeVertical(50),
    backgroundColor: COLOR.white,
    marginTop: pixelSizeVertical(6),
  },
  addressInnerContainer: {
    flexDirection: 'row',
  },
  textAdditional: {
    color: COLOR.black,
    fontSize: fontPixel(18),
    fontWeight: '600',
    marginLeft: pixelSizeVertical(30),
    marginBottom: pixelSizeVertical(20),
    marginTop: pixelSizeVertical(12),
  },
  deliveryInnerText: {
    marginLeft: pixelSizeVertical(30),
    marginRight: pixelSizeVertical(13),
  },
  deliveryInnerTextTwo: {
    width: '50%',
  },
});
