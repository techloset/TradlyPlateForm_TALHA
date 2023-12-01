import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLOR} from '../styles/GlobalStyles';
import ratio from '../styles/ratio';
import LoginScreen from './auth/LoginScreen';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const slides = [
  {
    id: 1,
    description: 'Empowering Artisans, Farmers & Micro Business',
    image: require('../assets/images/onb1.png'),
  },
  {
    id: 2,
    description: 'Connecting NGOs, Social Enterprises with Communities',
    image: require('../assets/images/onb2.png'),
  },
  {
    id: 3,
    description: ' Donate, Invest & Support infrastructure projects',
    image: require('../assets/images/onb3.png'),
  },
];

const OnBoarding = ({navigation}) => {
  const [showScreen, setShowScreen] = useState(false);

  const buttonLabel = label => (
    <View style={{padding: 12}}>
      <Text>{label}</Text>
    </View>
  );

  if (!showScreen) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: COLOR.bodygreen,
              height: '50%',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={item.image}
              style={{marginTop: 391}}
              resizeMode="contain"
            />
            <Text>{item.title}</Text>
            <Text
              style={{
                paddingTop: 5,
                fontSize: fontPixel(25),
                color: COLOR.bodygreen,
                marginHorizontal: 20,
                textAlign: 'center',
              }}>
              {item.description}
            </Text>
          </View>
        )}
        activeDotStyle={{
          backgroundColor: 'green',
          width: 30,
        }}
        renderNextButton={() => buttonLabel('Next')}
        renderDoneButton={() => buttonLabel('Done')}
        onDone={() => setShowScreen(true)}
      />
    );
  }

  return (
    <View style={{}}>
      <LoginScreen navigation={navigation} />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  // Your styles can go here
});
