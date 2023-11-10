import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {COLOR} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import SvgIcons from '../lib/const/SvgIcons';

const ProductDetail = () => {
  // Get the last three items from SvgIcons array
  const lastThreeIcons = SvgIcons.slice(-3);

  return (
    <SafeAreaView>
      <View style={styles.upperBorder}></View>
      <ImageBackground
        style={styles.imgbg}
        source={require('../assets/images/cocaColaImg.png')}>
        <View style={styles.shortcutContainer}>
          {SvgIcons.map((icon, index) => {
            const isLastThree = lastThreeIcons.includes(icon);

            if (isLastThree) {
              return null; // Skip rendering individual icons, will be handled below
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
                <View key={index} style={[styles.Shortcuts, styles[icon.name]]}>
                  {icon.component}
                </View>
              ))}
            </View>
          )}
        </View>
      </ImageBackground>
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
});
