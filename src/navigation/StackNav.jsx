import React from 'react';
import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NAVIGATION from './StackData';


const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {NAVIGATION.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.screenName}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
