import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    id: 1,
    title: 'Discover the Fantasy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: require('../assets/images/onboarding-img1.png'),
  },
  {
    id: 2,
    title: 'Discover the Title Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: require('../assets/images/onboarding-img2.png'),
  },
  {
    id: 3,
    title: 'Discover the Title Three',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: require('../assets/images/onboarding-img3.png'),
  },
];

const OnBoarding = () => {
  const [showScreen, setShowScreen] = useState(false);

  const buttonLabel = (label) => {
    return (
      <View style={{ padding: 12 }}>
        <Text>{label}</Text>
      </View>
    );
  };

  if (!showScreen) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={item.image} resizeMode="contain" />
            <Text>{item.title}</Text>
            <Text style={{ paddingTop: 5 }}>{item.description}</Text>
          </View>
        )}
        activeDotStyle={{
          backgroundColor: 'green',
          width: 30,
        }}
        renderNextButton={() => buttonLabel('Next')}
        // dotStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        // showDoneButton={true}
        // onDone={() => setShowScreen(true)}
      />
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  // Your styles can go here
});
